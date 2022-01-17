import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City_list } from '../../assets/xlsxtojson'
import { LocalStorage } from 'src/_core/_data/localstorage';
import { CommonService } from 'src/_core/services/common.service';
import { ToastrManager } from 'ng6-toastr-notifications';

import * as moment from 'moment';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
})
export class PaymentMethodComponent implements OnInit {
  yummysaver = '';
  yummy_status = '';
  show_yummysaver = false;
  add_fund_show = false;
  show_transc_list = false;
  fund_amount = 0;
  transction_list = [];
  benefit_visible = false;
  benefit_text = '';

  yummy_saver_amount = 0;
  yummy_pay_amount = 0;
  yummy_saver_data : any;

  yummy_saver_trans_list = [];

  yummysave_amount  = 89;
  yummysave_refund_reason = '';
  yummysave_refund_agree = false;
  yummysave_refund_button = false;

  back_check = false;

  yummy_saver_expire_date = '';
  yummy_saver_renew = false;

  yummy_expired_date:any;

  timeLeft: number = 60;
  interval;

  radio_value = 'yp';



  Today_Deals = [];
  refer_id = '';



  constructor(private StatusBar : StatusBar, private route: ActivatedRoute,public toastr: ToastrManager,private router: Router,public City_list : City_list,private storage: LocalStorage,    private service: CommonService) {

    this.StatusBar.show();
    this.StatusBar.backgroundColorByHexString('#fec429');
    this.StatusBar.styleDefault();
   }

