import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit,OnDestroy{

constructor(
    private userService: UserService,
    private registerService: RegisterService) { }


 //Suscripcion
 private subscription : Subscription | undefined;


  ngOnInit(): void {
    const user=this.newUserForm.controls['userFullName'];
    const password=this.newUserForm.controls['password1'];
    const mail=this.newUserForm.controls['userMail'];
    this.subscription=this.userService.getUserList().subscribe(user=>this.user=user);
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

  user:User[]=[];

  createUser(){
    if (this.passwordControl.value === this. passwordConfirmControl.value ){
      const user=this.userControl.value;
    const mail= this.mailControl.value;
    const password= this.passwordControl.value;
    this.registerService.createUser(user,mail,password).subscribe(response=>console.log(response));
    this.newUserForm.reset();
    alert("Registro exitoso")
    }
    else{
      alert("Las contraseñas no coinciden")
    }
}

  ngOnDestroy(): void {
    //Nos desuscribimos
    this.subscription?.unsubscribe();
}


}
