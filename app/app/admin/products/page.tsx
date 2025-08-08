
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, Edit, Eye } from "lucide-react";
import { prisma } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";

async function getProducts() {
  const products = await prisma.product.findMany({
    include: {
      brand: true,
      category: true,
    },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return products;
}

export default async function AdminProductsPage() {
  const session = await getServerSession(authOptions);
  
  if (!session || !(session.user as any)?.isAdmin) {
    redirect("/");
  }

  const products = await getProducts();

  const formatPrice = (priceInKopecks: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(priceInKopecks / 100);
  };

  const getStockBadge = (stockQuantity: number, inStock: boolean) => {
    if (!inStock || stockQuantity === 0) {
      return <Badge variant="destructive">Нет в наличии</Badge>;
    }
    if (stockQuantity <= 3) {
      return <Badge variant="secondary">Мало ({stockQuantity} шт)</Badge>;
    }
    return <Badge variant="default">В наличии ({stockQuantity} шт)</Badge>;
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Управление товарами</h1>
            <p className="text-gray-600 mt-2">Просмотр и управление каталогом товаров</p>
          </div>
          <Button disabled>
            <Package className="w-4 h-4 mr-2" />
            Добавить товар
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-gray-900">{products.length}</div>
            <p className="text-sm text-gray-600">Всего товаров</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">
              {products.filter(p => p.inStock && p.stockQuantity > 0).length}
            </div>
            <p className="text-sm text-gray-600">В наличии</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-orange-600">
              {products.filter(p => p.stockQuantity <= 3 && p.stockQuantity > 0).length}
            </div>
            <p className="text-sm text-gray-600">Заканчивается</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-red-600">
              {products.filter(p => !p.inStock || p.stockQuantity === 0).length}
            </div>
            <p className="text-sm text-gray-600">Нет в наличии</p>
          </CardContent>
        </Card>
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Список товаров</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={product.imageUrl || "/placeholder.jpg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.brand.name} • {product.category.name}</p>
                    {product.volume && (
                      <p className="text-xs text-gray-500">{product.volume}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-bold text-pink-600">
                      {formatPrice(product.price)}
                    </div>
                    {product.compareAtPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        {formatPrice(product.compareAtPrice)}
                      </div>
                    )}
                  </div>
                  
                  {getStockBadge(product.stockQuantity, product.inStock)}
                  
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/products/${product.slug}`}>
                        <Eye className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
