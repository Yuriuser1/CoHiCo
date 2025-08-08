
'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Truck, CreditCard } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { DELIVERY_OPTIONS } from '@/lib/types';

export default function CheckoutPage() {
  const { data: session } = useSession();
  const { items, getTotalPrice } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Shipping Address
    firstName: '',
    lastName: '',
    email: session?.user?.email || '',
    phone: '',
    city: '',
    address: '',
    apartment: '',
    postalCode: '',
    
    // Delivery & Payment
    deliveryType: 'COURIER_SPB',
    paymentMethod: 'card',
    notes: '',
  });

  const formatPrice = (priceInKopecks: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    }).format(priceInKopecks / 100);
  };

  const selectedDeliveryOption = DELIVERY_OPTIONS.find(option => option.type === formData.deliveryType);
  const subtotal = getTotalPrice();
  const deliveryPrice = selectedDeliveryOption?.price || 0;
  const total = subtotal + deliveryPrice;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: items?.map(item => ({
            productId: item?.productId,
            quantity: item?.quantity,
            price: item?.product?.price,
          })),
          shippingAddress: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            address: formData.address,
            apartment: formData.apartment,
            postalCode: formData.postalCode,
          },
          deliveryType: formData.deliveryType,
          paymentMethod: formData.paymentMethod,
          notes: formData.notes,
          totalAmount: total,
          subtotalAmount: subtotal,
          shippingAmount: deliveryPrice,
        }),
      });

      if (response.ok) {
        const order = await response.json();
        // Redirect to payment or success page
        window.location.href = `/orders/${order.id}`;
      } else {
        throw new Error('Ошибка создания заказа');
      }
    } catch (error) {
      console.error('Ошибка оформления заказа:', error);
      alert('Произошла ошибка при оформлении заказа');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <CreditCard className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Войдите в аккаунт</h1>
            <p className="text-gray-600 mb-8">Для оформления заказа необходимо войти в аккаунт</p>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/auth/signin">Войти</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/auth/signup">Регистрация</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Корзина пуста</h1>
            <p className="text-gray-600 mb-8">Добавьте товары в корзину для оформления заказа</p>
            <Button asChild>
              <Link href="/catalog">Перейти к покупкам</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Оформление заказа</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Контактная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Имя *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Фамилия *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    Адрес доставки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="city">Город *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Адрес *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="apartment">Квартира/офис</Label>
                      <Input
                        id="apartment"
                        value={formData.apartment}
                        onChange={(e) => handleInputChange('apartment', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Индекс *</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Способ доставки</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={formData.deliveryType}
                    onValueChange={(value) => handleInputChange('deliveryType', value)}
                  >
                    {DELIVERY_OPTIONS.map((option) => (
                      <div key={option.type} className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value={option.type} id={option.type} />
                        <div className="flex-1">
                          <Label htmlFor={option.type} className="cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">{option.name}</p>
                                <p className="text-sm text-gray-600">{option.description}</p>
                                <p className="text-sm text-gray-500">{option.estimatedDays}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">{formatPrice(option.price)}</p>
                              </div>
                            </div>
                          </Label>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Способ оплаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => handleInputChange('paymentMethod', value)}
                  >
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="cursor-pointer flex-1">
                        <p className="font-medium">Банковская карта</p>
                        <p className="text-sm text-gray-600">Visa, MasterCard, МИР</p>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="yandex" id="yandex" />
                      <Label htmlFor="yandex" className="cursor-pointer flex-1">
                        <p className="font-medium">ЮMoney</p>
                        <p className="text-sm text-gray-600">Электронный кошелек</p>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Additional Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Дополнительные пожелания</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Укажите дополнительную информацию к заказу..."
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    rows={3}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Ваш заказ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-3">
                    {items?.map((item) => (
                      <div key={item?.id} className="flex items-center gap-3">
                        <div className="relative w-12 h-12 bg-gray-100 rounded overflow-hidden">
                          {item?.product?.imageUrl ? (
                            <Image
                              src={item.product.imageUrl}
                              alt={item?.product?.name || ''}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium line-clamp-1">
                            {item?.product?.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {item?.quantity} × {formatPrice(item?.product?.price || 0)}
                          </p>
                        </div>
                        <p className="text-sm font-medium">
                          {formatPrice((item?.product?.price || 0) * (item?.quantity || 0))}
                        </p>
                      </div>
                    ))}
                  </div>

                  <hr />

                  {/* Summary */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Товары:</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Доставка:</span>
                      <span>{formatPrice(deliveryPrice)}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Итого:</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full mt-6" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Оформление...' : 'Оформить заказ'}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Нажимая "Оформить заказ", вы соглашаетесь с условиями доставки
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
