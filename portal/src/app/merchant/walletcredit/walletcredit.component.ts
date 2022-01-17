import { Component, OnInit, Injectable } from '@angular/core';
import { OrderService } from 'src/app/_core/services/order.service';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ActivatedRoute, Router } from '@angular/router';
import { authConfig } from 'src/app/_core/configs/property.config';
import { VideoService } from 'src/app/_core/services/video.service';
import { ExcelService } from '../../_core/excel.service';
import { FormControl, FormGroup } from '@angular/forms';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-walletcredit',
  templateUrl: './walletcredit.component.html',
  styleUrls: ['./walletcredit.component.scss'],
  providers: [DatePipe]
})
export class WalletcreditComponent implements OnInit {


  total_value  = 0;
  today_value = 0;
  loader : boolean = true;
  profile: any;
  corderslist: any = [];
  video_count : number;
  history_list : any = [];
  
  previous_index : any;
  history_index : any;


  final_output : any = [];



  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });



  constructor(

    private storage: LocalStorage,
    private service: ProfileService,
    private router: Router,
    // private auth: AuthService,
    private videoservice: VideoService,
    private orderservice: OrderService,
    private excelService: ExcelService,
    private datePipe: DatePipe

   
  ) { }


  
    





  

  ngOnInit() {
    this.history_list = [];
    this.corderslist = [];
    this.service.view(this.storage.user.profile_id).subscribe(res => {
      this.profile = res;
      console.log(res);
      if(res.profile_location == null && res.profile_biz_name == null){
        let g = {profile_id: res.profile_id, user_id: res.user.user_id}
        localStorage.setItem(authConfig.REGISTERED_PROFILE, JSON.stringify(g));
        const registerData = {
          contactno:res.profile_contact
        };
        console.log(registerData);
        this.storage.merchant_detail = registerData;
        this.router.navigateByUrl('/account/register');
        this.loader = false;
      }
      this.loader = false;
      // this.base_lat = this.profile.location_lat;
      // this.base_lng = this.profile.location_lng;
      // this.location_lat = this.profile.location_lat;
      // this.location_lng = this.profile.location_lng;
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
    });
    this.loadData();
    // this.filter_status('B','A');
    // this.fetch_video();

  }

  loadData() {
    let filter = {
      merchant_id: Number(this.storage.user.profile_id)
    }
    this.orderservice.list_merchant(filter).subscribe(res => {
      this.corderslist = [];
      let temp_data = res.rows;
      console.log(temp_data);
      for(let a = 0 ; a < temp_data.length ; a ++){
        
        if(a == 0){
          let tem = temp_data[0];
          let order_date = this.datePipe.transform(tem.createdAt, 'yyyy-MM-dd'); 
          let c = {
             order_detail : tem,
             order_value : tem.mercant_price_total,
             order_qty : tem.prod_qty,
             product_details : [],
             view_status : false,
             order_date : order_date
          }
          c.product_details.push(tem);
          this.corderslist.push(c);
        }else{
          let datas = [];
          datas = this.corderslist;
          var check_status = 0;
          let tem = temp_data[a];
          for(let c = 0 ; c < datas.length ; c ++){
            if(datas[c].order_detail.order_id == temp_data[a].order_id){
              datas[c].order_value = datas[c].order_value + temp_data[a].mercant_price_total,
              datas[c].order_qty = datas[c].order_qty + temp_data[a].prod_qty
              check_status = 1;
            }
            if(c == datas.length - 1){
              if(check_status == 0){
             let tem = temp_data[a];
             let order_date = this.datePipe.transform(tem.createdAt, 'yyyy-MM-dd'); 
             let c = {
             order_detail : tem,
             order_value : tem.mercant_price_total,
             order_qty : tem.prod_qty,
             product_details : [],
             view_status : false,
             order_date : order_date
             }
             c.product_details.push(tem);
             this.corderslist.push(c);
              }else{
                this.corderslist[c].product_details.push(tem);
              }
            }
          }
        }
        if(a == temp_data.length - 1 ){
           console.log(this.corderslist);
        }
      }
      this.remove_index();
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
    });
  }

  remove_index(){
    for(let a  = 0 ; a < this.corderslist.length ; a ++){
      if(a !== 0){
        this.corderslist[a].order_value = this.corderslist[a].order_value - this.corderslist[a].order_detail.mercant_price_total;
        this.corderslist[a].order_qty = this.corderslist[a].order_qty - this.corderslist[a].order_detail.prod_qty;
        this.corderslist[a].product_details.splice(0,1);
      }
    }
    this.total_sale_cal();
 }


 filter_status(status,secstatus){
  console.log(status);
  this.corderslist = [];
  this.history_list = [];
  this.corderslist = this.final_output;
  let temp_data  = this.corderslist;
  this.corderslist = [];
  for(let a  = 0; a < temp_data.length ; a ++){
    if(temp_data[a].order_detail.order_dtl_status == status){
      this.corderslist.push(temp_data[a]);
    }
    // if(temp_data[a].order_detail.order_dtl_status == secstatus){
    //   this.history_list.push(temp_data[a]);
    // }
  }
}




