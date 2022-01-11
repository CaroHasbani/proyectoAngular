import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit, OnDestroy {

  private subscription= new Subscription;
  user:User[]=[];

  constructor(
    private userService: UserService,
   // private registerService: RegisterService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscription.add(this.userService.getUserList().subscribe(user=>this.user=user));
  }


  ngOnDestroy(): void {
    //Nos desuscribimos
  this.subscription.unsubscribe();
}

}
