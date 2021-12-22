import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit,OnDestroy {

  constructor() { }
  userForm=new FormGroup({
    //voy agregando los controles
    user: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });
   //Suscripcion
   private subscription : Subscription | undefined;

  userControl=this.userForm.controls['user'];
  passwordControl=this.userForm.controls['password'];

  ngOnInit(): void {
  }
   //user:any[] = [];
   ngOnDestroy(): void {
    this.subscription?.unsubscribe();
}
  login(){
    //guardo los datos del forms en el array
    // this.user.push(this.userForm.value);
    //  console.log(this.user);
    this.userForm.reset();
    // aca voy a hacer la verificacion de que exista el usurio, no llegue pero va a estar
  }
}
