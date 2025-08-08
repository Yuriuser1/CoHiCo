
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Package, Truck } from "lucide-react";
import { prisma } from "@/lib/db";
import Link from "next/link";

async function getOrders() {
  const orders = await prisma.order.findMany({
    include: {
      items: {
        include: {
          product: {
            include: { brand: true }
          }
        }
      },
      user: {
        select: { name: true, email: true }
      }
    },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return orders;
}

export default async function AdminOrdersPage() {
  const session = await getServerSession(authOptions);
  
  if (!session || !(session.user as any)?.isAdmin) {
    redirect("/");
  }

  const orders = await getOrders();

  const formatPrice = (priceInKopecks: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(priceInKopecks / 100);
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      PENDING: { label: "Ожидает", variant: "secondary" as const },
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
      PENDING: { label: "Ожидает", variant: "secondary" as const },
      PAID: { label: "Оплачен", variant: "default" as const },
      FAILED: { label: "Ошибка", variant: "destructive" as const },
      REFUNDED: { label: "Возвращен", variant: "outline" as const },
    };
    return statusMap[status as keyof typeof statusMap] || { label: status, variant: "secondary" as const };
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/admin">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад в админ-панель
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">Управление заказами</h1>
        <p className="text-gray-600 mt-2">Просмотр и управление всеми заказами</p>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Заказ #{order.orderNumber}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    {order.customerName} • {order.customerEmail}
                    {order.customerPhone && ` • ${order.customerPhone}`}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge {...getStatusBadge(order.status)}>
                    {getStatusBadge(order.status).label}
                  </Badge>
                  <Badge {...getPaymentStatusBadge(order.paymentStatus)}>
                    {getPaymentStatusBadge(order.paymentStatus).label}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Order Items */}
                <div className="lg:col-span-2">
                  <h4 className="font-medium mb-3">Товары ({order.items.length})</h4>
                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="space-y-1">
                          <p className="font-medium text-sm">{item.product.name}</p>
                          <p className="text-xs text-gray-600">{item.product.brand.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">
                            {item.quantity} × {formatPrice(item.price)}
                          </p>
                          <p className="text-xs text-gray-500">
                            = {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Сумма заказа</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Товары:</span>
                        <span>{formatPrice(order.subtotalAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Доставка:</span>
                        <span>{formatPrice(order.shippingAmount)}</span>
                      </div>
                      <div className="flex justify-between font-medium border-t pt-1">
                        <span>Итого:</span>
                        <span className="text-pink-600">{formatPrice(order.totalAmount)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Доставка</h4>
                    <div className="text-sm text-gray-600">
                      <p>{order.deliveryType.replace('_', ' ')}</p>
                      <p className="mt-1">
                        {(order.shippingAddress as any)?.city}, {(order.shippingAddress as any)?.address}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Дата заказа</h4>
                    <p className="text-sm text-gray-600">
                      {new Date(order.createdAt).toLocaleString('ru-RU')}
                    </p>
                  </div>

                  {order.notes && (
                    <div>
                      <h4 className="font-medium mb-2">Комментарий</h4>
                      <p className="text-sm text-gray-600">{order.notes}</p>
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className="space-y-2">
                    <Button size="sm" className="w-full" disabled>
                      <Package className="w-4 h-4 mr-2" />
                      Изменить статус
                    </Button>
                    <Button variant="outline" size="sm" className="w-full" disabled>
                      <Truck className="w-4 h-4 mr-2" />
                      Трек-номер
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {orders.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Заказов пока нет</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
