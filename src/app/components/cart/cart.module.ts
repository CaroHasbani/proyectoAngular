import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cartReducer } from './store/cart.reducer';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { CartEffects } from './store/cart.effects'
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    StoreModule.forFeature('cart', cartReducer),
    EffectsModule.forFeature([CartEffects]),
    MaterialModule
  ]
})
export class CartModule { }
