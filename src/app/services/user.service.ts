import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.models';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class UserService {
url = `${environment.restApi}login`
  constructor(
    //inyecto httpClient
    private httpClient: HttpClient
  ) { }

  getUserList(): Observable<User[]> {
    // devuelve un observable con el array de usuarios de la api
    return this.httpClient.get<User[]>(this.url);
  }
}
