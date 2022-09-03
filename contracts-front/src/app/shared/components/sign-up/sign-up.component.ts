import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/public/services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent implements OnInit {
  show = false;
  typeInput = 'password';
  registerForm = new FormGroup({
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

  registerWithEmail() {
    if (!this.registerForm.invalid) {
      let email = this.registerForm.get('email')?.value;
      let password = this.registerForm.get('password')?.value;
      if (email && password) {
        this.authenticationService
          .RegisterWithEmail(email, password)
          .then(() => {
            if (email && password)
              this.authenticationService
                .AuthWithEmail(email, password)
                .then(() => this.router.navigateByUrl('/admin'))
                .catch(() => alert('pailas mi perro'));
          })
          .catch(() => alert('pailas mi perro'));
      }
    }
  }
}
