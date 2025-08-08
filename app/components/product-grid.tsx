
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AddToCartButton } from '@/components/add-to-cart-button';
import { Heart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription?: string | null;
  price: number;
  compareAtPrice?: number | null;
  imageUrl?: string | null;
  inStock: boolean;
  isBestseller: boolean;
  isNew: boolean;
  isFeatured: boolean;
  popularityScore: number;
  brand: {
    name: string;
    slug: string;
  };
  category: {
    name: string;
    slug: string;
  };
}

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
}

export function ProductGrid({ products, loading = false }: ProductGridProps) {
  const formatPrice = (priceInKopecks: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    }).format(priceInKopecks / 100);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i} className="h-96 animate-pulse">
            <CardContent className="p-0">
              <div className="aspect-square bg-gray-200 rounded-t-lg"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!products || products?.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Товары не найдены</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products?.map((product, index) => (
        <motion.div
          key={product?.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full">
            <CardContent className="p-0 relative h-full flex flex-col">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Link href={`/products/${product?.slug}`}>
                  {product?.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product?.name || 'Товар'}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Нет изображения</span>
                    </div>
                  )}
                </Link>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product?.isNew && (
                    <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs">
                      Новинка
                    </Badge>
                  )}
                  {product?.isBestseller && (
                    <Badge className="bg-amber-500 hover:bg-amber-600 text-white text-xs">
                      Хит продаж
                    </Badge>
                  )}
                  {product?.compareAtPrice && (
                    <Badge variant="destructive" className="text-xs">
                      Скидка
                    </Badge>
                  )}
                </div>

                {/* Stock status */}
                {!product?.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="secondary" className="text-sm">
                      Нет в наличии
                    </Badge>
                  </div>
                )}

                {/* Wishlist button */}
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white"
                  onClick={(e) => {
                    e.preventDefault();
                    // TODO: Add to wishlist functionality
                  }}
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                {/* Brand */}
                <div className="flex items-center justify-between mb-2">
                  <Link 
                    href={`/brands/${product?.brand?.slug}`}
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {product?.brand?.name}
                  </Link>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current text-amber-400" />
                    <span className="text-xs text-gray-500">
                      {Math.round((product?.popularityScore || 0) / 20)}/5
                    </span>
                  </div>
                </div>

                {/* Title */}
                <Link href={`/products/${product?.slug}`}>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2 hover:text-rose-600 transition-colors">
                    {product?.name}
                  </h3>
                </Link>

                {/* Description */}
                {product?.shortDescription && (
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {product.shortDescription}
                  </p>
                )}

                {/* Price */}
                <div className="flex items-center gap-2 mb-4 mt-auto">
                  <span className="font-bold text-lg text-gray-900">
                    {formatPrice(product?.price || 0)}
                  </span>
                  {product?.compareAtPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <AddToCartButton
                    productId={product?.id || ''}
                    disabled={!product?.inStock}
                    className="w-full"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs"
                    asChild
                  >
                    <Link href={`/products/${product?.slug}`}>
                      Подробнее
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
