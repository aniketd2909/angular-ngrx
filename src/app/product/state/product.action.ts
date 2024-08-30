import { createAction, props } from '@ngrx/store';
import { Product } from '../../app.interface';

export const getProductAction = createAction(
  '[Product] Get Product',
  props<{ id: number }>()
);
