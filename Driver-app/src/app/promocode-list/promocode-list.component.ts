import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../_core/services/auth.service';
import { LocalStorage } from '../../_core/_data/localstorage';
import { CommonService } from '../../_core/services/common.service';
import { authConfig } from 'src/_core/configs/property.config';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-promocode-list',
  templateUrl: './promocode-list.component.html',
  styleUrls: ['./promocode-list.component.scss'],
})
export class PromocodeListComponent implements OnInit {

  constructor( private router: Router,
    private route: ActivatedRoute,
    private storage: LocalStorage,
    public toastr: ToastrManager,
    private service: CommonService,) { }


    promocode_list  = [];
    cart_detail = [];
    sub_total = 0;


  ngOnInit() {
    this.service.new_promocode_list().subscribe((res:any) => {
      console.log(res);
      this.promocode_list = res.rows;
      var value = 0;
      this.promocode_list.forEach(element => {
        element.color = value;
        value = value + 1;
        if(value == 3){
          value = 0;
        }
      });
     });


  }



  collect_promo(data){
    this.cart_detail = this.storage.cart_detail;
    this.cart_detail.forEach(element => {
      this.sub_total = this.sub_total + element.total;
    });

    if(this.sub_total > data.promocode_mini_value){
      console.log(data);
      this.storage.coupon_detail = data;
      this.toastr.successToastr('Coupon Copied');
    }else{
      console.log(data);
      this.toastr.warningToastr("You must add the product for apply this coupon");
    }




  }

  back_to_Cart(){
    this.router.navigate(['/cartpage']);
  }

}
