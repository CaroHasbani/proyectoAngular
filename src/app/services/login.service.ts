import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.models';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private url = environment.moviesRestApi;

  users:User[] = [];

  constructor(private userService:UserService) {
    // le asigna al array usuarios la respuesta del obser
    this.userService.getUserList().subscribe(response => this.users = response);
  }

  getUsers():User[]{
    // devuelve el usuario( el array)
    return this.users;
  }

  validateUser(user:string,password:string): boolean {

  //  console.log(this.users);
    var response: boolean = false;

    this.users.forEach(users => {
      // if (usuario.email === email && usuario.password === password) {
      //   respuesta = true;
      // }
      if (users.user === user && users.password === password) {
        response= true;
      }
    });
    return response;
  }
}
