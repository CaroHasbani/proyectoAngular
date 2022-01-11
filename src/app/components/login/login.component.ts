// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Subscription } from 'rxjs';
// import { LoginService } from 'src/app/services/login.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })

// export class LoginComponent implements OnInit,OnDestroy {
//   ngOnInit(): void {
//   }

//   constructor(
//     private loginService:LoginService,
//     private router: Router,) { }

//   userForm=new FormGroup({
//     //voy agregando los controles
//     user: new FormControl('',[Validators.required]),
//     password: new FormControl('',[Validators.required]),
//   });

//    //Suscripcion
//    private subscription : Subscription | undefined;

//  // para controlar el form
//   userControl=this.userForm.controls['user'];
//   passwordControl=this.userForm.controls['password'];


//   loginValidate() {
//     const valid = this.loginService.validateUser(this.userControl.value, this.passwordControl.value)
//     if (valid) {
//       this.router.navigate(['movies']);
//     }
//     else {
//       alert("user or password not valid, try again")
//       // resetea el formulario
//       this.userForm.reset();
//       console.log(this.loginService.getUsers());
//     };

//   }
//   ngOnDestroy(): void {
//     this.subscription?.unsubscribe();
// }

// }
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Suscripcion
   private subscription : Subscription | undefined;


  error!: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  //  // para controlar el form
  userControl=this.form.controls['user'];
  passwordControl=this.form.controls['password'];

  submit() {
    if (this.form.valid) {
      this.loginService.validateCredentials(this.form.get('user')?.value, this.form.get('password')?.value, )
      .subscribe(valid => {
        if (valid) {
           this.router.navigate(['movies']);
         // this.router.navigate(['cart']);
        } else {
           this.error = 'User or Password invalid';
          this.form.reset();
        }
      })
    }
  }
  ngOnDestroy(): void {
         this.subscription?.unsubscribe();
     }
}
