import { Reducer } from 'redux';
import { ProductActionTypes, ProductState, ADD_PRODUCT, DELETE_PRODUCT, BUY_PRODUCT, SHOW_NOTIFICATION } from '../types';

const initialState: ProductState = {
  products: [],
  notification: {
    message: '',
    productName: '', // По умолчанию поле productName имеет пустую строку, а не undefined
  },
};

const productReducer: Reducer<ProductState, ProductActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        notification: {
          message: `${action.payload.name} успешно добавлен`,
          productName: action.payload.name, // Записываем имя добавленной карточки
        },
      };
    case DELETE_PRODUCT:
      const deletedProduct = state.products.find((product) => product.id === action.payload);
      if (deletedProduct) {
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload),
          notification: {
            message: `${deletedProduct.name} успешно удален`,
            productName: deletedProduct.name, // Записываем имя удаленной карточки
          },
        };
      }
      return state;
    case BUY_PRODUCT:
      const boughtProduct = state.products.find((product) => product.id === action.payload);
      if (boughtProduct) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload ? { ...product, bought: true } : product
          ),
          notification: {
            message: `${boughtProduct.name} успешно куплен`,
            productName: boughtProduct.name, // Записываем имя купленной карточки
          },
        };
      }
      return state;
    case SHOW_NOTIFICATION:
      return {
        ...state,
        notification: {
          message: action.payload, // Обновляем сообщение уведомления
          productName: '', // При отображении уведомления, поле productName может быть пустой строкой
        },
      };
    default:
      return state;
  }
};

export default productReducer;
