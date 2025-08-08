
'use client';

import { useState, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';

interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl?: string | null;
    inStock: boolean;
    volume?: string | null;
    brand: {
      name: string;
    };
  };
}

interface UseCartReturn {
  items: CartItem[];
  isLoading: boolean;
  addToCart: (productId: string, quantity: number) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>; // alias для removeFromCart
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  totalItems: number;
  totalPrice: number;
  getTotalPrice: () => number; // helper function
}

export function useCart(): UseCartReturn {
  const { data: session } = useSession();
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCart = useCallback(async () => {
    if (!session?.user) return;

    try {
      const response = await fetch('/api/cart');
      if (response.ok) {
        const data = await response.json();
        setItems(data?.items || []);
      }
    } catch (error) {
      console.error('Ошибка загрузки корзины:', error);
    }
  }, [session?.user]);

  const addToCart = async (productId: string, quantity: number = 1) => {
    if (!session?.user) {
      toast.error('Необходимо войти в аккаунт');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity }),
      });

      if (!response.ok) {
        throw new Error('Ошибка добавления в корзину');
      }

      await fetchCart();
      toast.success('Товар добавлен в корзину');
    } catch (error) {
      console.error('Ошибка добавления в корзину:', error);
      toast.error('Не удалось добавить товар в корзину');
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (itemId: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/cart/${itemId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Ошибка удаления из корзины');
      }

      await fetchCart();
      toast.success('Товар удален из корзины');
    } catch (error) {
      console.error('Ошибка удаления из корзины:', error);
      toast.error('Не удалось удалить товар из корзины');
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    if (quantity < 1) {
      await removeFromCart(itemId);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/cart/${itemId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });

      if (!response.ok) {
        throw new Error('Ошибка обновления количества');
      }

      await fetchCart();
    } catch (error) {
      console.error('Ошибка обновления количества:', error);
      toast.error('Не удалось обновить количество');
    } finally {
      setIsLoading(false);
    }
  };

  const clearCart = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/cart', {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Ошибка очистки корзины');
      }

      setItems([]);
      toast.success('Корзина очищена');
    } catch (error) {
      console.error('Ошибка очистки корзины:', error);
      toast.error('Не удалось очистить корзину');
    } finally {
      setIsLoading(false);
    }
  };

  const totalItems = items?.reduce((sum, item) => sum + (item?.quantity || 0), 0) || 0;
  const totalPrice = items?.reduce((sum, item) => sum + ((item?.product?.price || 0) * (item?.quantity || 0)), 0) || 0;

  const getTotalPrice = () => totalPrice;

  return {
    items,
    isLoading,
    addToCart,
    removeFromCart,
    removeItem: removeFromCart, // alias
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    getTotalPrice,
  };
}
