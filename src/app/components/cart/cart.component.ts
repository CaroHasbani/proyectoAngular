
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MovieAPI } from 'src/app/models/movieAPI.models';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

private subscription= new Subscription;
public list: MovieAPI[] = [];

  constructor(private cartService: CartService) { }
  urlPath = environment.imgAPI;
  ngOnInit(): void {
    this.subscription.add(this.cartService.getList().subscribe(response => this.list = response));
  }

  remove(id:number){
    this.cartService.removeMovie(id).subscribe(response=>{
      console.log( response)
      this.subscription.add(this.cartService.getList().subscribe(response => this.list = response)) ;
    });
  }
  ngOnDestroy():void{
    // para que se borren los datos al salir
    this.subscription.unsubscribe();
  }

  // clearCart(){
  //   this.list = this.cartService.clearCart();
  // }
}
