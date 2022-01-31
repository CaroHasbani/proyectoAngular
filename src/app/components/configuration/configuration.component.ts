import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.models';
import { ConfigService } from 'src/app/services/config.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  user: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.userService.getUserList().subscribe((user) => (this.user = user))
    );
  }
  public id: FormControl = new FormControl('');
  public name: FormControl = new FormControl('');
  public email: FormControl = new FormControl('');
  public role: FormControl = new FormControl('');


  remove(name: string) {
    this.configService.removeUser(name).subscribe((response) => {
      console.log(response);
      this.subscription.add(
        this.userService
          .getUserList()
          .subscribe((response) => (this.user = response))
      );
    });
  }

  update() {
    //const id=Number( (<HTMLInputElement>document.getElementById("id")).value);
    console.log(this.name.value);
    const id = Number(this.id.value);
    const name = this.name.value;
    const email = this.email.value;
    const role = this.role.value;

    this.subscription.add(
      this.configService
        .updateUser(id, name, email, role)
        .subscribe((response) => {
          console.log(response.status);
          if (response.status === 'Cannot find id') {
            Swal.fire('Nop', 'Id not found, try again', 'error');
          }
          this.userService
            .getUserList()
            .subscribe((response) => (this.user = response));
        })
    );
  }
  ngOnDestroy(): void {
    //Nos desuscribimos
    this.subscription.unsubscribe();
  }
}
