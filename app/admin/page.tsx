
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Package, Users, DollarSign, TrendingUp, Eye } from "lucide-react";
import { prisma } from "@/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getAdminStats() {
  const [
    totalOrders,
    totalProducts,
    totalCustomers,
    totalRevenue,
    recentOrders,
    lowStockProducts,
  ] = await Promise.all([
    prisma.order.count(),
    prisma.product.count({ where: { isActive: true } }),
    prisma.customer.count(),
    prisma.order.aggregate({
      _sum: { totalAmount: true },
      where: { paymentStatus: "PAID" },
    }),
    prisma.order.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: {
        items: {
          include: { product: { include: { brand: true } } }
        }
      },
    }),
    prisma.product.findMany({
      where: {
        isActive: true,
        stockQuantity: { lte: 3 },
      },
      take: 10,
      include: { brand: true },
    }),
  ]);

  return {
    totalOrders,
    totalProducts,
    totalCustomers,
    totalRevenue: totalRevenue._sum.totalAmount || 0,
    recentOrders,
    lowStockProducts,
  };
}

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session || !(session.user as any)?.isAdmin) {
    redirect("/");
  }

  const stats = await getAdminStats();

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

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Панель администратора</h1>
        <p className="text-gray-600 mt-2">Управление интернет-магазином KOHICO</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Всего заказов</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalOrders}</div>
            <p className="text-xs text-muted-foreground">За все время</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Товары</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProducts}</div>
            <p className="text-xs text-muted-foreground">Активных товаров</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Клиенты</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCustomers}</div>
            <p className="text-xs text-muted-foreground">Зарегистрированных</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Выручка</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatPrice(stats.totalRevenue)}</div>
            <p className="text-xs text-muted-foreground">Оплаченные заказы</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Последние заказы
              <Button asChild variant="outline" size="sm">
                <Link href="/admin/orders">
                  <Eye className="w-4 h-4 mr-2" />
                  Все заказы
                </Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <p className="font-medium">#{order.orderNumber}</p>
                    <p className="text-sm text-gray-600">{order.customerName}</p>
                    <div className="flex items-center gap-2">
                      <Badge {...getStatusBadge(order.status)}>
                        {getStatusBadge(order.status).label}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {order.items.length} товар(ов)
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-pink-600">{formatPrice(order.totalAmount)}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString('ru-RU')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Заканчивается на складе
              <Button asChild variant="outline" size="sm">
                <Link href="/admin/products">
                  <Package className="w-4 h-4 mr-2" />
                  Все товары
                </Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stats.lowStockProducts.length > 0 ? (
                stats.lowStockProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium text-sm">{product.name}</p>
                      <p className="text-xs text-gray-600">{product.brand.name}</p>
                    </div>
                    <Badge 
                      variant={product.stockQuantity === 0 ? "destructive" : "secondary"}
                    >
                      {product.stockQuantity === 0 ? "Нет в наличии" : `${product.stockQuantity} шт`}
                    </Badge>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">Все товары в наличии</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Быстрые действия</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button asChild variant="outline" className="h-24 flex-col">
              <Link href="/admin/orders">
                <ShoppingCart className="w-6 h-6 mb-2" />
                Заказы
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-24 flex-col">
              <Link href="/admin/products">
                <Package className="w-6 h-6 mb-2" />
                Товары
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-24 flex-col">
              <Link href="/admin/customers">
                <Users className="w-6 h-6 mb-2" />
                Клиенты
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-24 flex-col">
              <Link href="/admin/analytics">
                <TrendingUp className="w-6 h-6 mb-2" />
                Аналитика
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
