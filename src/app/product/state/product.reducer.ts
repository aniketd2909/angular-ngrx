import { createReducer, on } from '@ngrx/store';
import { productInitialState } from './product.state';
import { getProductAction } from './product.action';
import { ProductState } from '../product.interface';

export const productReducer = createReducer<ProductState>(
  productInitialState,
  on(getProductAction, (state, { id }): ProductState => +id)
);
