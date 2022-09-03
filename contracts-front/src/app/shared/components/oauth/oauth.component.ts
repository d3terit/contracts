import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/public/services/authentication.service';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.sass']
})
export class OauthComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
  ) {}
  ngOnInit(): void {
  }

  loginWith(name: String) {
    this.authenticationService.getListAuthMethods().then(
      (list) => {
        const provider = list.authProviders.find(
          (authProvider) => authProvider.name == name
        );
        if (provider) {
          sessionStorage.setItem('provider', JSON.stringify(provider));
          window.open(
            provider.authUrl + this.authenticationService.redirect_url,
            'popup',
            'width=450px,height=600px'
          );
        }
      },
      () => console.error('Upps, Error en el servidor')
    );
  }
}
