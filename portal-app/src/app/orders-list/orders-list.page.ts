import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../_core/services/order.service';
import { LocalStorage } from '../_core/_data/localstorage';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.page.html',
  styleUrls: ['./orders-list.page.scss'],
})
export class OrdersListPage implements OnInit {

  Seal_visible = false;
  cancel_visible = false;
  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 10;
  @Input() maxPages = 10;
  pager: any = {};

  corderslist = [];
  history_list = [];
  stage: string;
  title: string;
  alter_stage : string;
  rest_name : string;
  temp_data : string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storage: LocalStorage,
    private service: OrderService,
    statusBar: StatusBar
  ) {
    statusBar.styleDefault();
    statusBar.overlaysWebView(false);
    statusBar.styleDefault();
    statusBar.backgroundColorByName('white');
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.stage = params.orderstage;
      this.temp_data = params.orderstage;
    });
    this.loadData();
    console.log(this.storage.user.business_name);
    this.rest_name = this.storage.user.business_name;
  }

  ngOnDestroy() {
  }

  loadData() {
    var status = 'B';
    if (this.stage == 'received') {
      this.title = 'Received'
      status = 'B';
    } else if (this.stage == 'delivered') {
      this.title = 'Delivered'
      status = 'C';
    } else if (this.stage == 'approved') {
      this.title = 'Approved'
      status = 'A';
    } else if (this.stage == 'picked') {
      this.title = 'Picked'
      status = 'P';
    }
    let filter = {
      merchant_id: Number(this.storage.user.profile_id),
      order_status: status
    }
    console.log("filter",filter);
    this.service.list_merchant(filter).subscribe(res => {
      this.corderslist = res.rows;
      console.log('Orders -- ', this.corderslist);
      // this.corderslist.sort((a, b) => new Date(b.order_detail.updatedAt).getTime() - new Date(a.order_detail.updatedAt).getTime());
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
    });



    if(this.stage == "received"){
      this.alter_stage = "approved"
      this.fetch_history("A");
    }else if(this.stage == "approved"){
      this.alter_stage = "picked"
      this.fetch_history("P");
    }else if(this.stage == "picked"){
      this.alter_stage = "delivered"
      this.fetch_history("D");
    }else if(this.stage == "delivered"){
      this.alter_stage = "Cancelled"
      this.fetch_history("C");
    }






  }


  fetch_history(data){
    let filter = {
      merchant_id: Number(this.storage.user.profile_id),
      order_status: data
    }
    console.log("filter",filter);
    this.service.list_merchant(filter).subscribe(res => {
      this.history_list = res.rows;
      console.log('Orders -- ', this.history_list);
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
    });
  }

  updatestatus(_order, _status) {
    if(_status == 'A'){
      this.Seal_visible = true;
    }
    if(_status == 'C'){
      this.cancel_visible = true;
    }
    setTimeout(() => {
      this.service.update_status({
        order_status: _status,
        order_id: _order.order_id
      }).subscribe(res => {
        console.log('update status ', res);
        this.loadData();
        console.log("Update Successfully");
        this.Seal_visible = false;
        this.cancel_visible = false;
      }, err => {
        console.log('Error ', err);
        this.Seal_visible = false;
        this.cancel_visible = false;
      });
    }, 1500);
  }



  // updatestatus(data, order_detail) {

  //   console.log(data, order_detail.order_prods);
  //   order_detail = order_detail.order_detail;
  //  for(let a = 0 ; a < order_detail.order_prods.length; a++){
  //    let order_id = order_detail.order_prods[a].order_dtl_id;
  //    if (data == 'Accept') {
  //     let a = {
  //       order_dtl_status: "A",
  //       order_dtl_id: order_id
  //     }
  //     console.log(a);
  //     this.service.update_status(a).subscribe(res => {
  //       console.log("Update Successfully");
  //       // this.ngOnInit();
  //     }, err => {
  //     });
  //   }
  //   else if (data == 'Cancel') {
  //     let a = {
  //       order_dtl_status: "C",
  //       order_dtl_id: order_id
  //     }
  //     console.log(a);
  //     this.service.update_status(a).subscribe(res => {
  //       console.log("Update Successfully");
  //       // this.ngOnInit();
  //     }, err => {
  //     });
  //   }
  //   else if (data == 'Pick_Delivery') {
  //     let a = {
  //       order_dtl_status: "P",
  //       order_dtl_id: order_id
  //     }
  //     console.log(a);
  //     this.service.update_status(a).subscribe(res => {
  //       console.log("Update Successfully");
  //       // this.ngOnInit();
  //     }, err => {
  //     });
  //   }

  //   else if (data == 'Delivered') {
  //     let a = {
  //       order_dtl_status: "D",
  //       order_dtl_id: order_id
  //     }
  //     console.log(a);
  //     this.service.update_status(a).subscribe(res => {
  //       console.log("Update Successfully");
  //       // this.ngOnInit();
  //     }, err => {
  //     });
  //   }
  //   if(a == order_detail.order_prods.length - 1){
  //     this.loadData();
  //   }

  //  }

  // }


  history_action(data,status){
    this.stage = status;
    let filter = {
      merchant_id: Number(this.storage.user.profile_id),
      order_status: data
    }
    this.service.list_merchant(filter).subscribe(res => {
      this.corderslist = res.rows;
      console.log('Orders -- ', this.corderslist);
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
    });
  }

  action(data){
    this.router.navigateByUrl(data);
  }



}