exportAsXLSX(): void {
  let temp = [];
  for(let a = 0; a < this.corderslist.length; a ++)
  {
    let d = "";
    for(let c = 0; c < this.corderslist[a].product_details.length; c++){
       d = d + ""+this.corderslist[a].product_details[c].product.prod_id + " && " + this.corderslist[a].product_details[c].product.prod_name + " x " + this.corderslist[a].product_details[c].prod_qty+", "
    }
    let e = {
      Order_ID : this.corderslist[a].order_detail.order_id,
      Restarant_Name_and_ID : this.corderslist[a].order_detail.order_mst.merchant_info.profile_biz_name+" && "+ this.corderslist[a].order_detail.order_mst.merchant_info.profile_id,
      User_ID : this.corderslist[a].order_detail.order_mst.customer_info.profile_id,
      Order_Details : d,
      Order_Price : this.corderslist[a].order_value,
      Item_Count: this.corderslist[a].order_qty,
      Status: this.corderslist[a].order_detail.order_dtl_status,
      Date_Time: this.corderslist[a].order_detail.order_mst.order_date,
      Note_If_Any : '',
    }
    temp.push(e);
    if(a == this.corderslist.length - 1){
      console.log(temp)
      this.excelService.exportAsExcelFile(temp, 'Report');
    }
  }

}

dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
  this.Fetchdata(dateRangeStart.value,dateRangeEnd.value);
  }


Fetchdata(start_Date:any,end_Date:any){
  let filter = {
    merchant_id: Number(this.storage.user.profile_id)
  }
  this.orderservice.list_merchant(filter).subscribe(res => {
    this.corderslist = [];
    let temp_data = res.rows;
    console.log(temp_data);
    for(let a = 0 ; a < temp_data.length ; a ++){
      
      if(a == 0){
        let tem = temp_data[0];
        let c = {
           order_detail : tem,
           order_value : tem.mercant_price_total,
           order_qty : tem.prod_qty,
           product_details : [],
           view_status : false
        }
        c.product_details.push(tem);
        this.corderslist.push(c);
      }else{
        let datas = [];
        datas = this.corderslist;
        var check_status = 0;
        let tem = temp_data[a];
        for(let c = 0 ; c < datas.length ; c ++){
          if(datas[c].order_detail.order_id == temp_data[a].order_id){
            datas[c].order_value = datas[c].order_value + temp_data[a].mercant_price_total,
            datas[c].order_qty = datas[c].order_qty + temp_data[a].prod_qty
            check_status = 1;
          }
          if(c == datas.length - 1){
            if(check_status == 0){
           let tem = temp_data[a];
           let c = {
           order_detail : tem,
           order_value : tem.mercant_price_total,
           order_qty : tem.prod_qty,
           product_details : [],
           view_status : false
           }
           c.product_details.push(tem);
           this.corderslist.push(c);
            }else{
              this.corderslist[c].product_details.push(tem);
            }
          }
        }
      }
      if(a == temp_data.length - 1 ){
         console.log(this.corderslist);
      }
    }
    for(let x  = 0 ; x < this.corderslist.length ; x ++){
      if(x !== 0){
        this.corderslist[x].order_value = this.corderslist[x].order_value - this.corderslist[x].order_detail.mercant_price_total;
        this.corderslist[x].order_qty = this.corderslist[x].order_qty - this.corderslist[x].order_detail.prod_qty;
        this.corderslist[x].product_details.splice(0,1);
      }
      if(x == this.corderslist.length - 1){
        this.calculate_function(start_Date,end_Date);
      }
    }
  }, err => {
    console.log(err);
    // this.notify.showError(err, "LOGIN");
  });



}


total_sale_cal(){
 this.total_value = 0;
 for(let a = 0 ; a <  this.corderslist.length; a ++){
  let current_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd'); 
  let order_date = this.datePipe.transform(this.corderslist[a].order_detail.createdAt, 'yyyy-MM-dd'); 
  console.log(current_date,order_date);
  if(current_date == order_date){
    this.today_value = this.today_value + this.corderslist[a].order_value;
  }
  this.total_value = this.total_value + this.corderslist[a].order_value;
 }
 this.group_add_sum();
}

group_add_sum(){
  const calculated = this.corderslist.reduce((acc, item) => {
    let accItem = acc.find(ai => ai.order_date === item.order_date)
    if(accItem){
        accItem.order_value += +item.order_value 
    }else{
       acc.push(item)
    }
    return acc;
  },[])
  
  console.log(calculated);
  // this.barChartData[0].data = [];
  // this.barChartLabels = [];
  // for(let a = 0; a < calculated.length; a ++){
  //   this.barChartData[0].data.push(calculated[a].order_value);
  //   this.barChartLabels.push(calculated[a].order_date);
  // }
}





calculate_function(start_date,end_date){
  let from = new Date(start_date);
  let to = new Date(end_date);
  let temp = [];
  for(let a = 0 ; a <  this.corderslist.length; a ++){    
    // console.log(this.corderslist[a].order_detail.order_mst.order_date);
    let check = new Date(this.corderslist[a].order_detail.order_mst.order_date);
    if((check.getTime() <= to.getTime() && check.getTime() >= from.getTime())){
      temp.push(this.corderslist[a]);
    }else{
    }
    if(this.corderslist.length - 1 == a){
     this.corderslist = [];
     this.corderslist = temp;
    }


}

}


}
