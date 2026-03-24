export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  productCount: number;
  description?: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  price: number;
  imageUrl: string;
  rating?: number;
  buyUrl?: string;
  description?: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
