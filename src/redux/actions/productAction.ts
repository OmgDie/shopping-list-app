import { ADD_PRODUCT, DELETE_PRODUCT, BUY_PRODUCT, SHOW_NOTIFICATION, ProductActionTypes, Product } from '../types';

export const addProduct = (product: Product): ProductActionTypes => ({
  type: ADD_PRODUCT,
  payload: product,
  action: 'Добавлено'
});

export const deleteProduct = (id: number): ProductActionTypes => ({
  type: DELETE_PRODUCT,
  payload: id,
  action: 'Удалено'
});

export const buyProduct = (id: number): ProductActionTypes => ({
  type: BUY_PRODUCT,
  payload: id,
  action: 'Куплено'
});

export const showNotification = (message: string, productName?: string): ProductActionTypes => ({
    type: SHOW_NOTIFICATION,
    payload: message,
    productName, // Передаем имя продукта (если есть) в уведомление
  });