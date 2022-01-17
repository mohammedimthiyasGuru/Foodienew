import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../../_core/_data/localstorage';
import { CommonService } from '../../_core/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { authConfig } from 'src/_core/configs/property.config';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.page.html',
  styleUrls: ['./my-order.page.scss'],
})
export class MyOrderPage implements OnInit {

  Cart_page: any;
  Sub_total: number = 0;
  Grand_total: number = 0;
  Local_data: any;
  location : any;

  OrderSuccessMessage : boolean = false;
  OrderFailureMessage : boolean = false;



  constructor(
    private storage: LocalStorage,
    private service: CommonService,
    private router: Router,
  ) {

    let user = this.storage.user;
    this.location = this.storage.user_location;
    if(!user){
      this.router.navigateByUrl('/auth/login');
    } else {
    this.Local_data = this.storage.cart;
    let temp = this.Local_data;
    if (temp) {
      console.log(temp.length);
      if(temp.length == 0){
        this.router.navigateByUrl('/client-home');
      }else{

      this.Cart_page = [];
      for (let a = 0; a < temp.length; a++) {
        let c = {
          prod_id: temp[a].prod_id,
          rec_cat_id: temp[a].rec_cat_id,
          rec_category: temp[a].rec_category,
          rec_count: temp[a].rec_count,
          rec_count_status: temp[a].rec_count_status,
          rec_createdAt: temp[a].rec_createdAt,
          rec_created_by: temp[a].rec_created_by,
          rec_prod_avail_time: temp[a].rec_prod_avail_time,
          rec_prod_desc: temp[a].rec_prod_desc,
          rec_prod_img: temp[a].rec_prod_img,
          rec_prod_name: temp[a].rec_prod_name,
          rec_prod_price: temp[a].rec_prod_price,
          rec_commission_amount: temp[a].rec_commission_amount,
          rec_mercant_price: temp[a].rec_mercant_price,
          rec_prod_status: temp[a].rec_prod_status,
          rec_profile_id: temp[a].rec_profile_id,
          rec_total_price: temp[a].rec_prod_price * temp[a].rec_count,
          rec_commission_total : temp[a].rec_commission_amount * temp[a].rec_count,
          rec_merchant_total : temp[a].rec_mercant_price * temp[a].rec_count,
        }
        this.Cart_page.push(c);
        this.Sub_total = this.Sub_total + c.rec_total_price;
      }

    }
    }
    else {
      this.router.navigateByUrl('/client-home');
    }

    }



  }

  ngOnInit() {
    this.Grand_total = this.Sub_total;
  }

  click(){
    this.storage.footer_text = "PRODUCTS";
    this.router.navigateByUrl('/order_history');
  }


  calculate_price() {
    let temp = this.Cart_page;
    this.Sub_total = 0;
    this.Grand_total = 0;
    this.Cart_page = [];
    for (let a = 0; a < temp.length; a++) {
      let c = {
        prod_id: temp[a].prod_id,
        rec_cat_id: temp[a].rec_cat_id,
        rec_category: temp[a].rec_category,
        rec_count: temp[a].rec_count,
        rec_count_status: temp[a].rec_count_status,
        rec_createdAt: temp[a].rec_createdAt,
        rec_created_by: temp[a].rec_created_by,
        rec_prod_avail_time: temp[a].rec_prod_avail_time,
        rec_prod_desc: temp[a].rec_prod_desc,
        rec_prod_img: temp[a].rec_prod_img,
        rec_prod_name: temp[a].rec_prod_name,
        rec_prod_price: temp[a].rec_prod_price,

        rec_commission_amount: temp[a].rec_commission_amount,
        rec_mercant_price: temp[a].rec_mercant_price,


        rec_prod_status: temp[a].rec_prod_status,
        rec_profile_id: temp[a].rec_profile_id,
        rec_total_price: temp[a].rec_prod_price * temp[a].rec_count,

        rec_commission_total : temp[a].rec_commission_amount * temp[a].rec_count,
        rec_merchant_total : temp[a].rec_mercant_price * temp[a].rec_count,
      }
      this.Cart_page.push(c);
      this.Sub_total = this.Sub_total + c.rec_total_price;
    }
    this.Grand_total = this.Sub_total;
  }


  //////Add to cart  Function///////


  Rec_item_add(data, index) {
    let temp_count = data.rec_count + 1;
    this.Cart_page[index].rec_count = temp_count;
    this.calculate_price();
  }

  Rec_item_remove(data, index) {
    let temp_count = data.rec_count - 1;
    this.Cart_page[index].rec_count = temp_count;
    if (temp_count == 0) {
      this.Cart_page.splice(index, 1);
    }
    this.calculate_price();
  }

  placeorder() {
    let user = this.storage.user;
    let items = [];
    this.Cart_page.forEach(cart => {
      items.push({
        prod_id: cart.prod_id,
        prod_qty: cart.rec_count,
        prod_price: cart.rec_prod_price,
        commission_amount : cart.rec_commission_amount,
        mercant_price : cart.rec_mercant_price,
        total_price: cart.rec_total_price,
        commission_amount_total : cart.rec_commission_total,
        mercant_price_total : cart.rec_merchant_total,
      })
    });


    let order = {
      order_location: "Chennai",
      merchant: Number(localStorage.getItem(authConfig.SELECTED_SHOP)),
      customer: user.profile_id,
      items: items
    }

    this.service.place_order(order).subscribe(res => {
      this.storage.cart = [];
      this.OrderSuccessMessage = true;
    });
  }

  success(){
    this.router.navigateByUrl('/client-home');
  }

}
