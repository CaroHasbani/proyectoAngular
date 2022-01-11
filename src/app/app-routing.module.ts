import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
//import { MoviesComponent } from './features/movies/components/movies/movies.component';
import { LoginComponent } from './components/login/login.component';
//import { MoviesInfoComponent } from './components/movies-info/movies-info.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminRoleGuard } from './guards/admin-role.guard';
import { UserRoleGuard } from './guards/user-role.guard';

const routes: Routes = [

  //lazy loading
  {
    path: 'cart',
    canActivate: [UserRoleGuard],
    component: CartComponent
  },
  {
       path: 'movies',
       canActivate: [UserRoleGuard],
       loadChildren: () => import('./features/movies/movies.module').then( m => m.MoviesModule)
   },

  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'signIn',
    component: LoginComponent
  },

  {
    path: '' ,
    redirectTo: 'movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
