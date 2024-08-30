import { createReducer, on } from '@ngrx/store';
import {
  getErrorAction,
  getProductsAction,
  loadProductsAction,
} from './products.action';
import { productsInitialState } from './products.state';
import { ProductsState } from '../../products.interface';

export const productsReducer = createReducer<ProductsState>(
  productsInitialState,
  on(getProductsAction, (state, { products }): ProductsState => [...products]),
  on(loadProductsAction, (state): ProductsState => {
    return [...state];
  }),
  on(getErrorAction, (state): ProductsState => {
    return [...state];
  })
);
