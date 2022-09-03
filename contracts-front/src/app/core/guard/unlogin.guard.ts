import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../modules/public/services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class UnloginGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const session = localStorage.getItem('pocketbase_auth');
    if (session) {
      const login = JSON.parse(session);
      this.authenticationService.getUserData(login.model.id, login.token).then(
        () => {
          this.router.navigateByUrl("/admin")
          return false},
        () => {
          localStorage.removeItem('pocketbase_auth');
        }
      );
      return true;
    } else {
      return true;
    }
  }
}
