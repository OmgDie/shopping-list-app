export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const BUY_PRODUCT = 'BUY_PRODUCT';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
  action: string;
}

interface DeleteProductAction {
  type: typeof DELETE_PRODUCT;
  payload: number; // Product ID
  action: string;
}

interface BuyProductAction {
  type: typeof BUY_PRODUCT;
  payload: number; // Product ID
  action: string;
}

interface ShowNotificationAction {
    type: typeof SHOW_NOTIFICATION;
    payload: string; // Тип payload для уведомления - строка
    productName?: string;
  }

export type ProductActionTypes = AddProductAction | DeleteProductAction | BuyProductAction| ShowNotificationAction;

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  bought?: boolean;
}

export interface ProductState {
    products: Product[];
    notification: NotificationState;
}

export interface NotificationState {
    message: string;
    productName: string; // Добавляем поле productName
}
export type OnDeleteProduct = (product: Product) => void;
export type OnBuyProduct = (product: Product) => void;