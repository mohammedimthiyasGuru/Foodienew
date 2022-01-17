import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_core/services/order.service';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ActivatedRoute, Router } from '@angular/router';
import { authConfig } from 'src/app/_core/configs/property.config';
import { VideoService } from 'src/app/_core/services/video.service';



import {AgmMap, MouseEvent,MapsAPILoader  } from '@agm/core';
import { Location } from '@angular/common';
import { Inject, ViewChild, ElementRef } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { AuthService } from 'src/app/_core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  @ViewChild(AgmMap,{static: true}) public agmMap: AgmMap;
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;

  options={
    types: [],
    componentRestrictions: { country: 'IN' }
    }

  zoom: number = 16;
  base_lat: number = 11.1271;
  base_lng: number = 78.6569;
  location_lat: number = 11.1271;
  location_lng: number = 78.6569;


  loader : boolean = true;
  profile: any;
  corderslist: any = [];
  video_count : number;
  history_list : any = [];
  
  previous_index : any;
  history_index : any;

  order_status = 'B';


  final_output : any = [];

  confirmation_list = [];
  preparing_list = [];
  rider_list = [];
  deliver_list = [];
  cancel_list = [];

  edit_summary = false;
  summary_value ='';
  



  constructor(
    private storage: LocalStorage,
    private service: ProfileService,
    private router: Router,
    // private auth: AuthService,
    private auth: AuthService,
    private videoservice: VideoService,
    private orderservice: OrderService,

   

  ) { }

  ngOnInit() {
    this.history_list = [];
    this.corderslist = [];
    this.service.view(this.storage.user.profile_id).subscribe(res => {
      this.profile = res;
      console.log(res);
      if(res.profile_location == null && res.profile_biz_name == null){
        let g = {profile_id: res.profile_id, user_id: res.user.user_id}
        localStorage.setItem(authConfig.REGISTERED_PROFILE, JSON.stringify(g));
        const registerData = {
          contactno:res.profile_contact
        };
        console.log(registerData);
        this.storage.merchant_detail = registerData;
        this.router.navigateByUrl('/account/register');
        this.loader = false;
      }
      this.loader = false;
      this.base_lat = this.profile.location_lat;
      this.base_lng = this.profile.location_lng;
      this.location_lat = this.profile.location_lat;
      this.location_lng = this.profile.location_lng;
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
    });
    this.loadData();
    this.fetch_video();

  }

  loadData() {
    let filter = {
      merchant_id: Number(this.storage.user.profile_id),
      status : this.order_status
    }
    this.orderservice.list_merchant(filter).subscribe(res => {
      this.corderslist = [];
      let temp_data = res.rows;
      console.log(temp_data);
      for(let a = 0 ; a < temp_data.length ; a ++){
        if(a == 0){
          let tem = temp_data[0];
          let c = {
             order_detail : tem,
             order_value : tem.mercant_price_total,
             order_qty : tem.prod_qty,
             product_details : [],
             view_status : false
          }
          c.product_details.push(tem);
          this.corderslist.push(c);
        }else{
          let datas = [];
          datas = this.corderslist;
          var check_status = 0;
          let tem = temp_data[a];
          for(let c = 0 ; c < datas.length ; c ++){
            if(datas[c].order_detail.order_id == temp_data[a].order_id){
              datas[c].order_value = datas[c].order_value + temp_data[a].mercant_price_total,
              datas[c].order_qty = datas[c].order_qty + temp_data[a].prod_qty
              check_status = 1;
            }
            if(c == datas.length - 1){
              if(check_status == 0){
             let tem = temp_data[a];
             let c = {
             order_detail : tem,
             order_value : tem.mercant_price_total,
             order_qty : tem.prod_qty,
             product_details : [],
             view_status : false
             }
             c.product_details.push(tem);
             this.corderslist.push(c);
              }else{
                this.corderslist[c].product_details.push(tem);
              }
            }
          }
        }
        if(a == temp_data.length - 1 ){
           console.log(this.corderslist);
           this.remove_index();
        }
      }
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
    });
  }

  fetch_video(){
    let a = this.storage.user.profile_id
    this.videoservice.list(a).subscribe(res => {
      this.video_count = res.count;
    });
  }



  remove_index(){
     for(let a  = 0 ; a < this.corderslist.length ; a ++){
       if(a !== 0){
         this.corderslist[a].order_value = this.corderslist[a].order_value - this.corderslist[a].order_detail.mercant_price_total;
         this.corderslist[a].order_qty = this.corderslist[a].order_qty - this.corderslist[a].order_detail.prod_qty;
         this.corderslist[a].product_details.splice(0,1);
       }
       if(a == this.corderslist.length - 1){
         this.divider();
       }
     }
  }




  divider(){
    for(let a  = 0 ; a < this.corderslist.length ; a ++){
      if(this.corderslist[a].order_detail.order_dtl_status == 'B'){
        this.confirmation_list.push(this.corderslist[a]);
      }else if(this.corderslist[a].order_detail.order_dtl_status == 'A'){
        this.preparing_list.push(this.corderslist[a]);
      }else if(this.corderslist[a].order_detail.order_dtl_status == 'P'){
        this.rider_list.push(this.corderslist[a]);
      }else if(this.corderslist[a].order_detail.order_dtl_status == 'D'){
        this.deliver_list.push(this.corderslist[a]);
      }else if(this.corderslist[a].order_detail.order_dtl_status == 'C'){
        this.cancel_list.push(this.corderslist[a]);
      }
    }
  }








  updatestatus(data, order_detail) {
    console.log(data, order_detail.product_details.length);
    // order_detail = order_detail.order_detail;
   for(let a = 0 ; a < order_detail.product_details.length; a++){
     let order_id = order_detail.product_details[a].order_dtl_id;
     if (data == 'Accept') {
      let a = {
        order_dtl_status: "A",
        order_dtl_id: order_id
      }
      console.log(a);
      this.orderservice.update_status(a).subscribe(res => {
        console.log("Update Successfully");
        // this.ngOnInit();
      }, err => {
      });
    }
    else if (data == 'Cancel') {
      let a = {
        order_dtl_status: "C",
        order_dtl_id: order_id
      }
      console.log(a);
      this.orderservice.update_status(a).subscribe(res => {
        console.log("Update Successfully");
        // this.ngOnInit();
      }, err => {
      });
    }
    else if (data == 'Pick_Delivery') {
      let a = {
        order_dtl_status: "P",
        order_dtl_id: order_id
      }
      console.log(a);
      this.orderservice.update_status(a).subscribe(res => {
        console.log("Update Successfully");
        // this.ngOnInit();
      }, err => {
      });
    }

    else if (data == 'Delivered') {
      let a = {
        order_dtl_status: "D",
        order_dtl_id: order_id
      }
      console.log(a);
      this.orderservice.update_status(a).subscribe(res => {
        console.log("Update Successfully");
        // this.ngOnInit();
      }, err => {
      });
    }
    if(a == order_detail.product_details.length - 1){
      this.ngOnInit();
    }

   }
     





  }


  edit_summary_action(){
    this.edit_summary = true;
    this.summary_value = this.profile.profile_summary;
  }

  edit_submit(){
    this.edit_summary = false;
    // var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
    const registerData = {
      profile_summary: this.summary_value,
      profile_id: this.profile.profile_id,
    };
    this.auth.register_summary(registerData).subscribe((res: any) => {
      console.log(res);
      this.profile.profile_summary = this.summary_value;
      // localStorage.removeItem(authConfig.REGISTERED_PROFILE);
      // this.toastr.successToastr('Registered Succesfully');
      // this.router.navigateByUrl("merchant_panel/dashboard");
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      // this.toastr.warningToastr(err);
      // this.notify.showError(err, "LOGIN");
    });


  }




 




}
