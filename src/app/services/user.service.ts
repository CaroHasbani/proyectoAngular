import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.models';


@Injectable(
  {
    providedIn: 'root'
    //providedIn: AppModule
  }
)
export class UserService {
//  private url = environment.moviesRestApi + 'users';
url = `${environment.restApi}login`
  constructor(
    //inyecto httpClient
    private httpClient: HttpClient
  ) { }

  getUserList(): Observable<User[]> {
    // devuelve un observable con el array de usuarios de la api
    return this.httpClient.get<User[]>(this.url);
  }

  // getUserById(id: string): Observable<User> {
  //   return this.httpClient.get<User>(`${this.url}/${id}`);
  // }

}
