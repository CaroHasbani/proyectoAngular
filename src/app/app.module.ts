import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { WelcomeComponent } from './components/welcome/welcome.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LoginComponent,
    SignUpComponent,
    MenuComponent,
    ConfigurationComponent,
    WelcomeComponent
  ],
  imports: [
     BrowserModule,
     ReactiveFormsModule,
     AppRoutingModule,
     BrowserAnimationsModule,
     MaterialModule,
     HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



