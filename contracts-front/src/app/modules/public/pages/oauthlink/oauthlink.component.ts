import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-oauthlink',
  templateUrl: './oauthlink.component.html',
  styleUrls: ['./oauthlink.component.sass'],
})
export class OauthlinkComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const providerData = sessionStorage.getItem('provider');
    if (providerData) {
      const provider = JSON.parse(providerData);
      this.route.queryParams.subscribe((params: Params) => {
        this.authenticationService.AuthWithOauth(
          provider.name,
          params["code"],
          provider.codeVerifier
        ).then(
          ()=>{
            sessionStorage.removeItem("provider")
            window.opener.location.reload()
            window.close()
          },
          (e)=>{
            console.error("error",e)
            this.router.navigateByUrl("")
          })
      });
    }
  }
}
