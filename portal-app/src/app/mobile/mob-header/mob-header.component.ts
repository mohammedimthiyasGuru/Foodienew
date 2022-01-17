import { Component, OnInit } from '@angular/core';
import { authConfig } from './../../_core/configs/property.config';
import { ProfileService } from './../../_core/services/profile.service';
import { LocalStorage } from './../../_core/_data/localstorage';

@Component({
  selector: 'app-mob-header',
  templateUrl: './mob-header.component.html',
  styleUrls: ['./mob-header.component.scss'],
})
export class MobHeaderComponent implements OnInit {

  currentUser: any;
  user_role: string;
  status = true;


  constructor(
    private storage: LocalStorage,
  ) { }

  ngOnInit() {
    this.currentUser = this.storage.user;
    if (this.currentUser.role_id == 1) {
      this.user_role = 'Admin';
    } else if (this.currentUser.role_id == 2) {
      this.user_role = 'Merchant';
    } else if (this.currentUser.role_id == 3) {
      this.user_role = 'Vendor';
    }
  }

  logout() {
    this.storage.clear();
    window.location.reload();
  }

}
