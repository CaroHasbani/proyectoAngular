import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url = `${environment.restApi}login`

  constructor(
    private httpClient: HttpClient
  ) { }

  removeUser(name:string):Observable<any>{
    return this.httpClient.delete<any>(`${this.url}?name=${name}`)
  }



}
