import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url = `${environment.restApi}login`
  name: string = '';

  constructor(
    private httpClient: HttpClient
  ) { }


  removeUser(name:string):Observable<any>{
    return this.httpClient.delete<any>(`${this.url}?name=${name}`)
  }

  updateUser(id:number, name: string, email: string, role:string): Observable<any>{
    //  createUser( name: string, email: string, password: string, role:string): Observable<any>{
      return this.httpClient.put<any>(`${this.url}?id=${id}`,{
        id,
       name,
       email,
       role
     })
   }

}
