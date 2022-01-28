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
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService,
    private registerService: RegisterService,
    private router: Router
  ) {}

  //Suscripcion
  private subscription = new Subscription();
  private i = 1;
  arrayId: number[] = [];

  user: User[] = [];

  ngOnInit(): void {
    this.subscription.add(
      this.userService.getUserList().subscribe((user) => (this.user = user))
    );
  }

  newUserForm = new FormGroup({
    //voy agregando los controles
    userFullName: new FormControl('', [Validators.required]),
    userMail: new FormControl('', [Validators.email, Validators.required]),
    password1: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    passwordConfirm: new FormControl('', [Validators.required]),
  });

  userControl = this.newUserForm.controls['userFullName'];
  mailControl = this.newUserForm.controls['userMail'];
  passwordControl = this.newUserForm.controls['password1'];
  passwordConfirmControl = this.newUserForm.controls['passwordConfirm'];

  createUser() {
    if (this.passwordControl.value === this.passwordConfirmControl.value) {
      //local storage-->no me funciona :(
      const ids = this.i++;
      localStorage.setItem('key', JSON.stringify(ids));
      this.arrayId.push(ids);
      const indexOfArray = this.arrayId.indexOf(
        Number(localStorage.getItem('key'))
      );
      //const indexOfArray = this.arrayId.indexOf(ids);
      localStorage.setItem('key1', JSON.stringify(indexOfArray));
      //  const id = this.arrayId[indexOfArray];
      const id = Number(localStorage.getItem('key1'));

      console.log(id);
      const name = this.userControl.value;
      const email = this.mailControl.value;
      const password = this.passwordControl.value;
      const role = 'user';
      this.subscription.add(
        this.registerService
          .createUser(id, name, email, password, role)
          .subscribe((response) => {
            console.log(response);
            if (response.status === 'OK') {
              this.newUserForm.reset();
              this.router.navigate(['movies']);
            }
          })
      );
    } else {
      alert('Password does not match');
    }
  }

  ngOnDestroy(): void {
    //Nos desuscribimos
    this.subscription.unsubscribe();
  }
}
