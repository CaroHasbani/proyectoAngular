import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  url=environment.cartRestApi
  constructor(
    private httpClient:HttpClient
  ) { }

getList():Observable<any[]>{
  return this.httpClient.get<any[]>(this.url)
}

addMovie(id: number, title:string, poster_path:string):Observable<boolean>{
  return this.httpClient.post<boolean>(this.url,{
  id,
  title,
  poster_path
  })
}

removeMovie(id:number):Observable<any>{
  return this.httpClient.delete<any>(`${this.url}?id=${id}`)
}

  // clearCart(){
  //   return this.list = [];
  // }
}




