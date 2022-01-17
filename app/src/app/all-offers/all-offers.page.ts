import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorage } from '../../_core/_data/localstorage';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../_core/services/common.service';
import { authConfig } from 'src/_core/configs/property.config';
import { ToastrManager } from 'ng6-toastr-notifications';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.page.html',
  styleUrls: ['./all-offers.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AllOffersPage implements OnInit {

  _merchantId : any;
  shop_detail : any;
  location_detail : any;

  Over_Product : any;
  page_visible : boolean = false;

  Cart_data: any = [];

  cart_display : boolean = false;
  Item_count = 0;
  Total_price = 0;

  viewsummary = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storage: LocalStorage,
    private service: CommonService,
    private changeDetector: ChangeDetectorRef,
    public toastr: ToastrManager,
    private StatusBar : StatusBar,
  ) {


    this.StatusBar.show();
    this.StatusBar.backgroundColorByName('white');
    this.StatusBar.styleDefault();


  }

  ngOnInit() {
    console.log('all offer loaded');

    this._merchantId = Number(localStorage.getItem(authConfig.SELECTED_SHOP));
    this.shop_detail = this.storage.shop_detail;
    this.location_detail  = this.storage.user_location;
    console.log(this._merchantId,this.shop_detail,this.location_detail);
    this.getProductsList();
    this.check_cart_count();
    this.changeDetector.detectChanges();
  }

  viewSummary() {
    if (this.viewsummary) {
      this.viewsummary = false;
    } else {
      this.viewsummary = true;
    }
  }
  getProductsList() {
    this.Over_Product = [];
    this.service.merchantProducts(this._merchantId).subscribe(res => {
      let prod_tem = res.rows;
      if(prod_tem.length == 0){
        this.toastr.warningToastr("No product found, try any other restaurant")
      }
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
        this.Over_Product.push(c);
        this.page_visible = true;
      }
      this.changeDetector.detectChanges();
    });
  }

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
    console.log(this.Cart_data);

    if(this.Cart_data.length == 0){
      this.cart_display = false
    } else {
      this.cart_display = true
      for(let a = 0; a < this.Cart_data.length ; a ++){
        this.Total_price = this.Total_price + (this.Cart_data[a].rec_prod_price * this.Cart_data[a].rec_count)
      }
      this.Item_count = this.Cart_data.length;
      console.log(this.Total_price);
    }
  }


  view_cart(){
    let user = this.storage.user;
    console.log("User", user);
    if(!user){
      this.storage.routes_text = '/all-offers' ;
      this.router.navigateByUrl('/auth/login');
    }else {
      this.router.navigateByUrl('/my-cart');
    }
  }

  product_detail(data,indexs){
    console.log(data,indexs);
    let c = {
      data : data,
      index :indexs
    }
    this.storage.product_detail = c;
    this.router.navigateByUrl('/products');
  }

}