  ngOnInit() {
    this.storage.routes_text = '/cartpage';
    this.Today_Deals = [
      {
        "title":"Gold",
        "desc":"this is gold process",
        "amount":1000,
        "refer_status":"Select",
        "refer_id":"",
        "Benefits":"",
        "days" : 365
      },
      {
        "title":"Sliver",
        "desc":"this is sliver process",
        "amount":500,
        "refer_status":"Select",
        "refer_id":"",
        "Benefits":"",
        "days" : 180
      },
      {
        "title":"Platinum",
        "desc":"this is platinum process",
        "amount":100,
        "refer_status":"Select",
        "refer_id":"",
        "Benefits":"",
        "days" : 90
      }
    ];

    this.yummysaver = '';
    this.yummy_pay_amount = 0;
    this.yummy_saver_amount = 0;
    this.route.params.subscribe(params => {
      this.yummy_status = params.status;
    })
    console.log(this.storage.datas.payment_type);
    if(this.storage.datas.payment_type == 'Cash on delivery'){
      this.radio_value = 'cos';
      this.modelChanged('Cash on delivery');
    }else if(this.storage.datas.payment_type == 'Yummy saver'){
      this.radio_value = 'ys';
      this.modelChanged('Yummy saver');
    }else {
      this.radio_value = 'yp';
      this.modelChanged('Yummy Pay');
    }
    this.service.fetch_yummysaver(this.storage.user).subscribe((res:any) => {
    if(res.count == 0){
      this.show_yummysaver = false;
    }else{
      this.show_yummysaver = true;
      console.log(this.yummy_saver_data);
      for(let a  = 0 ;a < res.rows.length;a++){
        if(res.rows[a].yummysave_type == 'Add Fund'){
          this.yummy_saver_data = res.rows[a];
          a = res.rows.length + 2;
          if(this.yummy_saver_data.yummysave_title == 'Gold'){
            let date = new Date(this.yummy_saver_data.createdAt);
            date.setDate(date.getDate() + 365);
            this.startTimer();
          }
          if(this.yummy_saver_data.yummysave_title == 'Sliver'){
            let date = new Date(this.yummy_saver_data.createdAt);
            date.setDate(date.getDate() + 180);
            this.startTimer();
          }
          if(this.yummy_saver_data.yummysave_title == 'Platinum'){
            let date = new Date(this.yummy_saver_data.createdAt);
            date.setDate(date.getDate() + 90);
            this.startTimer();
          }
        }
      }
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
        this.yummy_saver_trans_list.push(con)
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
        this.yummy_saver_trans_list.push(con)
      }

      if(element.yummysave_type == 'Benefit'){
        let con = {
          img : "../../assets/yummy-logo-black.png",
          type : "Benefit",
          title : "Benefit",
          order_id : element.yummysave_order_id,
          date : element.createdAt,
          status : ""+element.yummysave_order_refund_status,
          amount : element.amount,
          amount_type : "Add",
          view_status : false
        }
        if(element.yummysave_order_refund_status == 'Not Refund'){
          this.yummy_saver_amount =  this.yummy_saver_amount + element.amount;
        }
        this.yummy_saver_trans_list.push(con)
      }

      });
    }
    console.log(this.yummy_saver_trans_list);
    });


    this.service.fetch_transction(this.storage.user).subscribe((res:any) => {
      this.transction_list = [];
      for(let a = 0 ;a < res.rows.length; a ++){
        if(a < 5){
          res.rows[a].show_status = false;
          this.transction_list.push(res.rows[a]);
        }
        if(res.rows[a].trans_type == 'Add Fund'){
          this.yummy_pay_amount = this.yummy_pay_amount + res.rows[a].amount;
        }else if(res.rows[a].trans_type == 'Paid'){
          this.yummy_pay_amount = this.yummy_pay_amount - res.rows[a].amount;
        }
      }
      });




  }

  back_action(){
    if(this.back_check == true){
      this.pauseTimer();
      this.router.navigate([this.storage.routes_text])
      .then(() => {
       window.location.reload();
       });
      // this.router.navigate([this.storage.routes_text]);
    }else{
      this.toastr.warningToastr("Please select the valid payment option");
    }

  }


  show_list(data){
    this.yummysaver = data;
  }

  show_add_fund(){
    this.add_fund_show = true;
    this.show_transc_list = false;
  }

  show_transc_fund(){
    this.add_fund_show = false;
    this.show_transc_list = true;
  }

  move_to_payment_history(){
    this.storage.routes_text = '/payment_method/'+this.yummy_status;
    this.pauseTimer();
    this.router.navigate(['/payment_history']);
  }


  yummypay_payment_history(){
    this.storage.routes_text = '/payment_method/'+this.yummy_status;
    this.pauseTimer();
    this.router.navigate(['/yummypay_payment_history']);
  }




  add_fund(){
    if(this.fund_amount > 0){
    let a = {
      trans_name : this.storage.user.user_name,
      trans_img : this.storage.user.profile_img || '../../assets/yummy-logo-black.png',
      trans_desc : "Added Fund in Mobile",
      trans_type : "Add Fund",
      trans_date : ""+new Date(),
      customer_id : this.storage.user.user_id,
      amount: this.fund_amount,
      merchant_id : "",
      order_id : "",
      created_by :this.storage.user.user_id,
      created_at :""+new Date(),
    }
    this.service.add_fund(a).subscribe(res => {
      this.toastr.successToastr("Fund Added Successfully");
      this.ngOnInit();
      this.fund_amount = 0;
    });

  }
  else{
    this.toastr.warningToastr("Enter Fund Amount");
  }
  }


  clear_trans_status(){
    this.transction_list.forEach(element => {
      element.show_status = false;
    });
  }

  clear_trans_staust_2(index){
    this.yummy_saver_trans_list.forEach(element => {
      element.view_status = false;
    });
    this.yummy_saver_trans_list[index].view_status = true;
  }

  show_trans_detail(index){
    this.clear_trans_status();
    this.transction_list[index].show_status = true;
  }

  show_benefit_visible(data){
    this.benefit_visible = true;
    this.benefit_text = data.Benefits;
  }

  hide_benefit_visible(){
    this.benefit_visible = false;
  }

  buy_perium_user(index,data){
    if(data.refer_status == 'Select'){
      this.toastr.warningToastr('Please select Refer');
    } else if(data.refer_status == 'Yes' && data.refer_id == ''){
      this.toastr.warningToastr('Enter Referal Id');
    }else if(data.refer_status == 'Yes' && data.refer_id !== '') {
      let refer_code = data.refer_id
      this.service.check_referel_code(refer_code).subscribe(res => {
        console.log(res);
        if(res == null){
          this.toastr.warningToastr('Invalid Referel Id');
        }else{
          this.add_yummpy_saver(index,data);
        }
      });
    }else{
      this.add_yummpy_saver(index,data);
    }
  }


  add_yummpy_saver(index,data){
    let a = {
      yummysave_title : data.title,
      yummysave_desc : data.desc,
      yummysave_refer_status : data.refer_status,
      yummysave_refer_id : data.refer_id,
      yummysave_Benefits : data.Benefits,
      customer_id : this.storage.user.user_id,
      merchant_id : "",
      amount : data.amount,
      yummysave_type : "Add Fund",

            }
            this.service.add_yummysaver(a).subscribe(res => {
              this.toastr.successToastr("Yummy saver Added Successfully");
              this.ngOnInit();
            });
  }

  renew_yummy(){
    let a = {
      yummysave_title : this.yummy_saver_data.yummysave_title,
      yummysave_desc : this.yummy_saver_data.yummysave_desc,
      yummysave_refer_status : this.yummy_saver_data.yummysave_refer_status,
      yummysave_refer_id : this.yummy_saver_data.yummysave_refer_id,
      yummysave_Benefits : this.yummy_saver_data.yummysave_Benefits,
      customer_id : this.storage.user.user_id,
      merchant_id : "",
      amount : this.yummy_saver_data.amount
            }
            this.service.add_yummysaver(a).subscribe(res => {
              this.toastr.successToastr("Yummy saver renew Successfully");
              this.ngOnInit();
            });
  }



  refund_yummysave(){
    if(this.yummysave_refund_reason == ''){
    this.toastr.warningToastr('Enter refund reason');
    }else if(this.yummysave_amount == 0){
      this.toastr.warningToastr('Your earn amount is 0, You cannot refund');
    }else{
      let a = {
        yummysave_Benefits : "",
        customer_id : this.storage.user.user_id,
        merchant_id : "",
        yummysave_amount : this.yummy_saver_amount,
        yummysave_refund_date : ""+new Date(),
        yummysave_refund_reason : this.yummysave_refund_reason,
        yummysave_type : "Refund"
              }
              this.service.add_yummysaver(a).subscribe(res => {
              this.refund_tast_2();
              });
    }



  }


  refund_tast_2(){
    let cd = {
      customer_id : this.storage.user.user_id,
      yummysave_order_refund_status : "Refunded"
    }
    this.service.mark_yummysaver_refund(cd).subscribe(res => {
      this.toastr.successToastr("Yummy saver refund process successfully");
      this.ngOnInit();
    });
  }

  refund_submmit(){
    if(this.yummysave_refund_reason == ''){
     this.toastr.warningToastr('enter refund text');
    }
    else if(this.yummysave_refund_agree == false){
      this.toastr.warningToastr('Select Agreed check box');
    }
    else{
      this.yummysave_refund_button = true;
    }
  }


  modelChanged(value){
    let temp = this.storage.datas;
    if(value == "Cash on delivery"){
      temp.payment_type = value;
      this.storage.datas = temp;
      this.back_check = true;
    }else if(value == "Yummy saver"){
        temp.payment_type = value;
        this.storage.datas = temp;
        this.back_check = true;
    }else if(value == "Yummy Pay"){
        temp.payment_type = value;
        this.storage.datas = temp;
        this.back_check = true;
    }
  }



  startTimer() {
    this.interval = setInterval(() => {
      console.log(this.yummy_saver_data.createdAt);
      if(this.timeLeft > 0) {
        this.timeLeft--;
        let date = new Date(this.yummy_saver_data.createdAt);
        date.setDate(date.getDate() + 365);
        this.yummy_expired_date = new Date(date);
        let endDate = new Date();
        let purchaseDate =  this.yummy_expired_date;
        let diffMs = (+purchaseDate - +endDate); // milliseconds
        let diffDays = Math.floor(diffMs / 86400000); // days
        var months = Math.floor(diffDays/31);
        var years = Math.floor(months/12);
        let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        var diffInSeconds = Math.abs(+purchaseDate - +endDate) / 1000;
        var seconds = Math.floor(diffInSeconds % 60);
        console.log(years + " years, " + months + " months, " + diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes, " + seconds + " Sec");
        this.yummy_saver_expire_date = ""+months + " months, " + diffDays + " days, " + diffHrs + " hours, " + diffMins + ":" + seconds;
        if(months == 0 && diffDays <= 5){
          this.yummy_saver_renew = true;
        }
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }
  pauseTimer() {
    clearInterval(this.interval);
  }



  toggleEditable(event) {
    console.log(event.target.checked);
    if ( event.target.checked ) {
        this.yummysave_refund_agree = event.target.checked;
   }
}



}
