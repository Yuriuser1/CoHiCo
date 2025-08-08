
import { Suspense } from 'react';
import { ProductGrid } from '@/components/product-grid';
import { ProductFilters } from '@/components/product-filters';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pagination } from '@/components/pagination';
import { prisma } from '@/lib/db';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Каталог товаров - KOHICO',
  description: 'Полный каталог премиальной корейской косметики. Sulwhasoo, AmorePacific, The History of Whoo.',
};

interface SearchParams {
  page?: string;
  search?: string;
  brands?: string;
  categories?: string;
  priceMin?: string;
  priceMax?: string;
  skinTypes?: string;
  inStock?: string;
  sort?: string;
  order?: string;
}

interface CatalogPageProps {
  searchParams: SearchParams;
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const page = Number(searchParams.page) || 1;
  const limit = 12;
  const skip = (page - 1) * limit;

  // Парсим фильтры
  const filters = {
    search: searchParams.search || '',
    brands: searchParams.brands ? searchParams.brands.split(',') : [],
    categories: searchParams.categories ? searchParams.categories.split(',') : [],
    priceMin: searchParams.priceMin ? Number(searchParams.priceMin) * 100 : 0, // конвертируем в копейки
    priceMax: searchParams.priceMax ? Number(searchParams.priceMax) * 100 : 5000000, // 50000 руб в копейках
    skinTypes: searchParams.skinTypes ? searchParams.skinTypes.split(',') : [],
    inStock: searchParams.inStock === 'true',
    sort: searchParams.sort || 'popularity',
    order: searchParams.order || 'desc',
  };

  // Строим where условие
  const whereCondition: any = {
    isActive: true,
  };

  if (filters.search) {
    whereCondition.OR = [
      { name: { contains: filters.search, mode: 'insensitive' } },
      { description: { contains: filters.search, mode: 'insensitive' } },
      { keyIngredients: { hasSome: [filters.search] } },
      { brand: { name: { contains: filters.search, mode: 'insensitive' } } },
    ];
  }

  if (filters.brands.length > 0) {
    whereCondition.brandId = { in: filters.brands };
  }

  if (filters.categories.length > 0) {
    whereCondition.categoryId = { in: filters.categories };
  }

  if (filters.priceMin > 0 || filters.priceMax < 5000000) {
    whereCondition.price = {
      gte: filters.priceMin,
      lte: filters.priceMax,
    };
  }

  if (filters.skinTypes.length > 0) {
    whereCondition.skinTypes = { hasSome: filters.skinTypes };
  }

  if (filters.inStock) {
    whereCondition.inStock = true;
  }

  // Определяем сортировку
  let orderBy: any = {};
  switch (filters.sort) {
    case 'name':
      orderBy = { name: filters.order };
      break;
    case 'price':
      orderBy = { price: filters.order };
      break;
    case 'newest':
      orderBy = { createdAt: 'desc' };
      break;
    case 'popularity':
    default:
      orderBy = { popularityScore: 'desc' };
      break;
  }

  // Получаем товары
  const [products, totalProducts, brands, categories] = await Promise.all([
    prisma.product.findMany({
      where: whereCondition,
      include: {
        brand: true,
        category: true,
      },
      orderBy,
      skip,
      take: limit,
    }),
    prisma.product.count({ where: whereCondition }),
    prisma.brand.findMany({
      where: { active: true },
      orderBy: { name: 'asc' },
    }),
    prisma.category.findMany({
      where: { active: true, parentId: { not: null } }, // только подкатегории
      orderBy: { name: 'asc' },
    }),
  ]);

  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Каталог товаров</h1>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="secondary" className="text-sm">
              Найдено товаров: {totalProducts}
            </Badge>
            {filters.search && (
              <Badge variant="outline" className="text-sm">
                Поиск: "{filters.search}"
              </Badge>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <Suspense fallback={<div>Загрузка фильтров...</div>}>
              <ProductFilters
                brands={brands}
                categories={categories}
              />
            </Suspense>
          </aside>

          {/* Products */}
          <main className="flex-1">
            {/* Sort options */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Сортировка:</span>
                <select
                  className="text-sm border border-gray-300 rounded-md px-3 py-1 bg-white"
                  defaultValue={`${filters.sort}-${filters.order}`}
                >
                  <option value="popularity-desc">По популярности</option>
                  <option value="name-asc">По названию А-Я</option>
                  <option value="name-desc">По названию Я-А</option>
                  <option value="price-asc">Сначала дешевые</option>
                  <option value="price-desc">Сначала дорогие</option>
                  <option value="newest-desc">Сначала новые</option>
                </select>
              </div>
            </div>

            <Suspense fallback={<div>Загрузка товаров...</div>}>
              <ProductGrid products={products} />
            </Suspense>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  baseUrl="/catalog"
                  searchParams={searchParams as Record<string, string | undefined>}
                />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
