import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../service/data.service';
import { StoreModule } from '@ngrx/store';
import { AngularMaterialModule } from './angular-material.module';
import { ProductsComponent } from './products/products.component';
import { productsReducer } from './products/state/products.reducer';
import { productReducer } from './product/state/product.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './products/state/products.effect';
@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ products: productsReducer }),
    StoreDevtoolsModule.instrument({
      name: 'Angular NgRx',
      maxAge: 25,
      logOnly: false,
    }),
    EffectsModule.forRoot([ProductsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
