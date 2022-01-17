import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { authConfig } from '../configs/property.config';
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

    if (this.storage.user) {
      return true;
    }
    var _returnUrl = window.location.pathname;
    if (_returnUrl === '/') {
      this.router.navigate(['/home']);
    } else {
      if (_returnUrl.startsWith('referrals', 1)) {
        var urldata = _returnUrl.split('/');
        localStorage.setItem('referredby', urldata[2])
        localStorage.setItem('referredurl', _returnUrl)
      }
      this.router.navigate(['/home'], { queryParams: { returnUrl: window.location.pathname } });
    }
    return false;
  }
}
