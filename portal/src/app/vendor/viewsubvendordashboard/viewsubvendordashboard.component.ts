import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { UserService } from 'src/app/_core/services/user.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

@Component({
  selector: 'app-viewsubvendordashboard',
  templateUrl: './viewsubvendordashboard.component.html',
  styleUrls: ['./viewsubvendordashboard.component.scss'],
})
export class ViewsubvendordashboardComponent implements OnInit {
  
  users: any[];
  sub_vendors : any[];
  menu: string = 'VENDORS';
  profile: any = true;
  _profileId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: UserService,
    private profileservice: ProfileService,
    private storage: LocalStorage
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._profileId = params.userid;
    })

    if (this._profileId) {
      this.profileservice.view(this._profileId).subscribe(res => {
        this.profile = res;
        this.loadUsers(this.profile.role_id);
        console.log(this.profile.role_id);
      })
    }

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
        console.log(this.users);
      })
      this.service.listSubVendors({}).subscribe(res => {
        this.sub_vendors = res.rows;
        console.log(this.sub_vendors);
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
    console.log(this.sub_vendors);
  }

}
