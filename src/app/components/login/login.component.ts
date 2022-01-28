import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //Suscripcion
  private subscription: Subscription | undefined;

  error!: string;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  // para controlar el form
  userControl = this.form.controls['user'];
  passwordControl = this.form.controls['password'];

  submit() {
    if (this.form.valid) {
      this.loginService
        .validateCredentials(
          this.form.get('user')?.value,
          this.form.get('password')?.value
        )
        .subscribe((valid) => {
          if (valid) {
            this.router.navigate(['movies']);
          } else {
            this.error = 'User or Password invalid';
            this.form.reset();
          }
        });
    }
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
