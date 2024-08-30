import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer';

const routes: Routes = [{ path: '', component: ProductComponent }];

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('product', productReducer),
  ],
})
export class ProductModule {}
