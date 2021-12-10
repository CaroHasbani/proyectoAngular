import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor() { }
  userForm=new FormGroup({
    //voy agregando los controles
    user: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  userControl=this.userForm.controls['user'];
  passwordControl=this.userForm.controls['password'];

  ngOnInit(): void {
  }
   //user:any[] = [];

  login(){
    //guardo los datos del forms en el array
    // this.user.push(this.userForm.value);
    //  console.log(this.user);
    this.userForm.reset();
    // aca voy a hacer la verificacion de que exista el usurio, no llegue pero va a estar
  }
}
