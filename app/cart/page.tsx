
'use client';

import { useSession } from 'next-auth/react';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const { items, removeItem, updateQuantity, getTotalPrice, isLoading } = useCart();

  const formatPrice = (priceInKopecks: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    }).format(priceInKopecks / 100);
  };

  if (!session) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Войдите в аккаунт</h1>
            <p className="text-gray-600 mb-8">Для просмотра корзины необходимо войти в аккаунт</p>
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
            <p className="text-gray-600 mb-8">Добавьте товары в корзину, чтобы оформить заказ</p>
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
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items?.map((item) => (
              <Card key={item?.id}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    {/* Product Image */}
                    <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                      {item?.product?.imageUrl ? (
                        <Image
                          src={item.product.imageUrl}
                          alt={item?.product?.name || 'Товар'}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <ShoppingBag className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item?.product?.name}</h3>
                      <p className="text-sm text-gray-600">{item?.product?.brand?.name}</p>
                      {item?.product?.volume && (
                        <p className="text-sm text-gray-500">Объем: {item.product.volume}</p>
                      )}
                      
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-lg font-bold">
                          {formatPrice((item?.product?.price || 0) * (item?.quantity || 0))}
                        </span>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item?.id || '', Math.max(0, (item?.quantity || 0) - 1))}
                            disabled={isLoading}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-12 text-center">{item?.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item?.id || '', (item?.quantity || 0) + 1)}
                            disabled={isLoading}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeItem(item?.id || '')}
                            disabled={isLoading}
                            className="ml-2 text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Итого</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Товары ({items?.length}):</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Доставка:</span>
                  <span>Рассчитается при оформлении</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>К оплате:</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                <Button 
                  className="w-full mt-6" 
                  size="lg"
                  onClick={() => router.push('/checkout')}
                >
                  Перейти к оформлению
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  asChild
                >
                  <Link href="/catalog">Продолжить покупки</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
