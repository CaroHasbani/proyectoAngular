import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  url = `${environment.restApi}login/add`;

  constructor(private httpClient: HttpClient) {}

  createUser(
    name: string,
    email: string,
    password: string,
    role: string
  ): Observable<any> {
    return this.httpClient.post<any>(this.url, {
      name,
      email,
      password,
      role,
    });
  }
}
