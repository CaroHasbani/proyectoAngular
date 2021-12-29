import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit,OnDestroy {

  constructor(
    private loginService:LoginService,
    private router: Router,) { }

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

  }
   ngOnDestroy(): void {
    this.subscription?.unsubscribe();
}
  loginValidate() {
    const valid = this.loginService.validateUser(this.userControl.value, this.passwordControl.value)
    if (valid) {
      console.log("valid")
      this.router.navigate(['movies']);
    }
    else {
      console.log("not valid")
      alert("user or password not valid, try again")
      // resetea el formulario
      this.userForm.reset();
      console.log(this.loginService.getUsers());
    };

  }


}
