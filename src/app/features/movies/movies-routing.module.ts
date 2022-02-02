import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesInfoComponent } from './components/movies-info/movies-info.component';
// import { CartComponent } from 'src/app/components/cart/cart.component';

const routes: Routes = [
  {
    path: ':id',
    component: MoviesInfoComponent
  },
  {
    path: '',
    component: MoviesComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]

})
export class MoviesRoutingModule{}
