
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Package, ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/db";
import Link from "next/link";

async function getUserOrders(userId: string) {
  const orders = await prisma.order.findMany({
    where: { userId },
    include: {
      items: {
        include: {
          product: {
            include: { brand: true }
          }
        }
      }
    },
    orderBy: { createdAt: "desc" },
  });

  return orders;
}

export default async function OrdersPage() {
  const session = await getServerSession(authOptions);
  
  if (!session || !session.user) {
    redirect("/auth/signin");
  }

  const orders = await getUserOrders((session.user as any).id);

  const formatPrice = (priceInKopecks: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(priceInKopecks / 100);
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      PENDING: { label: "Ожидает оплаты", variant: "secondary" as const },
      CONFIRMED: { label: "Подтвержден", variant: "default" as const },
      PROCESSING: { label: "В обработке", variant: "outline" as const },
      SHIPPED: { label: "Отправлен", variant: "outline" as const },
      DELIVERED: { label: "Доставлен", variant: "default" as const },
      CANCELLED: { label: "Отменен", variant: "destructive" as const },
    };
    return statusMap[status as keyof typeof statusMap] || { label: status, variant: "secondary" as const };
  };

  const getPaymentStatusBadge = (status: string) => {
    const statusMap = {
      PENDING: { label: "Ожидает оплаты", variant: "secondary" as const },
      PAID: { label: "Оплачен", variant: "default" as const },
      FAILED: { label: "Ошибка оплаты", variant: "destructive" as const },
      REFUNDED: { label: "Возврат", variant: "outline" as const },
    };
    return statusMap[status as keyof typeof statusMap] || { label: status, variant: "secondary" as const };
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            На главную
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">Мои заказы</h1>
        <p className="text-gray-600 mt-2">История ваших покупок в KOHICO</p>
      </div>

      {orders.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">У вас пока нет заказов</h2>
            <p className="text-gray-600 mb-6">
              Откройте для себя мир премиальной корейской косметики
            </p>
            <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
              <Link href="/catalog">
                Начать покупки
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Заказ #{order.orderNumber}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">
                      {new Date(order.createdAt).toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge {...getStatusBadge(order.status)}>
                      {getStatusBadge(order.status).label}
                    </Badge>
                    <Badge {...getPaymentStatusBadge(order.paymentStatus)}>
                      {getPaymentStatusBadge(order.paymentStatus).label}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Order Items */}
                  <div className="lg:col-span-2">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      Товары ({order.items.length})
                    </h4>
                    <div className="space-y-3">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="space-y-1">
                            <p className="font-medium text-sm">{item.product.name}</p>
                            <p className="text-xs text-gray-600">{item.product.brand.name}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">
                              {item.quantity} шт × {formatPrice(item.price)}
                            </p>
                            <p className="text-xs text-gray-500">
                              = {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-3">Сумма заказа</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Товары:</span>
                          <span>{formatPrice(order.subtotalAmount)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Доставка:</span>
                          <span>{formatPrice(order.shippingAmount)}</span>
                        </div>
                        <div className="flex justify-between font-medium text-base border-t pt-2">
                          <span>Итого:</span>
                          <span className="text-pink-600">{formatPrice(order.totalAmount)}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Доставка</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>{order.deliveryType.replace('_', ' ')}</p>
                        <p>
                          {(order.shippingAddress as any)?.city}
                        </p>
                        <p>
                          {(order.shippingAddress as any)?.address}
                        </p>
                      </div>
                    </div>

                    {order.trackingNumber && (
                      <div>
                        <h4 className="font-medium mb-2">Трек-номер</h4>
                        <p className="text-sm font-mono text-blue-600">
                          {order.trackingNumber}
                        </p>
                      </div>
                    )}

                    {order.notes && (
                      <div>
                        <h4 className="font-medium mb-2">Комментарий</h4>
                        <p className="text-sm text-gray-600">{order.notes}</p>
                      </div>
                    )}

                    {/* Reorder button */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      disabled
                    >
                      Заказать повторно
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
