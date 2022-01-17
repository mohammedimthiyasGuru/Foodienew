import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../_core/services/auth.service';
import { LocalStorage } from '../../_core/_data/localstorage';
import { CommonService } from '../../_core/services/common.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { authConfig } from 'src/_core/configs/property.config';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  temp_data : any;
  popup : any;
  loader :boolean = true;
  products : any;
  constructor(
    private router: Router,
    private StatusBar : StatusBar,
    private toastr: ToastrManager,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private storage: LocalStorage,
    private service: CommonService,
    // private CustomerService: CustomerService,
  ) {
    this.StatusBar.show();
    this.StatusBar.backgroundColorByName('white');
    this.StatusBar.styleDefault();
   }

  ngOnInit() {
    let user = this.storage.user;
    if(user){
      let a = {
        customer_id  : user.user_id
      }
      this.service.list_fav(a).subscribe(response => {
        this.products = response.rows;
        if(response.count == 0){
          this.router.navigateByUrl('/fav-empty');
        }else{
          this.router.navigate(['/favourites']);
        }
        // this.merchants = response.rows;
        this.loader = false;
      });
    }







  }

  cancel_to_fav(){
    this.popup = false;
  }

  remove_to_fav(index,data){
    let c = {
      index : index,
      data : data
    }
    this.temp_data = c;
    this.popup = true;

  }


  selectShop(_shopId) {
    this.storage.shop_detail = _shopId;
    localStorage.setItem(authConfig.SELECTED_SHOP, _shopId.profile_id);
    this.router.navigate(['/all-offers']);
  }



  confirm_to_fav(){
    let c = this.temp_data;
     this.products[c.index].fav_status = false;
     this.popup = false;
     let user_details = this.storage.user;
     console.log(user_details);
     let a = {
       merchant_id: c.data.merchant,
       customer_id:  user_details.user_id,
     }
     console.log(a);
     this.service.delete_fav(a).subscribe((response:any) => {
       console.log(response);
       this.toastr.successToastr(response.message)
       this.ngOnInit();
     }, err => {
       console.log(err);
       this.toastr.warningToastr(err.message)
     });
   }


   back_action(){
    this.router.navigate([this.storage.routes_text]);
   }


}
