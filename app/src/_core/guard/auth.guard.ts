import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorage } from '../_data/localstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private storage: LocalStorage,
    private router: Router,
  ) { }

  canActivate() {

    // if (this.storage.user) {
    //   return true;
    // }
    return true;
    // this.router.navigate(['/home'], { queryParams: { returnUrl: window.location.pathname } });
    // return false;
  }
}
