import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/product.service';
import { Store } from '@ngrx/store';
import { getProductsAction, loadProductsAction } from './state/products.action';
import { getProductsSelector } from './state/products.selector';
import { Observable } from 'rxjs';
import { AppState, Product } from '../app.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  constructor(
    private productsService: ProductsService,
    private store: Store<AppState>
  ) {
    this.products$ = this.store.select<Product[]>(getProductsSelector);
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    // this.productsService.getProducts().subscribe((products: Product[]) => {
    //   //   this.products = products;
    this.store.dispatch(loadProductsAction());
    // this.store.dispatch(getProductsAction({ products }));
  }
}
