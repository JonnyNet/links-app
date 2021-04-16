import { Injectable } from '@angular/core';
import {
  CanActivate, Router
} from '@angular/router';
import { URLS_APP } from 'src/app/shared/consts/urls-app';
import { AuthStoreService } from './auth-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authStoreService: AuthStoreService, private router: Router) { }

  canActivate(): boolean {
    const loggin = this.authStoreService.isAuthenticated;
    if (!loggin) { this.router.navigate([URLS_APP.AUTH.SING_IN]); }
    return true;
  }
}
