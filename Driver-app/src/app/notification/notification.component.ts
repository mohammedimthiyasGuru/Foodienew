import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authConfig } from 'src/_core/configs/property.config';
import { CommonService } from 'src/_core/services/common.service';
import { LocalStorage } from 'src/_core/_data/localstorage';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  notification_count = 0;
  notification_status = true;
  ntotification_list = [];


  constructor(
    private storage: LocalStorage,
    private router: Router,
    public toastr: ToastrManager,
    private service: CommonService,

  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let c = {lat : 18.00000,lng : 78.000};
    let a = {
      lat: c.lat,
      lng: c.lng,
    }
    if (this.storage.user) {
      a["profile_id"] = this.storage.user.profile_id
    }
    if(this.storage.user !== undefined){
      this.service.new_notification_list(this.storage.user.profile_id).subscribe(response => {
        this.ntotification_list = response.rows;
        if(this.ntotification_list.length !== 0){
          this.mark_as_read();
        }
       }, err => {
         console.log(err);
       });
    }
  }

  view_notify_details(){

  }


  mark_as_read(){
    this.service.mark_notification_read(this.storage.user.profile_id).subscribe(response => {
     }, err => {
       console.log(err);
     });
  }

  back_action(){
    this.router.navigate([this.storage.routes_text]);
   }

}
