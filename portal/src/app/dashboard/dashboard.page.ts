import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from '../_core/_data/localstorage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private storage: LocalStorage,
    private router: Router
  ) { }

  ngOnInit() {

    if (window.innerWidth <= 768) {
      if (this.storage.isMerchant) {
        this.router.navigateByUrl('merchant/update-order-status');
      }
    } else {
      console.log(this.storage.isMerchant);
      if (this.storage.isAdministrator) {
        this.router.navigateByUrl('admin/dashboard');
      } else if (this.storage.isMerchant) {
        this.router.navigateByUrl('merchant_panel/dashboard');
      } else if (this.storage.isVendor) {
        this.router.navigateByUrl('vendor/dashboard');
      }
    }
  }

}
