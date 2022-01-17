import { Component, OnInit, Injectable } from '@angular/core';
import { OrderService } from 'src/app/_core/services/order.service';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ActivatedRoute, Router } from '@angular/router';
import { authConfig } from 'src/app/_core/configs/property.config';
import { VideoService } from 'src/app/_core/services/video.service';
import { ExcelService } from '../../_core/excel.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-creditreport',
  templateUrl: './creditreport.component.html',
  styleUrls: ['./creditreport.component.scss'],
  providers: [DatePipe]
})
export class CreditreportComponent implements OnInit {


  loader : boolean = true;
  profile: any;
  corderslist: any = [];
  video_count : number;
  history_list : any = [];


  start_date : any = '';
  end_date : any = '';
  
  previous_index : any;
  history_index : any;


  final_output : any = [];

  box_select : boolean = true;


  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  format : String = '';
  video_uploading : boolean = false;
  checkstatus : boolean = false;


  type_error = '';
  start_date_error = '';
  end_date_error = '';
  agreement_error = '';


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




fetch_date(){
  this.agreement_error = '';
  this.type_error = '';
  this.start_date_error = '';
  this.end_date_error = '';
  let date_status = true;
  console.log(this.start_date);
  let test_start = new Date(this.start_date);
  let test_end =  new Date(this.end_date);
  if(test_start < test_end){
    date_status = true;
  }else{
    date_status = false;
  }
  console.log(date_status);
  if(this.checkstatus == false){
   this.agreement_error = "Please select the Terms & Conditions"
  }else if(this.format == ""){
    this.type_error = 'Please select the format type';
  }else if(this.start_date == ''){
    this.start_date_error = 'Please select start date';
  }else if(this.end_date == ''){
    this.end_date_error = 'Please select end date';
  }else if(date_status == false){
    this.end_date_error = 'End date should not be leaser then Start date';
  }else{
    this.loadData();
    console.log(this.end_date,this.start_date);
    let start_date = this.datePipe.transform(this.start_date, 'MM/dd/yyyy');
    let end_date = this.datePipe.transform(this.end_date, 'MM/dd/yyyy');
    console.log(start_date,end_date);
    this.Fetchdata(start_date,end_date);
  }
//  this.exportAsXLSX(start_date,end_date); 
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
     this.exportAsXLSX();
    }


}

}

toggleEditable(event) {
  console.log(event.target.checked);
  this.checkstatus = event.target.checked;
} 

change_report(data){
  console.log(data);
  if(data == 'Credit'){
    this.box_select = true;
    this.ngOnInit();
  }else if(data == 'Debit'){
    this.box_select = false;
    this.corderslist = [];
  }
}


}
