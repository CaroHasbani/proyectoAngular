import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesInfoComponent } from './components/movies-info/movies-info.component';
import { CartComponent } from './components/cart/cart.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { MoviesComponent } from './components/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesInfoComponent,
    CartComponent,
    ListComponent,
    LoginComponent,
    SignUpComponent,
    MenuComponent,
    MoviesComponent
  ],
  imports: [
     BrowserModule,
     ReactiveFormsModule,
     AppRoutingModule


     //deberia tener todo esto
    // BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    // AppRoutingModule,
    // HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



