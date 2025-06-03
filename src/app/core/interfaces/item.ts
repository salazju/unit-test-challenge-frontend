export interface Item {
  id: number;
  name: string;
  description: string | null;
  price: number;
  category: string[];
  dateAdded: string;
  image: string | null;
}

export interface ItemsByCategory {
  [key: string]: Item[];
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string | null;
  quantity: number;
}

export interface CartItemQuantityUpdate {
  cartItem: CartItem;
  type: string;
}
