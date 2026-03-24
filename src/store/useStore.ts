import { create } from 'zustand';
import type { CartItem, Product } from '../types';

interface StoreState {
  cart: CartItem[];
  searchQuery: string;
  isCartOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setSearchQuery: (query: string) => void;
  toggleCart: () => void;
  cartTotal: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  searchQuery: '',
  isCartOpen: false,

  addToCart: (product) => {
    const { cart } = get();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      set({
        cart: cart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },

  removeFromCart: (productId) => {
    set({ cart: get().cart.filter(item => item.id !== productId) });
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }
    set({
      cart: get().cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    });
  },

  setSearchQuery: (query) => set({ searchQuery: query }),
  
  toggleCart: () => set({ isCartOpen: !get().isCartOpen }),

  cartTotal: () => {
    return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));
