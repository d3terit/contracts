import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/public/services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  show = false;
  typeInput = 'password';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      ),
    ]),
  });

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  changeType(e: Event) {
    e.preventDefault();
    this.typeInput = this.typeInput == 'password' ? 'text' : 'password';
  }

  loginWithEmail() {
    if (!this.loginForm.invalid) {
      let email = this.loginForm.get('email')?.value;
      let password = this.loginForm.get('password')?.value;
      if (email && password) {
        this.authenticationService
          .AuthWithEmail(email, password)
          .then(() => this.router.navigateByUrl('/admin'))
          .catch(() => alert('pailas mi perro'));
      }
    }
  }
}
