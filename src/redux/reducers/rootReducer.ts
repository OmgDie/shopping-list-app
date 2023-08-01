import { combineReducers } from 'redux';
import productReducer from './productReducer';
import { ProductState } from '../types';

export interface RootState {
  products: ProductState;
}

const rootReducer = combineReducers<RootState>({
  products: productReducer,
});

export default rootReducer;
