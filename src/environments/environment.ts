// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  moviesRestApi: 'https://61ca086020ac1c0017ed8f66.mockapi.io'
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
