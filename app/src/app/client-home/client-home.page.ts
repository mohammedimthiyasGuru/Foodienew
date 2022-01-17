import { Component, OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { authConfig } from 'src/_core/configs/property.config';
import { CommonService } from 'src/_core/services/common.service';
import { LocalStorage } from 'src/_core/_data/localstorage';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Subject } from 'rxjs';
import { City_list } from 'src/assets/xlsxtojson';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.page.html',
  styleUrls: ['./client-home.page.scss'],
})
export class ClientHomePage implements OnInit {

  order_list  = [];

  search_visible = false;
  title = 'example';
  targetElement: Element;



  rest_tic : boolean = false;
  home_tic : boolean = false;
  shop_tic : boolean = false;
  others_tic : boolean = false;
  swithc_button : boolean = true;

  user_details : any;
  user_name = 'Good day!';

  notification_count = 0;
  notification_status = false;
  ntotification_unread = [];


  search_list = [];
  temp_list = [];
  search_text = '';

  rider_selected_start_count = 0;
  rider_comments = '';
  merchant_selected_start_count = 0;
  merchant_comments = '';




 loader :boolean = true;

  temp_data : any;

  popup = false

  closeResult = '';
  products: any = [];
  fav_products : any =[];
  SideMenu: any;
  location_detail: any;

  location_type: any = '';
  location_text: any = '';



  show_merchant_rating = false;
  show_rider_rating = false;
  show_dashboard = true;
  merchant_rating_detail : any;
  rider_rating_detail : any;

  constructor(

    private storage: LocalStorage,
    private router: Router,
    public toastr: ToastrManager,
    private service: CommonService,
    public City_list : City_list,
    private elementRef: ElementRef,
    private StatusBar : StatusBar
  ) {

    this.StatusBar.show();
    this.StatusBar.backgroundColorByName('white');
    this.StatusBar.styleDefault();
   }

  ngOnInit() {
    this.clear_rating_text();
    this.targetElement = document.querySelector('html');
    this.loader = true;
    this.service.new_listMerchants().subscribe(response => {
     this.temp_list = response.rows;
    }, err => {
    });


    let a = this.storage.user_location;
    this.user_details = this.storage.user;
    if(this.user_details !== undefined){
      this.user_name = this.user_details.user_full_name;
      this.check_rating();
    }
    if (!a) {
      this.router.navigateByUrl('/location');
    } else {
      // this.location_detail = res;
      this.location_text = a.address_text;
      this.location_type = a.type;
      this.loadData();
    }
    this.loadData();
  }

myRefreshEvent(event: Subject<any>, message: string) {
    setTimeout(() => {
      this.loadData();
        event.next();
    }, 2000);
}

  loadData() {
    this.loader = true;
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
        this.ntotification_unread = [];
        response.rows.forEach(element => {
          if(element.note_status == 'U'){
            this.ntotification_unread.push(element);
          }
        });

        if(this.ntotification_unread.length !== 0){
         this.notification_count = this.ntotification_unread.length;
         this.notification_status = true;
        }else{
         this.notification_status = false;
        }
       }, err => {
       });
    }




  }

  selectShop(_shopId) {
    this.storage.shop_detail = _shopId;
    localStorage.setItem(authConfig.SELECTED_SHOP, _shopId.profile_id);
    this.router.navigate(['/all-offers']);
  }



  add_to_fav(index,data){
    let user_details = this.storage.user;
    if(user_details){
      this.products[index].favourite = {id: 2, customer: 30};
      let a = {
        merchant: data.profile_id,
        customer:  user_details.user_id,
      }
      this.service.add_fav(a).subscribe(response => {
        this.toastr.successToastr("Added to favorite");
        this.loadData();
      }, err => {
        this.toastr.warningToastr(err.message);
      });
    }else{
      this.toastr.warningToastr("please login to save favorite");
    }
  }

  remove_to_fav(index,data){
    let c = {
      index : index,
      data : data
    }
    this.temp_data = c;
    this.popup = true;
  }
  cancel_to_fav(){
    this.popup = false;
  }
  confirm_to_fav(){
   let c = this.temp_data;
    this.products[c.index].favourite = null;
    this.popup = false;
    let user_details = this.storage.user;
    let a = {
      merchant_id: c.data.profile_id,
      customer_id:  user_details.user_id,
    }
    this.service.delete_fav(a).subscribe((response:any) => {
      this.toastr.successToastr(response.message);
      this.loadData();
    }, err => {
    });
  }



  switch(data){
    this.swithc_button = data;
  }







/////New Condition//////


move_next_page(data){
  this.storage.cat_detail = data;
  this.storage.routes_text = '/client-home';
  this.router.navigate(['/business']);

}

move_notification(){
  this.storage.routes_text = '/client-home';
  this.router.navigate(['/user_notification_list']);
}

move_cart(){
   let check_data = this.storage.cart_detail;
   if(check_data == undefined){
    this.toastr.warningToastr('There is no product in the cart');
   }else if(check_data.length == 0){
    this.toastr.warningToastr('There is no product in the cart');
   }else {
    this.storage.routes_text = '/client-home';
     this.router.navigate(['/cartpage']);
   }
}




