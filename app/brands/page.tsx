
import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import { prisma } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Бренды - KOHICO',
  description: 'Премиальные корейские бренды косметики: Sulwhasoo, AmorePacific, The History of Whoo. Эксклюзивная коллекция.',
};

export default async function BrandsPage() {
  const brands = await prisma.brand.findMany({
    where: { active: true },
    include: {
      products: {
        where: { isActive: true },
        select: { id: true },
      },
    },
    orderBy: { name: 'asc' },
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Наши бренды</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Эксклюзивная коллекция премиальных корейских брендов косметики. 
            Каждый бренд представляет уникальную философию красоты и заботы о коже.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {brands.map((brand) => (
            <Card key={brand.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-8">
                {/* Brand Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{brand.name}</h2>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {brand.country}
                    </div>
                    {brand.founded && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {brand.founded}
                      </div>
                    )}
                  </div>
                </div>

                {/* Brand Description */}
                <p className="text-gray-600 mb-6 line-clamp-4 leading-relaxed">
                  {brand.description}
                </p>

                {/* Brand Philosophy */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Философия:</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {brand.philosophy}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Премиум качество
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {brand.products.length} товар{brand.products.length === 1 ? '' : brand.products.length < 5 ? 'а' : 'ов'}
                  </span>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button asChild className="w-full">
                    <Link href={`/brands/${brand.slug}`}>
                      Посмотреть товары
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/catalog?brands=${brand.id}`}>
                      Перейти в каталог
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why These Brands */}
        <section className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему эти бренды?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы тщательно отбираем только лучшие корейские бренды, которые зарекомендовали себя 
              на мировом рынке косметики
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Премиум качество</h3>
              <p className="text-sm text-gray-600">
                Только проверенные бренды с многолетней историей и безупречной репутацией
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Корейские традиции</h3>
              <p className="text-sm text-gray-600">
                Уникальное сочетание древних восточных рецептов красоты и современных технологий
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Проверено временем</h3>
              <p className="text-sm text-gray-600">
                Бренды с десятилетиями опыта и миллионами довольных покупателей по всему миру
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
