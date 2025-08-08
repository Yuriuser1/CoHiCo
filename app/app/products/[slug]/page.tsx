
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AddToCartButton } from '@/components/add-to-cart-button';
import { ProductGrid } from '@/components/product-grid';
import { Star, Heart, Share, Truck, Shield, Award, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { prisma } from '@/lib/db';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug, isActive: true },
    include: { brand: true, category: true },
  });

  if (!product) {
    return {
      title: 'Товар не найден - KOHICO',
    };
  }

  return {
    title: `${product.name} - ${product.brand.name} | KOHICO`,
    description: product.description.slice(0, 160),
    keywords: [product.name, product.brand.name, ...product.keyIngredients].join(', '),
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug, isActive: true },
    include: {
      brand: true,
      category: true,
      reviews: {
        where: { isPublished: true },
        include: { user: true },
        orderBy: { createdAt: 'desc' },
        take: 5,
      },
    },
  });

  if (!product) {
    notFound();
  }

  // Похожие товары
  const relatedProducts = await prisma.product.findMany({
    where: {
      isActive: true,
      brandId: product.brandId,
      id: { not: product.id },
    },
    include: {
      brand: true,
      category: true,
    },
    take: 4,
    orderBy: { popularityScore: 'desc' },
  });

  const formatPrice = (priceInKopecks: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    }).format(priceInKopecks / 100);
  };

  const averageRating = product.reviews.length > 0
    ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
    : 0;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-gray-900">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-gray-900">Каталог</Link>
          <span>/</span>
          <Link href={`/brands/${product.brand.slug}`} className="hover:text-gray-900">
            {product.brand.name}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Нет изображения</span>
                </div>
              )}
              
              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2">
                {product.isNew && (
                  <Badge className="bg-green-500 hover:bg-green-600">Новинка</Badge>
                )}
                {product.isBestseller && (
                  <Badge className="bg-amber-500 hover:bg-amber-600">Хит продаж</Badge>
                )}
                {product.compareAtPrice && (
                  <Badge variant="destructive">Скидка</Badge>
                )}
              </div>

              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="secondary" className="text-lg px-6 py-2">
                    Нет в наличии
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Brand & Category */}
            <div className="flex items-center justify-between">
              <Link 
                href={`/brands/${product.brand.slug}`}
                className="text-rose-600 hover:text-rose-700 font-medium"
              >
                {product.brand.name}
              </Link>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Product Name & Rating */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              {product.reviews.length > 0 && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < averageRating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {averageRating.toFixed(1)} ({product.reviews.length} отзыв{product.reviews.length === 1 ? '' : product.reviews.length < 5 ? 'а' : 'ов'})
                  </span>
                </div>
              )}
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>

            {/* Volume & Texture */}
            {(product.volume || product.texture) && (
              <div className="flex items-center gap-6 text-sm">
                {product.volume && (
                  <div>
                    <span className="text-gray-500">Объем: </span>
                    <span className="font-medium">{product.volume}</span>
                  </div>
                )}
                {product.texture && (
                  <div>
                    <span className="text-gray-500">Текстура: </span>
                    <span className="font-medium">{product.texture}</span>
                  </div>
                )}
              </div>
            )}

            {/* Skin Types */}
            {product.skinTypes.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Подходит для типа кожи:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.skinTypes.map((skinType) => (
                    <Badge key={skinType} variant="outline" className="capitalize">
                      {skinType}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <div className="border-t pt-6">
              <AddToCartButton 
                productId={product.id}
                disabled={!product.inStock}
                className="w-full max-w-xs"
              />
            </div>

            {/* Features */}
            <div className="border-t pt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>100% оригинальная продукция</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Быстрая доставка по всей России</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Award className="w-4 h-4 text-purple-600" />
                <span>Гарантия качества</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Description */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Описание</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
              
              {product.usage && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Способ применения:</h4>
                  <p className="text-gray-700">{product.usage}</p>
                </div>
              )}

              {product.keyIngredients.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Ключевые ингредиенты:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.keyIngredients.map((ingredient) => (
                      <Badge key={ingredient} variant="secondary">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {product.benefits.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Преимущества:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="text-gray-700">{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Brand Info */}
          <Card>
            <CardHeader>
              <CardTitle>О бренде {product.brand.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{product.brand.description}</p>
              <Button variant="outline" asChild className="w-full">
                <Link href={`/brands/${product.brand.slug}`}>
                  Все товары бренда
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Другие товары {product.brand.name}
            </h2>
            <Suspense fallback={<div>Загрузка...</div>}>
              <ProductGrid products={relatedProducts} />
            </Suspense>
          </section>
        )}
      </div>
    </div>
  );
}
