
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/utils';

interface AddToCartButtonProps {
  productId: string;
  disabled?: boolean;
  className?: string;
}

export function AddToCartButton({ productId, disabled = false, className }: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    if (!productId || disabled) return;

    setIsLoading(true);
    try {
      await addToCart(productId, quantity);
      toast.success('Товар добавлен в корзину!');
    } catch (error) {
      console.error('Ошибка добавления в корзину:', error);
      toast.error('Не удалось добавить товар в корзину');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {/* Quantity selector */}
      <div className="flex items-center justify-center gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          disabled={quantity <= 1 || disabled}
          className="w-8 h-8 p-0"
        >
          <Minus className="w-3 h-3" />
        </Button>
        <span className="text-sm font-medium w-8 text-center">{quantity}</span>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setQuantity(quantity + 1)}
          disabled={disabled}
          className="w-8 h-8 p-0"
        >
          <Plus className="w-3 h-3" />
        </Button>
      </div>

      {/* Add to cart button */}
      <Button
        onClick={handleAddToCart}
        disabled={disabled || isLoading}
        className="bg-rose-600 hover:bg-rose-700 text-white"
        size="sm"
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <ShoppingCart className="w-4 h-4 mr-2" />
            В корзину
          </>
        )}
      </Button>
    </div>
  );
}
