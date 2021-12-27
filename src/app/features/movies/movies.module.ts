import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesInfoComponent } from './components/movies-info/movies-info.component';

import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    MoviesComponent,
    MoviesInfoComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule
  ]
})

export class MoviesModule { }
