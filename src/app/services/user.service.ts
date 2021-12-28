import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { AppModule } from '../app.module';
import { User } from '../models/user.models';
// import { UsersMock } from './User.mock';

@Injectable(
  {
    providedIn: 'root'
    //providedIn: AppModule
  }
)
export class UserService {
 private url = environment.moviesRestApi + 'users';
  constructor(
    //inyecto httpClient
    private httpClient: HttpClient
  ) { }

  getUserList(): Observable<User[]> {
    // devuelve un observable con el array de usuarios de la api
    return this.httpClient.get<User[]>(this.url);
  }

  getById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${id}`);
  }
  // addUser(register:FormGroup){
  //   this.User=newUser;
  //   return this.httpClient.post<User[]>(this.url);

  // }
}
