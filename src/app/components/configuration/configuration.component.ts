import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.models';
import { ConfigService } from 'src/app/services/config.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit, OnDestroy {

  private subscription= new Subscription;
   user: User[] = [];

  public name:FormControl=new FormControl('');


  constructor(
    private userService: UserService,
    private router: Router,
    private configService: ConfigService
    ) { }

  ngOnInit(): void {
    this.subscription.add(this.userService.getUserList().subscribe(user=>this.user=user));
  }


 // remove(id:number){
remove(name:string){
   // this.configService.removeUser(id).subscribe(response=>{
      this.configService.removeUser(name).subscribe(response=>{
      console.log( response)
      this.subscription.add(this.userService.getUserList().subscribe(response => this.user = response)) ;
    });
}


update(id:number ){
//const id=Number( (<HTMLInputElement>document.getElementById("id")).value);
console.log(this.name.value);


 const name= (<HTMLInputElement>document.getElementById("name")).value;
const email= (<HTMLInputElement>document.getElementById("email")).value;
const role= (<HTMLInputElement>document.getElementById("role")).value;

this.configService.updateUser(id, name, email, role).subscribe(response=>{
     console.log( response)
     this.subscription.add(this.userService.getUserList().subscribe(response => this.user = response)) ;
   });
}

ngOnDestroy(): void {
  //Nos desuscribimos
this.subscription.unsubscribe();
}
}

