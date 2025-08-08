
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProductGrid } from '@/components/product-grid';
import { Award, Calendar, MapPin, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { prisma } from '@/lib/db';

interface BrandPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const brand = await prisma.brand.findUnique({
    where: { slug: params.slug, active: true },
  });

  if (!brand) {
    return {
      title: 'Бренд не найден - KOHICO',
    };
  }

  return {
    title: `${brand.name} - Премиальная корейская косметика | KOHICO`,
    description: brand.description,
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const brand = await prisma.brand.findUnique({
    where: { slug: params.slug, active: true },
  });

  if (!brand) {
    notFound();
  }

  // Получаем товары бренда
  const [featuredProducts, allProducts, totalProducts] = await Promise.all([
    // Рекомендуемые товары
    prisma.product.findMany({
      where: {
        brandId: brand.id,
        isActive: true,
        isFeatured: true,
      },
      include: {
        brand: true,
        category: true,
      },
      orderBy: { popularityScore: 'desc' },
      take: 8,
    }),
    // Все товары (первая страница)
    prisma.product.findMany({
      where: {
        brandId: brand.id,
        isActive: true,
      },
      include: {
        brand: true,
        category: true,
      },
      orderBy: { popularityScore: 'desc' },
      take: 12,
    }),
    // Общее количество товаров
    prisma.product.count({
      where: {
        brandId: brand.id,
        isActive: true,
      },
    }),
  ]);

  // Статистика
  const bestsellersCount = await prisma.product.count({
    where: {
      brandId: brand.id,
      isActive: true,
      isBestseller: true,
    },
  });

  const averageRating = 4.8; // Моковое значение, в реальности рассчитывается из отзывов

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-gray-900">Главная</Link>
          <span>/</span>
          <Link href="/brands" className="hover:text-gray-900">Бренды</Link>
          <span>/</span>
          <span className="text-gray-900">{brand.name}</span>
        </nav>

        {/* Brand Header */}
        <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-8 lg:p-12 mb-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">{brand.name}</h1>
              <Badge className="bg-rose-600 hover:bg-rose-700 text-white">
                <Award className="w-4 h-4 mr-1" />
                Премиум
              </Badge>
            </div>

            <div className="flex items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {brand.country}
              </div>
              {brand.founded && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  С {brand.founded} года
                </div>
              )}
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-current text-amber-400" />
                {averageRating} (средняя оценка)
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {brand.description}
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{totalProducts}</div>
                <div className="text-sm text-gray-600">товаров</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{bestsellersCount}</div>
                <div className="text-sm text-gray-600">бестселлеров</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{averageRating}</div>
                <div className="text-sm text-gray-600">рейтинг</div>
              </div>
            </div>

            <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
              <Link href={`/catalog?brands=${brand.id}`}>
                Посмотреть все товары
              </Link>
            </Button>
          </div>
        </div>

        {/* Brand Philosophy */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500" />
                Философия бренда
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{brand.philosophy}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Популярность
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Рейтинг покупателей:</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(averageRating) ? 'fill-current text-amber-400' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-600">{averageRating}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Бестселлеров:</span>
                <Badge variant="outline">{bestsellersCount} товар{bestsellersCount === 1 ? '' : bestsellersCount < 5 ? 'а' : 'ов'}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">В каталоге:</span>
                <Badge variant="outline">{totalProducts} товар{totalProducts === 1 ? '' : totalProducts < 5 ? 'а' : 'ов'}</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Рекомендуемые товары</h2>
              <Button variant="outline" asChild>
                <Link href={`/catalog?brands=${brand.id}`}>
                  Смотреть все
                </Link>
              </Button>
            </div>
            <Suspense fallback={<div>Загрузка товаров...</div>}>
              <ProductGrid products={featuredProducts} />
            </Suspense>
          </section>
        )}

        {/* All Products */}
        {allProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Все товары {brand.name}</h2>
            <Suspense fallback={<div>Загрузка товаров...</div>}>
              <ProductGrid products={allProducts} />
            </Suspense>
            
            {totalProducts > allProducts.length && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" asChild>
                  <Link href={`/catalog?brands=${brand.id}`}>
                    Показать еще ({totalProducts - allProducts.length})
                  </Link>
                </Button>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
