import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City_list } from '../../assets/xlsxtojson'
import { LocalStorage } from 'src/_core/_data/localstorage';
import { CommonService } from 'src/_core/services/common.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.scss'],
})
export class BusinessDetailComponent implements OnInit {

  category = [];
  cuisine_cat = [];

  restarent_list = [];
  fav_restarent_list = [];
  overall_data = [];
  location_text = '';
  show_order_visible = true;
  search_visible = false;

  search_list = [];
  temp_list = [];
  rating_list = [];
  search_text = '';


  notification_count = 0;
  notification_status = true;
  ntotification_unread = [];

  cat_text = 'Cuisnes';
  rest_text = 'Restarent Details';
  selected = this.storage.cat_detail;




  order_list = [];

  top_trending_list = [];
  top_recommend_list = [];
  your_restaurant_list = [];
  your_fav_list = [];
  your_follow_list = [];


  user_status = false;

  tracking_list = [];


  timeLeft: number = 60;
  interval;




  constructor( private StatusBar : StatusBar,public toastr: ToastrManager,private router: Router,public City_list : City_list,private storage: LocalStorage,    private service: CommonService) { }
  ngOnInit() {
    this.StatusBar.show();
    this.StatusBar.backgroundColorByName('white');
    this.StatusBar.styleDefault();

    let a = this.storage.user_location;
    if (!a) {
      this.router.navigateByUrl('/location');
    } else {
      // this.location_detail = res;
      this.location_text = a.address_text;
    }


    let user_detail =  this.storage.user;
    if(user_detail !== undefined){
      this.user_status = true;
      this.fetch_user_detail();
      this.list_order_detail();
      this.startTimer();
    }

    if(this.selected == 'Restaurant' || this.selected == 'Home Kitchen' || this.selected == 'Caterers'){
      this.cat_text = 'Cuisnes';
      this.rest_text = 'Restarent Details';
    }else if(this.selected == 'Shop' || this.selected == 'Others'){
      this.cat_text = 'Catagory';
      this.rest_text = 'Shop Details';
    }
    this.cuisine_cat = [];
    this.category = [];
    this.category = this.City_list.sheet2;
    this.cuisine_cat = this.City_list.sheet1;

    this.cuisine_cat.forEach(element => {
      element.select_status = false;
    });
    this.category.forEach(element => {
      element.select_status = false;
    });


    this.service.new_listMerchants().subscribe((response:any) => {
    console.log(response);
    this.temp_list = response.rows;
    this.restarent_list = [];
    this.top_recommend_list = [];
    this.top_trending_list = [];
    if(response.count !== 0){
    response.rows.forEach(element => {
      if(this.cat_text == 'Cuisnes'){
        if(element.profile_biz_type == 'Restaurant' || element.profile_biz_type  == 'Home Kitchen' || element.profile_biz_type  == 'Caterers'){
          let distnaces = Math.round(this.distance(element.location_lat,element.location_lng,this.storage.user_location.lat,this.storage.user_location.lng,'K'));
          this.restarent_list.push(element);
          this.overall_data.push(element);
          if(element.rating > 4.6){
            this.top_trending_list.push(element);
          }
          if(distnaces < 20 && element.rating > 4.6){
            this.top_recommend_list.push(element);
          }
         }
      }else if(this.cat_text == 'Catagory'){
        if(element.profile_biz_type == 'Shop' || element.profile_biz_type  == 'Others'){
          let distnaces = Math.round(this.distance(element.location_lat,element.location_lng,this.storage.user_location.lat,this.storage.user_location.lng,'K'));
          this.restarent_list.push(element);
          this.overall_data.push(element);
          if(element.rating < 4.6){
            this.top_trending_list.push(element);
          }
          if(distnaces < 20 && element.rating < 4.6){
            this.top_recommend_list.push(element);
          }
        }
      }
    });
     }
    }, err => {
    });
  }

  move_next_page(data){
    this.storage.shop_detail = data;
    console.log(this.storage.shop_detail);
    this.storage.routes_text = '/business';
    this.router.navigate(['/products']);
    this.pauseTimer();
  }


