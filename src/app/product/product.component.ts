import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsService } from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { getProductAction } from './state/product.action';
import { Observable } from 'rxjs';
import {
  getProductInfoSelector,
  getProductSelector,
} from './state/product.selector';
import { AppState, Product } from '../app.interface';
import { ProductState } from './product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  id: number = 0;
  product$!: Observable<Product>;
  constructor(
    private store: Store<AppState>,
    // private productService: ProductsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.getProduct(this.id);
    this.product$ = this.store.select<Product>(getProductInfoSelector);
  }

  getProduct(id: number) {
    // this.productService.getProduct(id).subscribe((product: Product) => {

    // });
    this.store.dispatch(getProductAction({ id }));
  }
}