searchInterest() {

  // this.search_text = str;
  // console.log(this.search_text.length);
  if(this.search_text.length > 3){
    this.search_visible = false;

  setTimeout(() => {

    this.search_list = [];
    console.log("search In");
    this.temp_list.forEach(element => {
      var string = ""+element.profile_biz_name;
      var substring = ""+this.search_text;
      string = string.toLowerCase();
      substring = substring.toLowerCase();
      var status = (string.includes(substring));
      console.log(string,substring);
      console.log(status);
      if(status == true){
        var location_detail = this.storage.user_location;
        console.log(element);
        console.log(location_detail.lat,location_detail.lng);
        let distance_between = this.distance(element.location_lat,element.location_lng,location_detail.lat,location_detail.lng,"K");
        console.log(distance_between);
        distance_between = Math.round(distance_between);
        if(distance_between < 3000){
          this.search_list.push(element);
          this.search_visible = true;
        }
      }
   });
   if(this.search_list.length == 0){
   }
  }, 1000);
  }
  if(this.search_text.length == 0){
    this.search_list = [];
  }
}



/////Finding distance/////

distance(lat1,lon1,lat2,lon2,unit) {
  var radlat1 = Math.PI * lat1/180
  var radlat2 = Math.PI * lat2/180
  var theta = lon1-lon2
  var radtheta = Math.PI * theta/180
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist)
  dist = dist * 180/Math.PI
  dist = dist * 60 * 1.1515
  if (unit=="K") { dist = dist * 1.609344 }
  if (unit=="N") { dist = dist * 0.8684 }
  return dist
}


shop_detail(data){
  this.storage.shop_detail = data;
  this.storage.routes_text = '/client-home';
  this.ngOndestroy();
  this.router.navigate(['/products']);

}


change_location(){
  this.ngOndestroy();

  this.router.navigate(['/auth/location']);

}

ngOndestroy() {
  this.elementRef.nativeElement.remove();
}

check_rating(){
  let a = {
    user_id : this.storage.user.profile_id
  }

  this.service.fetch_orderdetail(a).subscribe((response:any) => {
   console.log(response)
   this.order_list = [];
   response.rows.forEach(element => {
     console.log(element.order_status,element.order_driver_status,element.order_rating);
     if(element.order_status == 'Delivered' && element.order_driver_status == 'Delivered' && element.order_rating == null){
      element.rating_type = 'merchant_rating';
      console.log(element,element.rating_type );
      this.order_list.push(element);
     }else if(element.order_status == 'Delivered' && element.order_driver_status == 'Delivered' && element.order_rider_rate == null){
      element.rating_type = 'direver_rating';
      console.log(element,element.rating_type );
      this.order_list.push(element);
     }
   });
   if(this.order_list.length !== 0){
     if(this.order_list[0].rating_type == 'direver_rating'){
      this.show_merchant_rating = false;
      this.show_rider_rating = true;
      this.show_dashboard = false;
      this.order_list[0].order_location = JSON.parse(this.order_list[0].order_location);
      this.order_list[0].merchant_location = JSON.parse(this.order_list[0].merchant_location);
      this.rider_rating_detail = this.order_list[0];
     }else{
      this.show_merchant_rating = true;
      this.show_rider_rating = false;
      this.show_dashboard = false;
      this.order_list[0].order_location = JSON.parse(this.order_list[0].order_location);
      this.order_list[0].merchant_location = JSON.parse(this.order_list[0].merchant_location);
      this.merchant_rating_detail = this.order_list[0];
     }
     console.log(this.order_list[0]);
   }else{
    this.show_merchant_rating = false;
    this.show_rider_rating = false;
    this.show_dashboard = true;
   }

    }, err => {
      console.log(err);
      this.toastr.warningToastr('Something went wrong, pls try again later');
    });
}


merchant_selected_start_counts(value){
  this.merchant_selected_start_count = value;
}


rider_selected_start_counts(value){
  this.rider_selected_start_count = value;
}


merchant_rating_submit(){
  if(this.merchant_selected_start_count == 0){
    this.toastr.warningToastr("Please Select the Rating");
  }else{
    let a = {
      order_id : this.merchant_rating_detail.order_id,
      order_rating : this.merchant_selected_start_count,
      order_rating_text : this.merchant_comments
    }
    console.log(a);
    this.service.merchant_rating_add(a).subscribe((response:any) => {
      this.toastr.successToastr("Rating Added successfully");
      this.ngOnInit();
    }, err => {
      console.log(err);
    });
  }
}


rider_rating_submit(){
  if(this.rider_selected_start_count == 0){
    this.toastr.warningToastr("Please Select the Rating");
  }else{
    let a = {
      order_id : this.rider_rating_detail.order_id,
      order_rider_rate : this.rider_selected_start_count,
      order_rider_text : this.rider_comments
    }
    console.log(a);
    this.service.rider_rating_add(a).subscribe((response:any) => {
      this.toastr.successToastr("Rating Added successfully");
      this.ngOnInit();
    }, err => {
      console.log(err);
    });
  }
}


clear_rating_text(){
  this.merchant_selected_start_count = 0;
  this.rider_selected_start_count = 0;
  this.rider_comments = '';
  this.merchant_comments = '';
}






}
