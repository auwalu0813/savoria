export interface CartItem {
  id: string;
  restaurantSlug: string;
  restaurantName: string;
  dishName: string;
  price: number;
  quantity: number;
  image: string;
}

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString()}`;
}

export function getCartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getCartCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
