import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authConfig } from 'src/_core/configs/property.config';
import { CommonService } from 'src/_core/services/common.service';
import { LocalStorage } from 'src/_core/_data/localstorage';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.page.html',
  styleUrls: ['./orderhistory.page.scss'],
})
export class OrderhistoryPage implements OnInit {
  loader :boolean = true;
  user_details : any;
  page_visible : boolean = false;

  empty_basket_visible : boolean = false;
  history_list_visible : boolean = false;
  order_bucket_list : any ;



  constructor(
    private storage: LocalStorage,
    private router: Router,
    private service: CommonService
  ) { }

  ngOnInit() {

    this.user_details = this.storage.user;
    console.log(this.user_details);
    if(!this.user_details){
      this.page_visible = false;
      this.router.navigate(['/auth/login']);
      this.storage.routes_text = 'order_history';
    }else{
      this.page_visible = true;
      let a = {
        user_id : this.user_details.user_id
      }
      console.log(a);
      this.service.listuserhistory(a).subscribe(response => {
        console.log(response);
        if(response.count == 0){
          this.order_bucket_list = [];
          this.empty_basket_visible = true;
          this.history_list_visible = false;
        }else{
          this.order_bucket_list =  response.rows;
          this.empty_basket_visible = false;
          this.history_list_visible = true;
        }
       this.loader = false;
      });
    }

  }

}
