import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
export class PersonService {

  private url = environment.moviesRestApi + 'Users';

  constructor(
    private httpClient: HttpClient
  ) { }

  getList(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  getById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${id}`);
  }
}
