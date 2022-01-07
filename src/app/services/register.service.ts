import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class RegisterService {

  private url = environment.moviesRestApi+'users';

  constructor(
    private httpClient: HttpClient
  ) { }

  createUser(user: string, mail: string, password: string): Observable<boolean>{
    return this.httpClient.post<boolean>(this.url,{
      user,
      mail,
      password
    })
  }
}
