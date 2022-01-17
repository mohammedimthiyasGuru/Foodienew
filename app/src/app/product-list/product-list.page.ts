import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../_core/services/auth.service';
import { LocalStorage } from '../../_core/_data/localstorage';
import { CommonService } from '../../_core/services/common.service';
import { authConfig } from 'src/_core/configs/property.config';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Location } from '@angular/common'
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private storage: LocalStorage,
    private service: CommonService,
    public toastr: ToastrManager,
    private StatusBar : StatusBar,
  ) {
    this.StatusBar.overlaysWebView(true);
    // this.StatusBar.styleBlackTranslucent();
    // window.location.reload();
   }

  product_detail : any;
  // product_index : any;
  Rec_Product_list: any;
  Over_Product: any = [];
  Cart_data: any = [];

  rating_list : any = [];

  _merchantId: number;
  shop_detail : any;
  cart_display : boolean = false;
  Item_count = 0;
  Total_price = 0;

  fav_status = false;

  /////new Code/////
  cat_list = [];
  promocode_list = [];
  list_title = '';
  cat_index = 0;
  prod_list = [];
  product_index = 0;
  product_details : any;
  addtocart_visible = false;
  page_name = 'Product';
  visible_desc_list = true;
  visible_rate_list = true;
  cart_detail = [];
  grand_total = 0;

  over_all_product_details = [];
  product_list = [];

  promocode_title = '';
  promocode_desc = 'No Promo code Available';
  promocode_type = '';

  promocode_index = 0;

  last_merchant_id = 0;



  ////Timer

  timeLeft: number = 59;
  interval;
  timer_value_min = 15;
  timer_value_sec = 0;
  promo_code_detail : any;
  promo_balance_amount = 0;


  notification_count = 0;
  notification_status = true;
  ntotification_unread = [];
  price_symbol = 'RM '



  msg_show = false;
  msg_title = '';
  msg_text = '';

  check_last_merchant = true;




  ngOnInit() {
    // this.storage.routes_text = '/business';
    this.shop_detail = this.storage.shop_detail;
    console.log(this.shop_detail);
    console.log(this.storage.cart_detail);
    if(!this.storage.cart_detail){
      this.storage.cart_detail = [];
    }
    if(this.storage.cart_detail.length == 0){
      this.last_merchant_id = this.shop_detail.profile_id;
    }else{
      this.cart_detail = this.storage.cart_detail;
      this.last_merchant_id = this.cart_detail[0].profile_id;
      this.cart_detail.forEach(element => {
        this.grand_total = this.grand_total + element.total;
      });
    }
    console.log(this.check_last_merchant);
    if(this.shop_detail.p_country_name == 'INDIA'){
      this.price_symbol = 'Rs ' ;
     } else if(this.shop_detail.p_country_name == 'SINGAPORE') {
       this.price_symbol = 'RM ' ;
     } else {
       this.price_symbol = '$ ' ;
     }
    console.log(this.shop_detail);
    this._merchantId = this.shop_detail.profile_id;
    this.service.new_merchantCat(this._merchantId).subscribe((res:any) => {
     res.rows.forEach(element => {
       element.select_status = false;
     });
     this.cat_list = res.rows;
     this.cat_select(this.cat_list[0],0);
    });

    this.service.new_merchantProducts_all(this._merchantId).subscribe((res:any) => {
      this.over_all_product_details = res.rows;
      console.log(this.over_all_product_details);
        res.rows.forEach(element => {
          console.log(element);
        element.prod_desc = JSON.parse(element.prod_desc);
        element.prod_img = JSON.parse(element.prod_img);
        if(element.prod_img.length != 0){
          element.prod_img = element.prod_img[0].image_path;
        }else{
          element.prod_img = '';
        }
        element.cart_count = 1;
        element.instruction = '';
        element.qnty = 0;
        element.total = 0;
      });
      this.prod_list = [];
      this.prod_list = res.rows;
      console.log(this.prod_list);

     });

    console.log(this._merchantId);
    this.service.new_promocode(this._merchantId).subscribe((res:any) => {
      this.promocode_list = res.rows;
      console.log(this.promocode_list);
      if(this.promocode_list.length !== 0){
        this.promocode_title = this.promocode_list[this.promocode_list.length - 1].promocode_value;
        this.promocode_desc = "Max need to purchase "+this.promocode_list[this.promocode_list.length - 1].promocode_mini_value;
        this.promocode_type = this.promocode_list[this.promocode_list.length - 1].promocode_type;
      }
     });


     this.list_notification();
    // this.product_detail = this.storage.product_detail.data;
    // this.product_index = this.storage.product_detail.index;
    // console.log("Product Detail",this.product_detail);
    // console.log("Product Index",this.product_index);
    this.getProductsList();
    this.check_cart_count();
    this.startTimer();

    if(this.storage.user !== undefined){
      this.fetch_fav_by_merchant();
    }


  }


  cat_select(data,index){
    console.log(data);
    if(this.cat_list.length !== 0){
      this.cat_list.forEach(element => {
        element.select_status = false;
      });
      this.cat_list[index].select_status = true;
      this.list_title = data.cat_name;
      this.cat_index = data.cat_id;
    }

    // this.service.new_merchantProducts_all(this._merchantId).subscribe((res:any) => {
    // res.rows.forEach(element => {
    //   element.prod_desc = JSON.parse(element.prod_desc);
    //   element.prod_img = JSON.parse(element.prod_img);
    //   if(element.prod_img.length != 0){
    //     element.prod_img = element.prod_img[0].image_path;
    //   }else{
    //     element.prod_img = '';
    //   }
    //   element.cart_count = 0;
    //   element.instruction = '';
    //   element.qnty = 0;
    //   element.total = 0;
    // });
    // this.prod_list = [];
    // this.prod_list = res.rows;
    // });

  }

  view_product_details(data,index){



   this.product_details = data;
   this.addtocart_visible = true;
   this.product_index = index;
  }


  view_product_details_one(data,index){
    this.product_details = data;
    this.page_name = 'Product_desc';
    this.product_index = index;
    this.visible_desc_list = true;
    this.visible_rate_list = false;
   }

   visible_instruction(){
    this.page_name = 'Special_ins';
    this.addtocart_visible = false;
   }

   hide_instruction(){
    this.page_name = 'Product';
    this.addtocart_visible = true;
   }

   back(){
    this.addtocart_visible = false;

   }

   show_product_detail(){
    this.visible_desc_list = true;
    this.visible_rate_list = false;
   }
   hide_product_detail(){
    this.visible_desc_list = false;
    this.visible_rate_list = true;
    this.fetch_product_rating();
   }

  remove_count(){
   if(this.prod_list[this.product_index].cart_count !== 0){
    this.prod_list[this.product_index].cart_count = this.prod_list[this.product_index].cart_count - 1;
   }
  }

  add_count(){
    // if(this.storage.user == undefined){
    //   this.toastr.warningToastr("please login to add the product");
    // }else{
    if(this.prod_list[this.product_index].cart_count >= 0){
      this.prod_list[this.product_index].cart_count = this.prod_list[this.product_index].cart_count + 1;
     }
    // }
  }



   new_add_to_cart(){

    console.log("Item Added");
    console.log(this.storage.user);
    console.log(this.storage.cart_detail);
    console.log(this.product_details);

    // if(this.storage.user == undefined){
    //   this.toastr.warningToastr("please login to add the product");
    // }
    // else{
    console.log(this.last_merchant_id,this.product_details.profile_id);
    if(this.last_merchant_id !== this.product_details.profile_id){
     this.msg_show = true;
     this.msg_title = 'warning';
     this.msg_text = 'If you want to remove the existing item from you cart';
    }else{
    this.grand_total = 0;
    if(this.cart_detail.length == 0){
      this.product_details.qnty = this.product_details.cart_count;
      this.product_details.total = this.product_details.cart_count * this.product_details.prod_price;
      this.grand_total = this.grand_total + this.product_details.total;
      this.cart_detail.push(this.product_details);
    } else
    {
      var check = 0;
      this.cart_detail.forEach(element => {
        if(element.prod_id == this.product_details.prod_id){
            element.qnty = this.product_details.cart_count;
            element.total = element.qnty * element.prod_price;
            check = 1;
            this.grand_total = this.grand_total + element.total;
        }
      });
      if(check == 0){
        this.product_details.qnty = this.product_details.cart_count;
        this.product_details.total = this.product_details.cart_count * this.product_details.prod_price;
        this.grand_total = this.grand_total + this.product_details.total;
        this.cart_detail.push(this.product_details);
      }
    }

    console.log(this.cart_detail.length);
    this.storage.cart_detail = this.cart_detail;
    this.page_name = 'Product';
    this.back();
    this.check_promo_code();
  // }
   }
}


  getProductsList() {
    this.Rec_Product_list = [];
    this.Over_Product = [];
    this.service.merchantProducts(this._merchantId).subscribe(res => {
      let prod_tem = res.rows;
      for (let a = 0; a < prod_tem.length; a++) {
        let c = {
          rec_cat_id: prod_tem[a].cat_id,
          rec_category: prod_tem[a].category,
          rec_createdAt: prod_tem[a].createdAt,
          rec_created_by: prod_tem[a].created_by,
          rec_prod_avail_time: prod_tem[a].prod_avail_time,
          rec_prod_desc: prod_tem[a].prod_desc,
          prod_id: prod_tem[a].prod_id,
          rec_prod_img: prod_tem[a].prod_img,
          rec_prod_name: prod_tem[a].prod_name,
          rec_prod_price: prod_tem[a].prod_price,
          rec_commission_amount: prod_tem[a].commission_amount,
          rec_mercant_price: prod_tem[a].mercant_price,
          rec_prod_status: prod_tem[a].prod_status,
          rec_profile_id: prod_tem[a].profile_id,
          rec_count_status: false,
          rec_count: 0,
        };
        this.Rec_Product_list.push(c);
        this.Over_Product.push(c);
      }
    });
  }

  fetch_recommended_list() {
    this.service.merchantProducts(this._merchantId).subscribe(res => {
      let prod_tem = res.rows;
      this.Rec_Product_list = [];
      for (let a = 0; a < prod_tem.length; a++) {
        let c = {
          rec_cat_id: prod_tem[a].cat_id,
          rec_category: prod_tem[a].category,
          rec_createdAt: prod_tem[a].createdAt,
          rec_created_by: prod_tem[a].created_by,
          rec_prod_avail_time: prod_tem[a].prod_avail_time,
          rec_prod_desc: prod_tem[a].prod_desc,
          prod_id: prod_tem[a].prod_id,
          rec_prod_img: prod_tem[a].prod_img,
          rec_prod_name: prod_tem[a].prod_name,
          rec_prod_price: prod_tem[a].prod_price,
          rec_prod_status: prod_tem[a].prod_status,
          rec_profile_id: prod_tem[a].profile_id,
          rec_count_status: false,
          rec_count: 0,
        };
        this.Rec_Product_list.push(c);
      }
    });
  }

  fetch_over_all_list() {
    this.service.merchantProducts(this._merchantId).subscribe(res => {
      let prod_tem = res.rows;
      this.Over_Product = [];
      for (let a = 0; a < prod_tem.length; a++) {
        let c = {
          rec_cat_id: prod_tem[a].cat_id,
          rec_category: prod_tem[a].category,
          rec_createdAt: prod_tem[a].createdAt,
          rec_created_by: prod_tem[a].created_by,
          rec_prod_avail_time: prod_tem[a].prod_avail_time,
          rec_prod_desc: prod_tem[a].prod_desc,
          prod_id: prod_tem[a].prod_id,
          rec_prod_img: prod_tem[a].prod_img,
          rec_prod_name: prod_tem[a].prod_name,
          rec_prod_price: prod_tem[a].prod_price,
          rec_prod_status: prod_tem[a].prod_status,
          rec_profile_id: prod_tem[a].profile_id,
          rec_count_status: false,
          rec_count: 0,
        };
        this.Over_Product.push(c);
      }
    });
  }


  //////Add to cart Recommended Function///////

  Rec_change_countstatus(data, index) {
    this.Rec_Product_list[index].rec_count_status = true;
    this.Rec_Product_list[index].rec_count = 1;
    this.add_to_cart(this.Rec_Product_list[index].prod_id, data, 1);
    this.check_cart_count();
  }

  Rec_item_add(data, index) {
    let temp_count = data.rec_count + 1;
    this.Rec_Product_list[index].rec_count = temp_count;
    this.add_to_cart(this.Rec_Product_list[index].prod_id, data, temp_count);
    this.check_cart_count();
  }

  Rec_item_remove(data, index) {
    let temp_count = data.rec_count - 1;
    this.Rec_Product_list[index].rec_count = temp_count;
    if (temp_count == 0) {
      this.Rec_Product_list[index].rec_count_status = false;
    }
    this.add_to_cart(this.Rec_Product_list[index].prod_id, data, temp_count);
    this.check_cart_count();
  }

  //////End Add to cart Recommended Function///////




  //////Add to cart Product Function///////

  pro_item_add(data, index) {
    let temp_count = data.rec_count + 1;
    this.Over_Product[index].rec_count = temp_count;
    this.add_to_cart(this.Over_Product[index].prod_id, data, temp_count);
    this.check_cart_count();

  }

  pro_item_remove(data, index) {
    let temp_count = data.rec_count - 1;
    this.Over_Product[index].rec_count = temp_count;
    if (temp_count == 0) {
      this.Over_Product[index].rec_count_status = false;
    }
    this.add_to_cart(this.Over_Product[index].prod_id, data, temp_count);
    this.check_cart_count();
  }

  pro_change_countstatus(data, index) {
    this.Over_Product[index].rec_count_status = true;
    this.Over_Product[index].rec_count = 1;
    this.add_to_cart(this.Over_Product[index].prod_id, data, 1);
    this.check_cart_count();
  }




  add_to_cart(prod_id, product_data, count) {
    if (this.Cart_data.length == 0) {
      this.Cart_data.push(product_data);
      this.storage.cart = this.Cart_data;
    } else {
      for (let a = 0; a < this.Cart_data.length; a++) {
        if (this.Cart_data[a].prod_id == prod_id) {
          this.Cart_data.splice(a, 1);
        }
      }
      if (count !== 0) {
        this.Cart_data.push(product_data);
      }
      this.storage.cart = this.Cart_data;
    }
  }


  check_cart_count(){
    this.Total_price = 0;
    if(this.Cart_data.length == 0){
      this.cart_display = false
    } else {
      this.cart_display = true
      for(let a = 0; a < this.Cart_data.length ; a ++){
        this.Total_price = this.Total_price + (this.Cart_data[a].rec_prod_price * this.Cart_data[a].rec_count)
      }
      this.Item_count = this.Cart_data.length;
    }
  }


  view_cart(){
    let user = this.storage.user;
    if(!user){
      this.storage.routes_text = '/products' ;
      this.router.navigateByUrl('/auth/login');
    }else {
      this.router.navigateByUrl('/my-cart');
    }
  }


  main_order(data,index){
    this.product_detail.rec_count = this.product_detail.rec_count + 1;
    this.Over_Product[index].rec_count = this.product_detail.rec_count;
    this.add_to_cart(this.Over_Product[index].prod_id, data,  this.product_detail.rec_count);
    this.check_cart_count();
  }


  main_add(data, index) {
    this.product_detail.rec_count = this.product_detail.rec_count + 1;
    this.Over_Product[index].rec_count = this.product_detail.rec_count;
    this.add_to_cart(this.Over_Product[index].prod_id, data,  this.product_detail.rec_count);
    this.check_cart_count();
  }

  main_remove(data,index){
    this.product_detail.rec_count = this.product_detail.rec_count - 1;
    this.Over_Product[index].rec_count = this.product_detail.rec_count;
    this.add_to_cart(this.Over_Product[index].prod_id, data,  this.product_detail.rec_count);
    this.check_cart_count();
  }


  startTimer() {
    if(this.timer_value_min > 0){
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.timer_value_sec = this.timeLeft;
      } else {
        this.timer_value_sec = this.timeLeft;
        this.pauseTimer();
      }
    },1000)
    }else{
      clearInterval(this.interval);
    }
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.timeLeft = 59;
    this.timer_value_min = this.timer_value_min - 1;
    this.startTimer();
  }



  check_promo_code(){
    if(this.promocode_list.length == 0){
    } else {
      for(let a = 0 ; a < this.promocode_list.length ; a ++ ){
         if(this.promocode_list.length == 1){
           this.promo_code_detail = this.promocode_list[a];
           this.promo_balance_amount = this.promocode_list[a].promocode_mini_value - this.grand_total;
           this.promocode_index = 1;
         } else{
          if(a == 0){
            if (this.grand_total < this.promocode_list[a].promocode_mini_value){
              this.promo_balance_amount = this.promocode_list[a].promocode_mini_value - this.grand_total;
              this.promo_code_detail = this.promocode_list[a];
              this.promocode_index = a;
            }
          }else{
            //  console.log(this.promocode_list[a - 1].promocode_mini_value, this.grand_total,this.promocode_list[a].promocode_mini_value);
            if (this.promocode_list[a - 1].promocode_mini_value < this.grand_total && this.grand_total < this.promocode_list[a].promocode_mini_value){
              // console.log('true');
              this.promo_balance_amount = this.promocode_list[a].promocode_mini_value - this.grand_total;
              this.promo_code_detail = this.promocode_list[a];
              this.promocode_index = a;
              a = this.promocode_list.length;
            }
          }
         }
         if(a == this.promocode_list.length - 1){
           console.log(this.promocode_list[a]);
          if(this.promocode_list[a].promocode_mini_value < this.grand_total){
             this.promo_balance_amount = 0;
             this.promocode_index = this.promocode_list.length;
             this.promo_code_detail = this.promocode_list[a];
          }
         }
      }
    }


  }




  view_your_cart(){
    console.log(this.promo_code_detail);
    if(this.promo_code_detail !== undefined){
      this.storage.cart_detail =  this.cart_detail;
      if(+this.promo_code_detail.promocode_mini_value < +this.grand_total){
        console.log("true");
        this.storage.coupon_detail = this.promo_code_detail;
      }else {
        console.log("false");
        this.storage.coupon_detail = {};
      }
      this.storage.routes_text = '/products';
      this.router.navigate(['/cartpage']);
    } else {
      this.storage.cart_detail =  this.cart_detail;
      this.storage.coupon_detail = {};
      this.storage.routes_text = '/products';
      this.router.navigate(['/cartpage']);
    }

  }


  list_notification(){
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
         console.log(err);
       });
    }
  }

  move_cart(){
    console.log(this.storage.cart_detail);
    let check_data = this.cart_detail;
    if(check_data == undefined){
     this.toastr.warningToastr('There is no product in the cart');
    }else if(check_data.length == 0){
     this.toastr.warningToastr('There is no product in the cart');
    }else {
     this.storage.routes_text = '/products';
      this.router.navigate(['/cartpage']);
    }
 }


 back_action(){
  // this.location.back();
  console.log(this.storage.routes_text);
  this.router.navigate([this.storage.routes_text]);
 }

 move_notification(){
  this.storage.routes_text = '/products';
  this.router.navigate(['/user_notification_list']);
}

