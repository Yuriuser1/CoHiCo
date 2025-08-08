
'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { X, Filter } from 'lucide-react';
import { SKIN_TYPES } from '@/lib/types';
import { debounce } from 'lodash';

interface FilterState {
  search: string;
  brands: string[];
  categories: string[];
  priceRange: [number, number];
  skinTypes: string[];
  inStock: boolean;
}

interface ProductFiltersProps {
  brands?: Array<{ id: string; name: string; slug: string }>;
  categories?: Array<{ id: string; name: string; slug: string }>;
  isLoading?: boolean;
}

export function ProductFilters({
  brands = [],
  categories = [],
  isLoading = false,
}: ProductFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  // Parse current filters from URL
  const currentFilters: FilterState = {
    search: searchParams?.get('search') || '',
    brands: searchParams?.get('brands')?.split(',').filter(Boolean) || [],
    categories: searchParams?.get('categories')?.split(',').filter(Boolean) || [],
    priceRange: [
      Number(searchParams?.get('priceMin')) || 0,
      Number(searchParams?.get('priceMax')) || 50000
    ],
    skinTypes: searchParams?.get('skinTypes')?.split(',').filter(Boolean) || [],
    inStock: searchParams?.get('inStock') === 'true'
  };

  const updateURL = useCallback((newFilters: FilterState) => {
    const params = new URLSearchParams();
    
    if (newFilters.search) params.set('search', newFilters.search);
    if (newFilters.brands.length > 0) params.set('brands', newFilters.brands.join(','));
    if (newFilters.categories.length > 0) params.set('categories', newFilters.categories.join(','));
    if (newFilters.priceRange[0] > 0) params.set('priceMin', newFilters.priceRange[0].toString());
    if (newFilters.priceRange[1] < 50000) params.set('priceMax', newFilters.priceRange[1].toString());
    if (newFilters.skinTypes.length > 0) params.set('skinTypes', newFilters.skinTypes.join(','));
    if (newFilters.inStock) params.set('inStock', 'true');
    
    // Reset to first page when filters change
    params.delete('page');
    
    const queryString = params.toString();
    router.push(`/catalog${queryString ? `?${queryString}` : ''}`);
  }, [router]);

  const debouncedUpdateURL = useCallback(debounce(updateURL, 300), [updateURL]);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = {
      ...currentFilters,
      [key]: value,
    };
    
    if (key === 'search') {
      debouncedUpdateURL(newFilters);
    } else {
      updateURL(newFilters);
    }
  };

  const handleArrayToggle = (key: 'brands' | 'categories' | 'skinTypes', value: string) => {
    const current = currentFilters[key];
    const updated = current.includes(value)
      ? current.filter(item => item !== value)
      : [...current, value];
    
    handleFilterChange(key, updated);
  };

  const clearFilters = () => {
    router.push('/catalog');
  };

  const activeFiltersCount = [
    currentFilters.search.length > 0,
    currentFilters.brands.length > 0,
    currentFilters.categories.length > 0,
    currentFilters.skinTypes.length > 0,
    currentFilters.priceRange[0] > 0 || currentFilters.priceRange[1] < 50000,
    currentFilters.inStock,
  ].filter(Boolean).length;

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      {/* Mobile filter button */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full"
        >
          <Filter className="w-4 h-4 mr-2" />
          Фильтры
          {activeFiltersCount > 0 && (
            <Badge className="ml-2 bg-rose-600" variant="default">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Filters */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'}`}>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Фильтры</CardTitle>
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-rose-600 hover:text-rose-700"
              >
                <X className="w-4 h-4 mr-1" />
                Очистить
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search */}
            <div>
              <Label htmlFor="search" className="text-sm font-medium mb-2 block">
                Поиск
              </Label>
              <Input
                id="search"
                type="text"
                placeholder="Поиск товаров..."
                value={currentFilters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full"
              />
            </div>

            {/* Price Range */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Цена: {currentFilters.priceRange[0].toLocaleString()} - {currentFilters.priceRange[1].toLocaleString()} ₽
              </Label>
              <Slider
                value={currentFilters.priceRange}
                onValueChange={(value) => handleFilterChange('priceRange', value as [number, number])}
                max={50000}
                min={0}
                step={500}
                className="w-full"
              />
            </div>

            {/* Brands */}
            {brands && brands.length > 0 && (
              <div>
                <Label className="text-sm font-medium mb-3 block">Бренды</Label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {brands.map((brand) => (
                    <div key={brand?.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`brand-${brand?.id}`}
                        checked={currentFilters.brands.includes(brand?.id || '')}
                        onCheckedChange={() => handleArrayToggle('brands', brand?.id || '')}
                      />
                      <Label
                        htmlFor={`brand-${brand?.id}`}
                        className="text-sm cursor-pointer flex-1"
                      >
                        {brand?.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Categories */}
            {categories && categories.length > 0 && (
              <div>
                <Label className="text-sm font-medium mb-3 block">Категории</Label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {categories.map((category) => (
                    <div key={category?.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category?.id}`}
                        checked={currentFilters.categories.includes(category?.id || '')}
                        onCheckedChange={() => handleArrayToggle('categories', category?.id || '')}
                      />
                      <Label
                        htmlFor={`category-${category?.id}`}
                        className="text-sm cursor-pointer flex-1"
                      >
                        {category?.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skin Types */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Тип кожи</Label>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {SKIN_TYPES.map((skinType) => (
                  <div key={skinType} className="flex items-center space-x-2">
                    <Checkbox
                      id={`skin-${skinType}`}
                      checked={currentFilters.skinTypes.includes(skinType)}
                      onCheckedChange={() => handleArrayToggle('skinTypes', skinType)}
                    />
                    <Label
                      htmlFor={`skin-${skinType}`}
                      className="text-sm cursor-pointer flex-1 capitalize"
                    >
                      {skinType}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* In Stock */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="inStock"
                checked={currentFilters.inStock}
                onCheckedChange={(checked) => handleFilterChange('inStock', checked)}
              />
              <Label htmlFor="inStock" className="text-sm cursor-pointer">
                Только в наличии
              </Label>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
