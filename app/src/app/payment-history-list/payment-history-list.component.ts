import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City_list } from '../../assets/xlsxtojson'
import { LocalStorage } from 'src/_core/_data/localstorage';
import { CommonService } from 'src/_core/services/common.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Input , OnChanges , Output , EventEmitter} from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-payment-history-list',
  templateUrl: './payment-history-list.component.html',
  styleUrls: ['./payment-history-list.component.scss'],
})
export class PaymentHistoryListComponent {
  // Some array of things.
  public employeedata = [];
  temp_data = [];
  // Pagination parameters.
  p: Number = 1;
  count: Number = 5;

  start_date = '';
  end_date = '';

  constructor(private StatusBar : StatusBar,public toastr: ToastrManager,private router: Router,public City_list : City_list,private storage: LocalStorage,private service: CommonService) {

    this.StatusBar.show();
    this.StatusBar.backgroundColorByHexString('#fec429');
    this.StatusBar.styleDefault();



      this.service.fetch_yummysaver(this.storage.user).subscribe((res:any) => {
        res.rows.forEach(element => {
          if(element.yummysave_type == 'Add Fund'){
          let con = {
            img : "../../assets/yummy-logo-black.png",
            type : "Add Fund",
            title : element.yummysave_title,
            order_id : "",
            date : element.createdAt,
            status : "Completed",
            amount : element.amount,
            amount_type : "Add",
            view_status : false
          }
          this.employeedata.push(con);
          this.temp_data.push(con);
        }
        if(element.yummysave_type == 'Refund'){
          let con = {
            img : "../../assets/yummy-logo-black.png",
            type : "Refund",
            title : "Refund",
            order_id : "Refund",
            date : element.createdAt,
            status : ""+element.yummysave_refund_reason,
            amount : element.yummysave_amount,
            amount_type : "Sub",
            view_status : false
          }
          this.employeedata.push(con);
          this.temp_data.push(con);
        }
        });
      console.log(this.employeedata);
      });
  }


  back_action(){
    this.router.navigate([this.storage.routes_text]);
  }


  filter(){
   this.employeedata = [];
   console.log(this.start_date,this.end_date);
   for(let a = 0 ; a < this.temp_data.length ; a++){
    if (new Date(this.temp_data[a].date) > new Date(this.start_date) && new Date(this.temp_data[a].date) < new Date(this.end_date)) {
      console.log("true");
      this.employeedata.push(this.temp_data[a]);
    }
   }
  }


  clear_trans_staust_2(index){
    this.employeedata.forEach(element => {
      element.view_status = false;
    });
    this.employeedata[index].view_status = true;
  }
}
