import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Movie {
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url=environment.cartRestApi

  constructor(
    private httpClient: HttpClient
  ) { }

  getList(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }

  addMovie(id: number, title:string, poster_path:string) {
    return this.httpClient.post<any>(this.url, { id,title,poster_path });
  }

  removeMovie(movieId: number) {
    return this.httpClient.delete<any>(this.url + '?id=' + movieId);
  }

  clear(){
    return this.httpClient.get<any>(`${this.url}/clear`)
  }

}


