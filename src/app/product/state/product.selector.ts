import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../product.interface';
import { getProductsSelector } from '../../products/state/products.selector';

export const getProductSelector =
  createFeatureSelector<ProductState>('product');

export const getProductInfoSelector = createSelector(
  getProductsSelector,
  getProductSelector,
  (products, productId) => {
    let selectedProduct = products.find((product) => product.id === productId);

    if (!selectedProduct) {
      return {
        id: 0,
        title: '',
        author: '',
        description: '',
        imgUrl: '',
        price: 0,
        quantity: 0,
        cart: 0,
      };
    } else {
      return selectedProduct;
    }
  }
);
