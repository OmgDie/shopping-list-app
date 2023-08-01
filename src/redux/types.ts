export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const BUY_PRODUCT = 'BUY_PRODUCT';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HANDLE_ACTION = 'HANDLE_ACTION'; 

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
  productName: string;
}

export interface Action<T, P> {
  type: T;
  payload: P;
  action: string;
}

export interface AddProductAction extends Action<typeof ADD_PRODUCT, Product> {}
export interface DeleteProductAction extends Action<typeof DELETE_PRODUCT, number> {}
export interface BuyProductAction extends Action<typeof BUY_PRODUCT, number> {}
export interface ShowNotificationAction extends Action<typeof SHOW_NOTIFICATION, string> {}
export interface HandleAction extends Action<typeof HANDLE_ACTION, Product> {}

export type ProductActionTypes = AddProductAction | DeleteProductAction | BuyProductAction | ShowNotificationAction | HandleAction;
