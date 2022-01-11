import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(
    private userService: UserService,
    private router: Router,
    private configService: ConfigService
    ) { }

  ngOnInit(): void {
    this.subscription.add(this.userService.getUserList().subscribe(user=>this.user=user));
  }


  remove(name:string){
    this.configService.removeUser(name).subscribe(response=>{
      console.log( response)
      this.subscription.add(this.userService.getUserList().subscribe(response => this.user = response)) ;
    });


}
ngOnDestroy(): void {
  //Nos desuscribimos
this.subscription.unsubscribe();
}
}

