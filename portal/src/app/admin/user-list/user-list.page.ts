import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_core/services/user.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  users: any[];
  menu: string = 'VENDORS';

  constructor(
    private router: Router,
    private service: UserService,
    private storage: LocalStorage
  ) { }

  ngOnInit() {
    this.service.listVendors({}).subscribe(res => {
      this.users = res.rows;
    })
  }

  loadUsers(_role: number) {
    if (_role == 1) {
      this.service.list({}).subscribe(res => {
        this.users = res.rows;
      })
    } else if (_role == 2) {
      this.menu = 'MERCHANTS';
      this.service.listMerchants({}).subscribe(res => {
        this.users = res.rows;
      })
    } else if (_role == 3) {
      this.menu = 'VENDORS';
      this.service.listVendors({}).subscribe(res => {
        this.users = res.rows;
      })
    } else if (_role == 4) {
      this.menu = 'RIDERS';
      this.service.list({}).subscribe(res => {
        this.users = res.rows;
      })
    } else if (_role == 5) {
      this.menu = 'CUSTOMERS';
      this.service.list({}).subscribe(res => {
        this.users = res.rows;
      })
    } 
    console.log(this.users);
  }


  addvendor(){
    // alert("added Button");
    this.router.navigateByUrl('/Vendor_form');
    // forms
  }

}
