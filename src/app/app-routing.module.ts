import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdminRoleGuard } from './guards/admin-role.guard';
import { UserRoleGuard } from './guards/user-role.guard';


const routes: Routes = [

  {
    canActivate: [UserRoleGuard],
    path: 'cart',
    loadChildren: () => import('./features/cart/cart.module').then( m => m.CartModule),
    data:{menu:true}
  },
  {
       path: 'movies',
      canActivate: [UserRoleGuard],
       loadChildren: () => import('./features/movies/movies.module').then( m => m.MoviesModule),
       data:{menu:true}
   },

  {
    path: 'signUp',
    component: SignUpComponent,
    data:{menu:false}
  },
  {
    path: 'signIn',
    component: LoginComponent,
    data:{menu:false}
  },
   {
    path: 'config',
   canActivate: [AdminRoleGuard],
    component: ConfigurationComponent,
    data:{menu:true}
  },
  {
    path: '' ,
    component: WelcomeComponent,
    data:{menu:false}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
