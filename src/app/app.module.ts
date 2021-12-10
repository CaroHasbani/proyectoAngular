import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesInfoComponent } from './components/movies-info/movies-info.component';
import { CartComponent } from './components/cart/cart.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviesInfoComponent,
    CartComponent,
    ListComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



