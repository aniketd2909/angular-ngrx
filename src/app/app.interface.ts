import { ProductState } from './product/product.interface';
import { ProductsState } from './products.interface';

export interface Product {
  id: number;
  title: string;
  author: string;
  description: string;
  imgUrl: string;
  price: number;
  quantity: number;
  cart: number;
}

export interface AppState {
  products: ProductsState;
}