  Filter(data,index,status){
    console.log(status);
    if(status == 'show_all'){
    this.ngOnInit();
    }else{
    this.cuisine_cat.forEach(element => {
      element.select_status = false;
    });
    this.category.forEach(element => {
      element.select_status = false;
    });
   this.restarent_list = [];
   this.fav_restarent_list = [];
   for(let a = 0 ; a < this.overall_data.length; a ++){
    if(this.cat_text == 'Cuisnes'){
      this.cuisine_cat[index].select_status = true;
    if(this.overall_data[a].cuisine == data){
      this.restarent_list.push(this.overall_data[a]);
    }
    }else if(this.cat_text == 'Catagory') {
      this.category[index].select_status = true;
      if(this.overall_data[a].categorys == data){
      this.restarent_list.push(this.overall_data[a]);
      }
    }
    if(a == this.overall_data.length - 1){
    }
   }
  }
  }



  searchInterest() {
    if(this.search_text.length > 3){
      this.search_visible = false;
    setTimeout(() => {
      this.search_list = [];
      this.temp_list.forEach(element => {
        // const string = ""+element.profile_biz_name;
        // const substring = ""+this.search_text;
        var string = ""+element.profile_biz_name;
        var substring = ""+this.search_text;
        string = string.toLowerCase();
        substring = substring.toLowerCase();
        var status = (string.includes(substring));
        if(status == true){
          var location_detail = this.storage.user_location;
          let distance_between = this.distance(element.location_lat,element.location_lng,location_detail.lat,location_detail.lng,"K");
          distance_between = Math.round(distance_between);
          if(distance_between < 3000){
            if(this.cat_text == 'Cuisnes'){
              if(element.profile_biz_type == 'Restaurant' || element.profile_biz_type  == 'Home Kitchen' || element.profile_biz_type  == 'Caterers'){
                this.search_list.push(element);
                this.search_visible = true;
               }
            }else if(this.cat_text == 'Catagory'){
              if(element.profile_biz_type == 'Shop' || element.profile_biz_type  == 'Others'){
                this.search_list.push(element);
                this.search_visible = true;
              }
            }
          }
        //  this.search_list.push(element);
        //  this.search_visible = true;
        }
     });
     if(this.search_list.length == 0){
     }
    }, 2000);
    }
  }


  move_notification(){
    this.storage.routes_text = '/business';
    this.router.navigate(['/user_notification_list']);
    this.pauseTimer();
  }

  move_cart(){
    let check_data = this.storage.cart_detail;
    if(check_data == undefined){
     this.toastr.warningToastr('There is no product in the cart');
    }else if(check_data.length == 0){
     this.toastr.warningToastr('There is no product in the cart');
    }else {
     this.storage.routes_text = '/business';
      this.router.navigate(['/cartpage']);
      this.pauseTimer();
    }
 }


 show_all(){
  this.ngOnInit();
 }



 fetch_user_detail(){
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


  let a = {
    customer_id  : this.storage.user.profile_id
  }
  this.fav_restarent_list = [];
  this.service.list_fav(a).subscribe(response => {
    console.log(response);
    this.fav_restarent_list = response.rows;
  });
  console.log(this.fav_restarent_list);


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


change_location(){
  this.router.navigate(['/auth/location']);

}




list_order_detail(){
  let a = {
    user_id : this.storage.user.profile_id
  }
  let temp = [];
  this.service.fetch_orderdetail(a).subscribe((response:any) => {
   console.log(response)
   this.order_list = response.rows;
     if(this.order_list.length == 0){
       this.show_order_visible = false;
     } else {
      this.tracking_list = [];
      this.show_order_visible = true;
      this.tracking_list = this.order_list;
     }
     this.your_restaurant();
    }, err => {
      console.log(err);
      this.toastr.warningToastr('Something went wrong, pls try again later');
    });
}

your_restaurant(){
  console.log(this.order_list);

}


move_to_livetracking(data){
 console.log(data);
 this.storage.tracking_detail = data;
 this.storage.routes_text = '/business';
 this.router.navigate(['/tracking_screen']);
   this.pauseTimer();
}


move_to_support(data){
  console.log(data);
  this.storage.chat_detail = data;
  this.storage.routes_text = '/business';
  this.router.navigate(['/chatviewsingle']);
  this.pauseTimer();
}

back_action(){
  this.router.navigate([this.storage.routes_text]);
  this.pauseTimer();
}


fetch_product_rating(){
  let a = {
    pr_product_id : 2,
    pr_merchant_id : 1
  }
  this.service.fetch_product_rating(a).subscribe((response:any) => {
   console.log(response)
   this.rating_list =  response.rows;
    }, err => {
    });
}


startTimer() {
  this.interval = setInterval(() => {
    if(this.timeLeft > 0) {
      this.timeLeft--;
       this.list_order_detail();
    } else {
      this.timeLeft = 60;
    }
  },3000)
}

pauseTimer() {
  clearInterval(this.interval);
}







}
