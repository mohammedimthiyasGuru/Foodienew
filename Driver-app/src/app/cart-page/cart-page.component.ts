import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../_core/services/auth.service';
import { LocalStorage } from '../../_core/_data/localstorage';
import { CommonService } from '../../_core/services/common.service';
import { authConfig } from 'src/_core/configs/property.config';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {

  cart_detail = [];
  shop_detail : any;
  _merchantId : any;
  prod_list = [];
  sub_total = 0;
  delivery_fee = 0;
  processing_fee = 0;
  inc_service = 0;
  vocher_value = 0;
  voucher_type = '';
  voucher_code = '';
  over_all_total = 0;
  promo_code_text = '';
  promo_applied = false;
  user_details = this.storage.user;
  user_location = this.storage.user_location;
  contactless_status = false;
  payment_type = "Yummy Pay";
  yummy_pay_amount = 0;

  distance_km = 0;
  delivery_time = '';
  email_id = 'undefine';
  move_to_link = '';






  timeLeft: number = 5;
  interval;

  addtocart_visible = false;



  msg_show = false;
  msg_title = '';
  msg_text = '';
  price_symbol = 'RM ';


  constructor(
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute,
    private storage: LocalStorage,
    private service: CommonService,
  ) {
    // window.location.reload();


   }

  ngOnInit() {

    this.shop_detail = this.storage.shop_detail;
    if(this.shop_detail.p_country_name == 'INDIA'){
     this.price_symbol = 'Rs ' ;
    } else if(this.shop_detail.p_country_name == 'SINGAPORE') {
      this.price_symbol = 'RM ' ;
    } else {
      this.price_symbol = '$ ' ;
    }


    console.log(this.user_details);
  if(this.storage.datas == undefined){
    this.storage.datas = {type: true, amount: 0, payment_type: "Yummy Pay"};
    this.payment_type = "Yummy Pay";
    this.contactless_status = true;
  }else{
    this.payment_type = this.storage.datas.payment_type;
    this.contactless_status = this.storage.datas.type;
  }

  if(this.user_details !== undefined){
    this.email_id = this.user_details.user_email;
  }

   this.cart_detail = this.storage.cart_detail;
   this.shop_detail = this.storage.shop_detail;
   console.log(this.shop_detail);
   this._merchantId = this.shop_detail.profile_id;
   this.service.new_merchantProducts_all(this._merchantId).subscribe((res:any) => {
    this.prod_list = [];
    res.rows.forEach(element => {
       if(element.prod_price <= 5){
         this.prod_list.push(element);
       }
    });

    this.sub_total = 0;
    this.cart_detail.forEach(element => {
      this.sub_total = this.sub_total + element.total;
    });

    console.log(this.sub_total,this.storage.coupon_detail.promocode_mini_value);
    if(this.sub_total < this.storage.coupon_detail.promocode_mini_value){
      this.storage.coupon_detail = {};
      this.promo_applied = false;
      this.promo_code_text = '';
    }else{
      console.log(this.storage.coupon_detail);
      if(this.storage.coupon_detail.promocode_type !== undefined){
        if(this.storage.coupon_detail.promocode_type == 'amount'){
         this.promo_code_text = this.price_symbol +this.storage.coupon_detail.promocode_value+" Off";
         this.promo_applied = true;
       }else if(this.storage.coupon_detail.promocode_type == 'percentage'){
         this.promo_code_text = this.price_symbol  +this.storage.coupon_detail.promocode_value+"% Off";
         this.promo_applied = true;
        }
      }else if(this.storage.coupon_detail.promocode_type == undefined){
       this.promo_applied = false;
       this.promo_code_text = '';
      }
    }

    this.calculate_total();
    this.check_yummy_pay_amount();
   });
  }


  check_coupon_code(){
    console.log(this.sub_total,this.storage.coupon_detail.promocode_mini_value);
    if(this.sub_total < this.storage.coupon_detail.promocode_mini_value){
      this.storage.coupon_detail = {};
      this.promo_applied = false;
      this.promo_code_text = '';
    }else{
      console.log(this.storage.coupon_detail);
      if(this.storage.coupon_detail.promocode_type !== undefined){
        if(this.storage.coupon_detail.promocode_type == 'amount'){
         this.promo_code_text = this.price_symbol  +this.storage.coupon_detail.promocode_value+" Off";
         this.promo_applied = true;
       }else if(this.storage.coupon_detail.promocode_type == 'percentage'){
         this.promo_code_text = this.price_symbol  +this.storage.coupon_detail.promocode_value+"% Off";
         this.promo_applied = true;
        }
      }else if(this.storage.coupon_detail.promocode_type == undefined){
       this.promo_applied = false;
       this.promo_code_text = '';
      }
    }





  }

  remove_count(index){
    if(this.cart_detail[index].cart_count !== 0){
     this.cart_detail[index].cart_count = this.cart_detail[index].cart_count - 1;
     this.cart_detail[index].qnty = this.cart_detail[index].qnty - 1;
     this.cart_detail[index].total = this.cart_detail[index].cart_count * this.cart_detail[index].prod_price;
    }
    if(this.cart_detail[index].qnty == 0){

      // this.toastr.warningToastr("are you sure you want to remove");
    }
    this.calculate_total();
   }

   add_count(index){
     if(this.cart_detail[index].cart_count >= 0){
       this.cart_detail[index].cart_count = this.cart_detail[index].cart_count + 1;
       this.cart_detail[index].qnty = this.cart_detail[index].qnty + 1;
       this.cart_detail[index].total = this.cart_detail[index].cart_count * this.cart_detail[index].prod_price;
      }
      this.calculate_total();
   }


   add_to_cart(data){
      var check = 0;
      this.cart_detail.forEach(element => {
        if(element.prod_id == data.prod_id){
            element.qnty = element.qnty + 1;
            element.cart_count =  element.cart_count + 1;
            element.total = element.qnty * element.prod_price;
            check = 1;
        }
      });
      if(check == 0){
        data.qnty = 1;
        data.cart_count = 1;
        data.total = data.cart_count * data.prod_price;
        this.cart_detail.push(data);
      }
      this.storage.cart_detail = this.cart_detail;
   }


   calculate_total(){
    this.vocher_value = 0;
    this.sub_total = 0;
    this.cart_detail.forEach(element => {
      this.sub_total = this.sub_total + element.total;
    });
    if(this.promo_applied == true){
      if(this.storage.coupon_detail.promocode_type == 'amount'){
      this.vocher_value = this.storage.coupon_detail.promocode_value;
      }else if(this.storage.coupon_detail.promocode_type == 'percentage'){
       this.vocher_value = Math.floor(this.sub_total * this.storage.coupon_detail.promocode_value/100);
      }
    }
    this.delivery_fee = 0;
    this.inc_service = Math.floor(this.sub_total * 7.5/100);
    this.processing_fee = Math.floor(this.sub_total * 7.5/100);
    console.log(this.storage.user_location);
    let distnaces = Math.round(this.distance(this.storage.shop_detail.location_lat,this.storage.shop_detail.location_lng,this.storage.user_location.lat,this.storage.user_location.lng,'K'));
    console.log(distnaces);
    this.distance_km = distnaces;

    let delivery_cash = 0;
    if(this.shop_detail.p_country_name == 'INDIA'){
      delivery_cash = 10;
     } else {
      delivery_cash = 1.5;
     }
    this.delivery_fee = Math.round(distnaces * delivery_cash);
    let time  = (this.distance_km * 9) / 60;
    this.delivery_time = ""+time+ " Hrs";
    if(time <= 1) {
      this.delivery_time = ""+(this.distance_km * 9) + " Mins";
    }
    if(this.distance_km > 25){
      this.show_msg('Warning','Delivery location is not acceptable with your order! Please choose others.');
      this.storage.routes_text = '/cartpage';
      this.move_to_link = '/change_location';
    }
    if(this.distance_km > 5 && this.distance_km < 25){
      this.show_msg('Warning','Delivery fee may vary with this location');
      this.move_to_link = '';
    }
    this.over_all_total = this.sub_total + this.delivery_fee + this.processing_fee + this.inc_service - this.vocher_value ;
    this.check_coupon_code();
  }

   view_available_promo(){
    this.storage.routes_text = '/cartpage';
    this.router.navigate(['/promocode_list']);
   }

   payment_method(){
    if(this.storage.user == undefined){
      this.storage.routes_text = '/cartpage';
      this.router.navigate(['/auth/login']);
    }else{
      this.storage.datas = {
        type:this.contactless_status,
        amount :this.over_all_total,
        payment_type:"Yummy Pay"
       };
      this.storage.routes_text = '/cartpage';
      this.router.navigate(['/payment_method/'+this.contactless_status]);
    }





   }

   remove_promocode(){
    this.storage.coupon_detail = undefined;
    this.promo_code_text = '';
    this.promo_applied = false;
    this.calculate_total();
      this.storage.coupon_detail = {};
      this.promo_applied = false;
      this.promo_code_text = '';
   }


   back_action(){
    this.router.navigate([this.storage.routes_text]);
   }


   change_location(){
    this.storage.routes_text = '/cartpage';
    this.router.navigate(['/change_location']);
   }


   contactless(data){
     console.log(data);
     this.contactless_status = data;
     if(data == true){
     let temp =  this.storage.datas;
     temp.payment_type = "Yummy Pay";
     console.log(temp);
     this.storage.datas = temp;
     this.payment_type = this.storage.datas.payment_type;
     console.log(this.storage.datas);

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


placeorder(){
  let qnty = 0;
  this.cart_detail.forEach(element => {
    qnty = qnty + element.cart_count
  });
  let merchant_location = {
    mer_lat : this.shop_detail.location_lat,
    mer_long : this.shop_detail.location_lng,
    mer_address : this.shop_detail.profile_address,
    mer_profile : this.shop_detail.profile_location
   }
let a  = {
order_quantity : this.cart_detail.length,
order_amount: this.over_all_total,
order_date: ""+new Date(),
order_status: "Booked",
order_detail: JSON.stringify(this.cart_detail),
order_customer_id: this.storage.user.user_id,
order_customer_remarks: "",
order_trans_id: ""+new Date().getTime()+"_"+this.storage.user.user_id+"_"+this.shop_detail.profile_id,
order_merchant_id: this.shop_detail.profile_id,
order_merchant_status: "Not Accepted",
order_merchant_remarks: "",
order_coupon_applied: ""+this.promo_applied,
order_coupon: ""+this.promo_code_text,
order_coupon_amount: ""+this.vocher_value,
order_without_amount: ""+this.sub_total,
order_trans_type: ""+this.storage.datas.payment_type,
order_trans_amount: ""+this.over_all_total,
order_driver_id: 9,
order_driver_status: "",
order_driver_pickup_time: "",
order_driver_deliver_time: "",
order_driver_remarks: "",
order_location : JSON.stringify(this.user_location),
distance : this.distance_km,
merchant_location : JSON.stringify(merchant_location),
  }
this.service.new_orderdetail(a).subscribe((response:any) => {
this.show_msg('Successful','order placed successfully');
this.move_to_link = '/client-home';
// this.toastr.successToastr('order placed successfully');

}, err => {
  console.log(err);
  this.show_msg('Warning','Something went wrong, pls try again later');
  // this.toastr.warningToastr('Something went wrong, pls try again later');
});
}



startTimer() {
  if(this.storage.user == undefined){
    this.storage.routes_text = '/cartpage';
    this.router.navigate(['/auth/login']);
  }if(this.distance_km > 5 && this.distance_km < 25){
    this.show_msg('Warning','Delivery fee may vary with this location');
    this.move_to_link = 'one time warning';
  }
  else{
    this.check_status2()
  }
}

check_status2(){
  if(this.storage.datas.payment_type == "Yummy Pay"){
    console.log(this.yummy_pay_amount);
    if(this.yummy_pay_amount < this.over_all_total){
      this.show_msg('Warning','Your Yummy saver credit is too low for this order!');
      this.move_to_link = 'payment_method';
    }else{
      this.call_timer();
    }
  }else{
     this.call_timer();
  }
}

call_timer(){
  this.addtocart_visible = true;
  this.interval = setInterval(() => {
    if(this.timeLeft > 0) {
      this.timeLeft--;
    } else {
      this.placeorder();
      clearInterval(this.interval);
    }
  },1000)
}


cancel_button(){
this.addtocart_visible = false;
clearInterval(this.interval);
this.timeLeft = 5;
}

check_yummy_pay_amount(){
  this.service.fetch_transction(this.storage.user).subscribe((res:any) => {
    for(let a = 0 ;a < res.rows.length; a ++){
      if(res.rows[a].trans_type == 'Add Fund'){
        this.yummy_pay_amount = this.yummy_pay_amount + res.rows[a].amount;
      }else if(res.rows[a].trans_type == 'Paid'){
        this.yummy_pay_amount = this.yummy_pay_amount - res.rows[a].amount;
      }
    }
    });
}





show_msg(title,msg){
  this.msg_show = true;
  this.msg_title = title;
  this.msg_text = msg;
}
hide_msg(){
  this.msg_show = false;
  this.msg_title = '';
  this.msg_text = '';
}


click_action(){
  console.log(this.move_to_link);
 if(this.move_to_link == '/change_location'){
  this.storage.routes_text = '/cartpage';
  this.router.navigate(['/change_location']);
 }else if(this.move_to_link == '/client-home') {
  this.storage.cart_detail = [];
  this.storage.routes_text = '/client-home';
  this.router.navigate(['/client-home']);
 }else if(this.move_to_link == 'payment_method') {
  this.storage.datas = {
    type:this.contactless_status,
    amount :this.over_all_total,
    payment_type:"Yummy Pay"
   };
  this.storage.routes_text = '/cartpage';
  this.router.navigate(['/payment_method/'+this.contactless_status]);
 }
 else if(this.move_to_link == 'one time warning'){
  this.check_status2();
  this.hide_msg();
}
 else if(this.move_to_link == ''){
   this.hide_msg();
 }

}


}
