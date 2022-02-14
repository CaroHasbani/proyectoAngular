import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { InterceptorService } from './interceptors/interceptor.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { CartModule } from './features/cart/cart.module';



@NgModule({
  declarations: [
    AppComponent,
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
     StoreModule.forRoot({}, {}),
     EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
     CartModule,
    CommonModule

  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



