"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import type { CartItem } from "@/app/lib/cart";

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CART_STORAGE_KEY = "savoria-cart";

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CartItem[];
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [hydrated, items]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      addItem: (item) => {
        const nextQuantity = item.quantity ?? 1;

        setItems((currentItems) => {
          const currentRestaurant = currentItems[0]?.restaurantName;
          const currentRestaurantSlug = currentItems[0]?.restaurantSlug;

          if (
            currentItems.length > 0 &&
            currentRestaurantSlug !== item.restaurantSlug &&
            !window.confirm(
              `Your cart contains items from ${currentRestaurant}. Clear cart and add items from ${item.restaurantName}?`
            )
          ) {
            return currentItems;
          }

          const scopedItems =
            currentItems.length > 0 && currentRestaurantSlug !== item.restaurantSlug ? [] : currentItems;
          const existingItem = scopedItems.find((cartItem) => cartItem.id === item.id);

          if (existingItem) {
            return scopedItems.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + nextQuantity }
                : cartItem
            );
          }

          return [
            ...scopedItems,
            {
              ...item,
              quantity: nextQuantity,
            },
          ];
        });

        setIsOpen(true);
      },
      removeItem: (id) => {
        setItems((currentItems) => currentItems.filter((item) => item.id !== id));
      },
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          setItems((currentItems) => currentItems.filter((item) => item.id !== id));
          return;
        }

        setItems((currentItems) =>
          currentItems.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
      },
      clearCart: () => {
        setItems([]);
      },
      isOpen,
      setIsOpen,
    }),
    [isOpen, items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
