import { createAction, props } from '@ngrx/store';
import { Product } from '../../app.interface';

export const getProductsAction = createAction(
  '[Products] Get Products',
  props<{ products: Product[] }>()
);

export const loadProductsAction = createAction('[Products] Load Products');
export const getErrorAction = createAction('[Products] Load Products Error');
