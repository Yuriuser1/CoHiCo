
import { Suspense } from 'react';
import { ProductGrid } from '@/components/product-grid';
import { ProductFilters } from '@/components/product-filters';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Award, Shield, Truck } from 'lucide-react';
import Link from 'next/link';
import { prisma } from '@/lib/db';

export default async function HomePage() {
  // Получаем featured товары
  const featuredProducts = await prisma.product.findMany({
    where: {
      isActive: true,
      isFeatured: true,
    },
    include: {
      brand: true,
      category: true,
    },
    take: 6,
    orderBy: {
      popularityScore: 'desc',
    },
  });

  // Получаем бестселлеры
  const bestsellers = await prisma.product.findMany({
    where: {
      isActive: true,
      isBestseller: true,
    },
    include: {
      brand: true,
      category: true,
    },
    take: 4,
    orderBy: {
      popularityScore: 'desc',
    },
  });

  // Получаем бренды для показа
  const brands = await prisma.brand.findMany({
    where: { active: true },
    orderBy: { name: 'asc' },
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-amber-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-rose-100 text-rose-800 hover:bg-rose-200" variant="secondary">
              <Sparkles className="w-4 h-4 mr-2" />
              Премиальная корейская косметика
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Откройте секреты
              <span className="bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent"> корейской красоты</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Эксклюзивная коллекция премиальных брендов Sulwhasoo, AmorePacific и The History of Whoo. 
              Традиционные рецепты и современные технологии для вашей красоты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-rose-600 hover:bg-rose-700">
                <Link href="/catalog">
                  Открыть каталог
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/brands">
                  О брендах
                </Link>
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/70 rounded-2xl backdrop-blur-sm">
              <Award className="w-8 h-8 mx-auto mb-4 text-rose-600" />
              <h3 className="font-semibold mb-2">Премиум качество</h3>
              <p className="text-sm text-gray-600">Только оригинальная продукция от официальных поставщиков</p>
            </div>
            <div className="text-center p-6 bg-white/70 rounded-2xl backdrop-blur-sm">
              <Shield className="w-8 h-8 mx-auto mb-4 text-rose-600" />
              <h3 className="font-semibold mb-2">Гарантия качества</h3>
              <p className="text-sm text-gray-600">100% подлинность всех товаров с сертификатами</p>
            </div>
            <div className="text-center p-6 bg-white/70 rounded-2xl backdrop-blur-sm">
              <Truck className="w-8 h-8 mx-auto mb-4 text-rose-600" />
              <h3 className="font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-sm text-gray-600">Доставка по всей России от 1 дня</p>
            </div>
            <div className="text-center p-6 bg-white/70 rounded-2xl backdrop-blur-sm">
              <Sparkles className="w-8 h-8 mx-auto mb-4 text-rose-600" />
              <h3 className="font-semibold mb-2">Экспертность</h3>
              <p className="text-sm text-gray-600">Клуб почитателей премиальной корейской косметики</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Рекомендуемые товары</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Самые популярные и эффективные средства от ведущих корейских брендов
            </p>
          </div>
          
          <Suspense fallback={<div>Загрузка товаров...</div>}>
            <ProductGrid products={featuredProducts} />
          </Suspense>
          
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link href="/catalog">
                Смотреть все товары
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши бренды</h2>
            <p className="text-gray-600">Эксклюзивная коллекция премиальных корейских брендов</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {brands?.map((brand) => (
              <Card key={brand?.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{brand?.name}</h3>
                    <p className="text-sm text-gray-500">{brand?.country}, {brand?.founded}</p>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-3">{brand?.description}</p>
                  <Button variant="outline" asChild>
                    <Link href={`/brands/${brand?.slug}`}>
                      Узнать больше
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      {bestsellers && bestsellers?.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-amber-100 text-amber-800" variant="secondary">
                <Award className="w-4 h-4 mr-2" />
                Бестселлеры
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Самые популярные</h2>
              <p className="text-gray-600">Товары, которые выбирает большинство наших клиентов</p>
            </div>
            
            <Suspense fallback={<div>Загрузка бестселлеров...</div>}>
              <ProductGrid products={bestsellers} />
            </Suspense>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-600 to-amber-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Присоединяйтесь к клубу красоты KOHICO
          </h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Получайте эксклюзивные предложения, советы по уходу и первыми узнавайте о новинках
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/auth/signup">
                Создать аккаунт
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-rose-600" asChild>
              <Link href="/contacts">
                Связаться с нами
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
