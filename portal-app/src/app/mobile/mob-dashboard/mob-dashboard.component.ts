import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../_core/services/order.service';
import { LocalStorage } from '../../_core/_data/localstorage';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-mob-dashboard',
  templateUrl: './mob-dashboard.component.html',
  styleUrls: ['./mob-dashboard.component.scss'],
})
export class MobDashboardComponent implements OnInit {

  corderslist = [];
  confirm_count: number = 0;
  prepare_count: number = 0;
  picked_count: number = 0;
  deliver_count: number = 0;

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
    this.storage.submenu = 'Dashboard';

    this.loadData();
  }

  loadData() {
    let filter = {
      merchant_id: Number(this.storage.user.profile_id)
    }
    this.service.list_merchant_status(filter).subscribe(res => {
      this.corderslist = res.rows;
      console.log(this.corderslist);

      this.count_cal();
    }, err => {
      console.log(err);
    });
  }

  count_cal() {
    this.confirm_count = 0;
    this.prepare_count = 0;
    this.deliver_count = 0;
    this.picked_count = 0;

    this.corderslist.forEach(order => {
      if (order.order_status == 'B') {
        this.confirm_count += Number(order.total_orders);
      }
      if (order.order_status == 'A') {
        this.prepare_count += Number(order.total_orders);
      }
      if (order.order_status == 'C') {
        this.deliver_count += Number(order.total_orders);
      }
      if (order.order_status == 'P') {
        this.picked_count += Number(order.total_orders);
      }
      // if (this.order.order_status == 'D') {
      //   this.deliver_count += Number(order.total_orders);
      // }
    })
  }



  action(data){
    this.router.navigateByUrl(data);
  }




}
