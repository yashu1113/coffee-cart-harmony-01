import React, { createContext, useContext, useState } from "react";
import { toast } from "sonner";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemName: string) => void;
  updateQuantity: (itemName: string, quantity: number) => void;
  clearCart: () => void;
  total: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((i) => i.name === item.name);
      if (existingItem) {
        toast.success(`Added another ${item.name} to cart`);
        return currentItems.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      toast.success(`Added ${item.name} to cart`);
      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemName: string) => {
    setItems((currentItems) => currentItems.filter((i) => i.name !== itemName));
    toast.success("Item removed from cart");
  };

  const updateQuantity = (itemName: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemName);
      return;
    }
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.name === itemName ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.success("Cart cleared");
  };

  const total = items
    .reduce((sum, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return sum + price * item.quantity;
    }, 0)
    .toFixed(2);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};