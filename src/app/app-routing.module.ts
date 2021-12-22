import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesInfoComponent } from './components/movies-info/movies-info.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'movieInfo/:id',
    component: MoviesInfoComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
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
