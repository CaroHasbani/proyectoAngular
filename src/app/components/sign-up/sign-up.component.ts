import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit,OnDestroy{

constructor(
    private userService: UserService,
    private registerService: RegisterService,
    private router: Router) { }


 //Suscripcion
 private subscription= new Subscription;

  user:User[]=[];

  ngOnInit(): void {
    this.subscription.add(this.userService.getUserList().subscribe(user=>this.user=user));
  }

  newUserForm=new FormGroup({
    //voy agregando los controles
    userFullName: new FormControl('',[Validators.required]),
    userMail: new FormControl('',[Validators.email,Validators.required]),
    password1: new FormControl('',[Validators.required,Validators.minLength(8)]),
    passwordConfirm:new FormControl('',[Validators.required]),
  });


  userControl=this.newUserForm.controls['userFullName'];
  mailControl=this.newUserForm.controls['userMail'];
  passwordControl=this.newUserForm.controls['password1'];
  passwordConfirmControl=this.newUserForm.controls['passwordConfirm'];


  createUser(){
    if (this.passwordControl.value === this. passwordConfirmControl.value ){
      const name=this.userControl.value;
      const email= this.mailControl.value;
      const password= this.passwordControl.value;
      const role= "user";
      this.subscription.add(this.registerService.createUser(name,email,password, role).subscribe(response=>console.log(response)));
      this.newUserForm.reset();

    // alert("Registro exitoso")
    this.router.navigate(['movies']);
    }
    else{
      alert("Las contraseñas no coinciden")
    }
}

  ngOnDestroy(): void {
    //Nos desuscribimos
  this.subscription.unsubscribe();
}

}
