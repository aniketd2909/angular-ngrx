import { createFeatureSelector } from '@ngrx/store';
import { Product } from '../../app.interface';
import { ProductsState } from '../../products.interface';

export const getProductsSelector =
  createFeatureSelector<ProductsState>('products');