fetch_fav_by_merchant(){
  console.log(this.shop_detail);
  let data= {
    customer_id : this.storage.user.profile_id,
    merchant_id : this.shop_detail.profile_id
  }
  this.service.fetch_merchant_fav(data).subscribe(response => {
  console.log(response);

  if(response == null){
    this.fav_status = false;
  }else{
    this.fav_status = true;
  }
  }, err => {
    console.log(err);
  });
}





remove_from_fav(){

  if(this.storage.user == undefined){
    this.toastr.warningToastr("please login to remove favorite");
  }else{
  let a = {
    customer_id : this.storage.user.profile_id,
    merchant_id : this.shop_detail.profile_id
  }
  this.service.delete_fav(a).subscribe((response:any) => {
    this.toastr.successToastr(response.message);
    this.fav_status = false;
  }, err => {
  });
}
}


add_to_fav(){

  if(this.storage.user == undefined){
    this.toastr.warningToastr("please login to save favorite");
  }else{
  let user_details = this.storage.user;
  console.log(user_details);
  if(user_details){
    let a = {
    customer : this.storage.user.profile_id,
    merchant : this.shop_detail.profile_id
    }
    console.log(a);
    this.service.add_fav(a).subscribe(response => {
      this.toastr.successToastr("Added to favorite");
      this.fav_status = true;
    }, err => {
      this.toastr.warningToastr(err.message);
    });
  }else{
    this.toastr.warningToastr("please login to save favorite");
  }
}
}


fetch_product_rating(){
  console.log(this.product_details);
  let a = {
    pr_product_id : this.product_details.prod_id,
    pr_merchant_id : this._merchantId
  }
  this.service.fetch_product_rating(a).subscribe((response:any) => {
   console.log(response)
   this.rating_list =  response.rows;
    }, err => {
    });
}

click_action(){
  this.storage.cart_detail = [];
  this.cart_detail = [];
  this.hide_msg();
  this.ngOnInit();
}



hide_msg(){
  this.msg_show = false;
  this.msg_title = '';
  this.msg_text = '';

}





}
