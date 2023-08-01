import { ProductActionTypes, ADD_PRODUCT, DELETE_PRODUCT, BUY_PRODUCT, SHOW_NOTIFICATION, HANDLE_ACTION } from '../types';
import { Product } from '../types';

export const addProduct = (product: Product): ProductActionTypes => {
  return {
    type: ADD_PRODUCT,
    payload: product,
    action: 'Добавление продукта',
  };
};

export const deleteProduct = (productId: number): ProductActionTypes => {
  return {
    type: DELETE_PRODUCT,
    payload: productId,
    action: 'Удаление продукта', 
  };
};

export const buyProduct = (productId: number): ProductActionTypes => {
  return {
    type: BUY_PRODUCT,
    payload: productId,
    action: 'Покупка продукта', 
  };
};

export const showNotification = (message: string, productName?: string): ProductActionTypes => {
  return {
    type: SHOW_NOTIFICATION,
    payload: message,
    action: productName ? `Уведомление о товаре: ${productName}` : 'Уведомление', 
  };
};

export const handleAction = (type: string, product: Product): ProductActionTypes => {
  return {
    type: HANDLE_ACTION,
    payload: product,
    action: type,
  };
};
