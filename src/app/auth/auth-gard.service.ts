import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGardService {

  constructor(private authService: AuthService) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.authService.isAuthenticated();
    }
}
