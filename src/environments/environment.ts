// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  moviesRestApi: 'https://61ca086020ac1c0017ed8f66.mockapi.io/',
 movieApi: ' https://api.themoviedb.org/3/discover/movie?api_key=fd31753f3bac10778d2c67b3ea7f76d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
 // movieApi:'https://api.themoviedb.org/3/discover/movie?api_key=31071a84eb5283914ae9190214c1a7f4&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
  imgAPI:'https://image.tmdb.org/t/p/w500/',
  apiKey:'fd31753f3bac10778d2c67b3ea7f76d2',
  firstPart:'https://api.themoviedb.org/3/movie/',
  lastPart:'?api_key=fd31753f3bac10778d2c67b3ea7f76d2'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/*
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { User } from '../models/user.model';

import { userMock } from './user.mock';



@Injectable({

  providedIn: 'root'

})

export class UserService {



  usuario: User[] = [];
  constructor() {}



  construct(name: string, password: string, age: number, mail: string): User [] {

    let usuario: User = {

      name: name,

      mail: mail,

      password: password,

      age: age

    }

    this.usuario.push(usuario);

    return this.usuario;

  }

  add(user: User){

    return this.usuario.push(user);

  };

  get(mail: string){

    return this.usuario.find(element => {

      element.mail === mail;

    });

  };

  getList(): Observable<User[]>{

    return of(userMock);

  }

}
*/
