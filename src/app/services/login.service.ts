import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.moviesRestApi;

  users:User[] = [];

  constructor(private httpClient : HttpClient) {
    // this.httpClient.get<User[]>(`${this.url}persons`).subscribe( user => this.users = user);
    // console.log(`CONSTRUCCION USERS ${this.users}`);
  }
  getByUser(user: string): Observable<User> {
     this.httpClient.get<User>(`${this.url}/${user}`).subscribe( user => this.users = user);
  }



  // validarUser(email:string,password:string): boolean {

  //   console.log(this.users);
  //   var respuesta: boolean = false;

  //   this.users.forEach(usuario => {
  //     if (usuario.email === email && usuario.password === password) {
  //       respuesta = true;
  //     }
  //   });
  //   return respuesta;
  // }
}
