
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, BarChart, PieChart, Calendar } from "lucide-react";
import { prisma } from "@/lib/db";
import Link from "next/link";

async function getAnalyticsData() {
  const [orders, customers, products] = await Promise.all([
    prisma.order.findMany({
      where: {
        paymentStatus: "PAID"
      },
      include: {
        items: {
          include: {
            product: {
              include: { brand: true }
            }
          }
        }
      },
      orderBy: { createdAt: "desc" }
    }),
    prisma.customer.findMany(),
    prisma.product.findMany({
      where: { isActive: true },
      include: { brand: true }
    })
  ]);

  // Calculate analytics
  const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
  const averageOrderValue = orders.length > 0 ? totalRevenue / orders.length : 0;
  
  // Top products
  const productSales = new Map();
  orders.forEach(order => {
    order.items.forEach(item => {
      const current = productSales.get(item.productId) || { product: item.product, quantity: 0, revenue: 0 };
      current.quantity += item.quantity;
      current.revenue += item.price * item.quantity;
      productSales.set(item.productId, current);
    });
  });
  
  const topProducts = Array.from(productSales.values())
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 10);

  // Brand performance
  const brandSales = new Map();
  orders.forEach(order => {
    order.items.forEach(item => {
      const brandName = item.product.brand.name;
      const current = brandSales.get(brandName) || { quantity: 0, revenue: 0 };
      current.quantity += item.quantity;
      current.revenue += item.price * item.quantity;
      brandSales.set(brandName, current);
    });
  });

  const topBrands = Array.from(brandSales.entries())
    .map(([brand, data]) => ({ brand, ...data }))
    .sort((a, b) => b.revenue - a.revenue);

  return {
    totalRevenue,
    averageOrderValue,
    totalOrders: orders.length,
    totalCustomers: customers.length,
    topProducts,
    topBrands
  };
}

export default async function AdminAnalyticsPage() {
  const session = await getServerSession(authOptions);
  
  if (!session || !(session.user as any)?.isAdmin) {
    redirect("/");
  }

  const analytics = await getAnalyticsData();

  const formatPrice = (priceInKopecks: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(priceInKopecks / 100);
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
        <h1 className="text-3xl font-bold text-gray-900">Аналитика и отчеты</h1>
        <p className="text-gray-600 mt-2">Статистика продаж и производительность магазина</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Общая выручка</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-pink-600">
              {formatPrice(analytics.totalRevenue)}
            </div>
            <p className="text-xs text-muted-foreground">
              За все время
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Средний чек</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatPrice(analytics.averageOrderValue)}
            </div>
            <p className="text-xs text-muted-foreground">
              На заказ
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Заказов</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analytics.totalOrders}
            </div>
            <p className="text-xs text-muted-foreground">
              Оплаченных заказов
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Клиентов</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analytics.totalCustomers}
            </div>
            <p className="text-xs text-muted-foreground">
              Зарегистрированных
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Топ товаров по продажам</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.topProducts.map((item, index) => (
                <div key={item.product.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-sm font-bold text-pink-600">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.product.name}</p>
                      <p className="text-xs text-gray-500">{item.product.brand.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm">{item.quantity} шт</p>
                    <p className="text-xs text-gray-500">{formatPrice(item.revenue)}</p>
                  </div>
                </div>
              ))}
              {analytics.topProducts.length === 0 && (
                <p className="text-gray-500 text-center py-4">Нет данных о продажах</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Top Brands */}
        <Card>
          <CardHeader>
            <CardTitle>Производительность брендов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.topBrands.map((item, index) => (
                <div key={item.brand} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.brand}</p>
                      <p className="text-xs text-gray-500">{item.quantity} товаров продано</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm">{formatPrice(item.revenue)}</p>
                    <p className="text-xs text-gray-500">выручка</p>
                  </div>
                </div>
              ))}
              {analytics.topBrands.length === 0 && (
                <p className="text-gray-500 text-center py-4">Нет данных о брендах</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
