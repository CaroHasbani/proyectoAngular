import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit,OnDestroy {

  constructor(private loginService:LoginService) { }

  userForm=new FormGroup({
    //voy agregando los controles
    user: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });
   //Suscripcion
   private subscription : Subscription | undefined;

 // para controlar el form
   userControl=this.userForm.controls['user'];
  passwordControl=this.userForm.controls['password'];

  ngOnInit(): void {
    // muestro los usuarios por consola
    console.log(this.loginService.getUsers());
  }
   ngOnDestroy(): void {
    this.subscription?.unsubscribe();
}

  loginValidate() {
    const valid = this.loginService.validateUser(this.userControl.value, this.passwordControl.value)

    if (valid) {
      console.log("valid")

    }
    else {
      console.log("not valid")
      // resetea el formulario
      this.userForm.reset();


    };
  }
}
