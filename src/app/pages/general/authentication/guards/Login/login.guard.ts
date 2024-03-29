import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LoginServiceService } from '../../services/login-service/login-service.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private _loginService: LoginServiceService,
    private _router: Router
  ) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this._loginService.getAuthStatus()) {
      return true;
    }

    this._router.navigate(['/home']);
    return false;
  }
}
