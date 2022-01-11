import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class RegisterService {

 // private url = environment.moviesRestApi+'users';
  url = `${environment.restApi}login/add`

  constructor(
    private httpClient: HttpClient
  ) { }

  createUser(name: string, mail: string, password: string, role:string): Observable<boolean>{
    return this.httpClient.post<boolean>(this.url,{
      name,
      mail,
      password,
      role
    })
  }
}
