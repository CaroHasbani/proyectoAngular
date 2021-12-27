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

    this.userForm.reset();

    // aca voy a hacer la verificacion de que exista el usurio, no llegue pero va a estar
  }

  // loginValidate() {
  //   const valido = this.loginService.validarUser(this.emailControl.value, this.passwordControl.value)

  //   if (valido) {
  //     console.log("Usuario y Contraseña son validos -> Ingresa")
  //   }
  //   else {
  //     console.log("No se le permite el ingreso -> No valido")
  //   };
  // }


}
