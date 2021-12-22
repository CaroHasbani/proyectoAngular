import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit,OnDestroy{

  constructor() { }
 //Suscripcion
 private subscription : Subscription | undefined;
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    //Nos desuscribimos
    this.subscription?.unsubscribe();
}
  newUserForm=new FormGroup({
    //voy agregando los controles
    userFullName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    userMail: new FormControl('',[Validators.required]),
    password1: new FormControl('',[Validators.required,Validators.minLength(8)]),
    passwordConfirm:new FormControl('',[Validators.required]),
  });

  userFullNameControl=this.newUserForm.controls['userFullName'];
  passwordControl1=this.newUserForm.controls['password1'];
  userMailControl=this.newUserForm.controls['userMail'];

  users:any[] = [];

  saveUser(){
    //guardo los datos del forms en el array
    this.users.push(this.newUserForm.value);
     console.log(this.users);
     this.newUserForm.reset();
  }
}
