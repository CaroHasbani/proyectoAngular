import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.models';
import { ConfigService } from 'src/app/services/config.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  private subscription= new Subscription;
  user: User[] = [];

 // user!:User;

  constructor(
    private userService: UserService,
    private router: Router,
    private configService: ConfigService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.subscription.add(this.userService.getUserList().subscribe(user=>this.user=user));
    // this.subscription.add(this.userService.getUserById(this.activatedRoute.snapshot.params['id']).subscribe(
    //   response => { this.user = response;}));
  }

  public name:FormControl=new FormControl('');
  public email:FormControl=new FormControl('');
  public role:FormControl=new FormControl('');

  update(id:number ){
    //const id=Number( (<HTMLInputElement>document.getElementById("id")).value);
    console.log(this.name.value);
    const name=this.name.value;
    const email=this.email.value;
    const role= this.role.value;

    this.configService.updateUser(id, name, email, role).subscribe(response=>{
         console.log( response)
         this.subscription.add(this.userService.getUserList().subscribe(response => this.user = response)) ;
      //   this.subscription.add(this.userService.getUserById(this.activatedRoute.snapshot.params['id']).subscribe(
      //     response => { this.user = response;}));
        });
    }



  ngOnDestroy(): void {
      //Nos desuscribimos
    this.subscription.unsubscribe();
    }


}
