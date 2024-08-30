import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../../service/product.service';
import {
  getErrorAction,
  getProductsAction,
  loadProductsAction,
} from './products.action';
import { catchError, map, mergeMap, of, pipe } from 'rxjs';
import { Product } from '../../app.interface';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProductsAction),
      mergeMap((action) =>
        this.productsService.getProducts().pipe(
          map((products: Product[]) => {
            console.log(products);
            return getProductsAction({ products });
          }),
          catchError(() => of(getErrorAction()))
        )
      )
    );
  });
}
