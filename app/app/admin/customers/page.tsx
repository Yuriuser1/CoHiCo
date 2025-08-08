
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Mail, Phone } from "lucide-react";
import { prisma } from "@/lib/db";
import Link from "next/link";

async function getCustomers() {
  const customers = await prisma.customer.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return customers;
}

export default async function AdminCustomersPage() {
  const session = await getServerSession(authOptions);
  
  if (!session || !(session.user as any)?.isAdmin) {
    redirect("/");
  }

  const customers = await getCustomers();

  const formatPrice = (priceInKopecks: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(priceInKopecks / 100);
  };

  const getCustomerTier = (totalSpent: number) => {
    if (totalSpent >= 5000000) return { label: "VIP", variant: "default" as const };
    if (totalSpent >= 2000000) return { label: "Золотой", variant: "secondary" as const };
    if (totalSpent >= 1000000) return { label: "Серебряный", variant: "outline" as const };
    return { label: "Новый", variant: "outline" as const };
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
        <h1 className="text-3xl font-bold text-gray-900">Управление клиентами</h1>
        <p className="text-gray-600 mt-2">CRM система для работы с клиентами</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-gray-900">{customers.length}</div>
            <p className="text-sm text-gray-600">Всего клиентов</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-pink-600">
              {formatPrice(customers.reduce((sum, c) => sum + c.totalSpent, 0))}
            </div>
            <p className="text-sm text-gray-600">Общая выручка</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-blue-600">
              {customers.reduce((sum, c) => sum + c.orderCount, 0)}
            </div>
            <p className="text-sm text-gray-600">Всего заказов</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">
              {customers.filter(c => c.totalSpent > 0).length}
            </div>
            <p className="text-sm text-gray-600">Активные клиенты</p>
          </CardContent>
        </Card>
      </div>

      {/* Customers List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Список клиентов
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customers.map((customer) => (
              <div key={customer.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-gray-900">
                      {customer.name || "Без имени"}
                    </h3>
                    <Badge {...getCustomerTier(customer.totalSpent)}>
                      {getCustomerTier(customer.totalSpent).label}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {customer.email}
                    </div>
                    {customer.phone && (
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {customer.phone}
                      </div>
                    )}
                  </div>
                  {customer.registeredAt && (
                    <p className="text-xs text-gray-500">
                      Регистрация: {new Date(customer.registeredAt).toLocaleDateString('ru-RU')}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="font-bold text-pink-600">
                      {formatPrice(customer.totalSpent)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {customer.orderCount} заказ{customer.orderCount !== 1 ? 'а' : ''}
                    </div>
                    {customer.lastOrderAt && (
                      <div className="text-xs text-gray-400">
                        Последний: {new Date(customer.lastOrderAt).toLocaleDateString('ru-RU')}
                      </div>
                    )}
                  </div>
                  
                  <Button variant="outline" size="sm" disabled>
                    Просмотр
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {customers.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Клиентов пока нет</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
