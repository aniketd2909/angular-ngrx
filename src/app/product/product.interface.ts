import * as States from '../app.interface';

export type ProductState = number;

export interface AppState extends States.AppState {
  product: ProductState;
}
