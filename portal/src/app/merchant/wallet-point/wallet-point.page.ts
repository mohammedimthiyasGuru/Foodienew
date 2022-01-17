import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/_core/services/order.service';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ActivatedRoute, Router } from '@angular/router';
import { authConfig } from 'src/app/_core/configs/property.config';
import { VideoService } from 'src/app/_core/services/video.service';
import { ExcelService } from '../../_core/excel.service';
import { FormControl, FormGroup } from '@angular/forms';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";
import { DatePipe } from '@angular/common';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-wallet-point',
  templateUrl: './wallet-point.page.html',
  styleUrls: ['./wallet-point.page.scss'],
  providers: [DatePipe]
})
export class WalletPointPage implements OnInit {

  page_visible = false;
  
  D_total_value  = 0;
  D_today_value = 0;

  C_total_value  = 0;
  C_today_value = 0;


  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;





  public chartOptionss: Partial<ChartOptions1>;
  public chartOptionss1: Partial<ChartOptions1>;
  public chartOptionss2: Partial<ChartOptions1>;


  public data: any[];


  loader : boolean = true;
  profile: any;
  corderslist: any = [];
  time_corderslist : any = [];
  video_count : number;
  history_list : any = [];
  
  previous_index : any;
  history_index : any;


  final_output : any = [];
  today_time = [];
  time_data = [];




  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

    current_date : any;




  constructor(

    private storage: LocalStorage,
    private service: ProfileService,
    private router: Router,
    // private auth: AuthService,
    private videoservice: VideoService,
    private orderservice: OrderService,
    private excelService: ExcelService,
    private datePipe: DatePipe

   
  ) {
    this.today_time = [];
    this.current_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    // this.current_date = "2021-07-04"
    let temp_date = this.current_date.split("-");
    let temp_date1 = [
      temp_date[0]+"-"+temp_date[1]+"-"+"01",
      temp_date[0]+"-"+temp_date[1]+"-"+"02",
      temp_date[0]+"-"+temp_date[1]+"-"+"03",
      temp_date[0]+"-"+temp_date[1]+"-"+"04",
      temp_date[0]+"-"+temp_date[1]+"-"+"05",
      temp_date[0]+"-"+temp_date[1]+"-"+"06",
      temp_date[0]+"-"+temp_date[1]+"-"+"07",
      temp_date[0]+"-"+temp_date[1]+"-"+"08",
      temp_date[0]+"-"+temp_date[1]+"-"+"09",
      temp_date[0]+"-"+temp_date[1]+"-"+"10",
      temp_date[0]+"-"+temp_date[1]+"-"+"11",
      temp_date[0]+"-"+temp_date[1]+"-"+"12",
      temp_date[0]+"-"+temp_date[1]+"-"+"13",
      temp_date[0]+"-"+temp_date[1]+"-"+"14",
      temp_date[0]+"-"+temp_date[1]+"-"+"15",
      temp_date[0]+"-"+temp_date[1]+"-"+"16",
      temp_date[0]+"-"+temp_date[1]+"-"+"17",
      temp_date[0]+"-"+temp_date[1]+"-"+"18",
      temp_date[0]+"-"+temp_date[1]+"-"+"19",
      temp_date[0]+"-"+temp_date[1]+"-"+"20",
      temp_date[0]+"-"+temp_date[1]+"-"+"21",
      temp_date[0]+"-"+temp_date[1]+"-"+"22",
      temp_date[0]+"-"+temp_date[1]+"-"+"23",
      temp_date[0]+"-"+temp_date[1]+"-"+"24",
      temp_date[0]+"-"+temp_date[1]+"-"+"25",
      temp_date[0]+"-"+temp_date[1]+"-"+"26",
      temp_date[0]+"-"+temp_date[1]+"-"+"27",
      temp_date[0]+"-"+temp_date[1]+"-"+"28",
      temp_date[0]+"-"+temp_date[1]+"-"+"29",
      temp_date[0]+"-"+temp_date[1]+"-"+"30",
      temp_date[0]+"-"+temp_date[1]+"-"+"31"
    ];
    console.log(temp_date1);
    for(let a  = 0; a < 25 ; a ++){
      let time = '';
      if(a < 10){
        time = this.current_date+"T0"+a+":00:00.000Z";
      }else{
        time = this.current_date+"T"+a+":00:00.000Z";
      }
      // console.log(time);
      this.today_time.push(time);
    }

 
   }

  ngOnInit() {
    this.history_list = [];
    this.corderslist = [];
    this.service.view(this.storage.user.profile_id).subscribe(res => {
      this.profile = res;
      if(res.profile_location == null && res.profile_biz_name == null){
        let g = {profile_id: res.profile_id, user_id: res.user.user_id}
        localStorage.setItem(authConfig.REGISTERED_PROFILE, JSON.stringify(g));
        const registerData = {
          contactno:res.profile_contact
        };
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
      if(temp_data.length == 0){
        this.initial(["0"],[0],[0]);
        this.initial1([0],["0"],[0]);
      }else{
      for(let a = 0 ; a < temp_data.length ; a ++){
        
        if(a == 0){
          let tem = temp_data[0];
          let order_date = tem.createdAt

          let c = {
             order_detail : tem,
             order_value : tem.mercant_price_total,
             order_qty : tem.prod_qty,
             product_details : [],
             view_status : false,
             order_date : order_date,
             current_date :   order_date,
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
             let order_date = tem.createdAt;
             let c = {
             order_detail : tem,
             order_value : tem.mercant_price_total,
             order_qty : tem.prod_qty,
             product_details : [],
             view_status : false,
             order_date : order_date,
             current_date : order_date,
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
        }
      }
      this.remove_index();
    }
    }, err => {
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

      if(a == this.corderslist.length - 1){
        this.time_corderslist = this.corderslist;
        this.total_sale_cal();
        this.total_sale_time();
      }
    }

 }


 filter_status(status,secstatus){
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

    if(res.count == 0)


    this.corderslist = [];
    let temp_data = res.rows;
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
    }
}

}




total_sale_cal(){
  this.C_today_value = 0;
  this.C_total_value = 0;
  this.D_today_value = 0;
  this.D_total_value = 0;
  for(let a = 0 ; a <  this.corderslist.length; a ++){
   let current_date = this.datePipe.transform(new Date(), 'MMM,dd'); 
   current_date = current_date;
   let order_date = this.datePipe.transform(this.corderslist[a].order_date, 'MMM,dd'); 
   order_date = order_date;
   this.corderslist[a].order_date = order_date;
   if(current_date == order_date){
     this.C_today_value = this.C_today_value + this.corderslist[a].order_value;
   }
   this.C_total_value = this.C_total_value + this.corderslist[a].order_value;
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
  var series = [];
  // this.chartOptions.series[0].data = [];
  // this.chartOptions.xaxis.categories = [];

  // this.barChartData[0].data = [];
  // this.barChartLabels = [];
  let c = [];
  let d = [];
  let e = [];
  this.C_total_value = 0 ;
  this.D_total_value = 0;
  for(let a = 0; a < calculated.length; a ++){
    c.push(calculated[a].order_value);
    e.push(calculated[a].order_value / 2);
    d.push(calculated[a].order_date);
    this.C_total_value = this.C_total_value + calculated[a].order_value;
    this.D_total_value = this.D_total_value  + (calculated[a].order_value / 2);
  }
  // console.log(this.chartOptions.xaxis.categories);
  // this.chartOptions = this.chartOptions;
  this.initial1(c,d,e);
}



total_sale_time(){
  this.time_data = [];
  for(let a = 0 ; a <  this.time_corderslist.length; a ++){
    console.log(this.time_corderslist[a].order_value);
    if( this.time_corderslist[a].current_date >= this.today_time[0] && this.time_corderslist[a].current_date < this.today_time[1]) {
      console.log("One 1");
       let id = "00";
       let value = this.time_corderslist[a].order_value;
      this.time_data.push({"id" :id,"total" :value});
      console.log(this.time_data);
     } 
     if( this.time_corderslist[a].current_date >= this.today_time[1] && this.time_corderslist[a].current_date < this.today_time[2]) {
      console.log("One 2");
      let id =  "01";
      let value = this.time_corderslist[a].order_value;
       this.time_data.push({"id" :id,"total" :value});
      console.log(this.time_data);
    }  
     if( this.time_corderslist[a].current_date >= this.today_time[2] && this.time_corderslist[a].current_date < this.today_time[3]) {
      console.log("One 3");
      let id =  "02";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);               console.log(this.time_data);
              }  
     if( this.time_corderslist[a].current_date >= this.today_time[3] && this.time_corderslist[a].current_date < this.today_time[4]) {
      console.log("One 4");
      let id =  "03";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);               console.log(this.time_data);
     }  
     if( this.time_corderslist[a].current_date >= this.today_time[4] && this.time_corderslist[a].current_date < this.today_time[5]) {
      console.log("One 5");
      let id = "04";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[5] && this.time_corderslist[a].current_date < this.today_time[6]) {
      console.log("One 6");
      let id = "05";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[6] && this.time_corderslist[a].current_date < this.today_time[7]) {
      console.log("One 7");
      let id = "06";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[7] && this.time_corderslist[a].current_date < this.today_time[8]) {
      console.log("One 8");
      let id = "07";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[8] && this.time_corderslist[a].current_date < this.today_time[9]) {
      console.log("One 9");
      let id = "08";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[9] && this.time_corderslist[a].current_date < this.today_time[10]) {
      console.log("One 10");
      let id = "09";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[10] && this.time_corderslist[a].current_date < this.today_time[11]) {
      console.log("One 11");
      let id = "10";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[11] && this.time_corderslist[a].current_date < this.today_time[12]) {
      console.log("One 12");
      let id = "11";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[12] && this.time_corderslist[a].current_date < this.today_time[13]) {
      console.log("One 13");
      let id = "12";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[13] && this.time_corderslist[a].current_date < this.today_time[14]) {
      console.log("One 14");
      let id = "13";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[14] && this.time_corderslist[a].current_date < this.today_time[15]) {
      console.log("One 15");
      let id = "14";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[15] && this.time_corderslist[a].current_date < this.today_time[16]) {
      console.log("One 16");
      let id = "15";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[16] && this.time_corderslist[a].current_date < this.today_time[17]) {
      console.log("One 17");
      let id = "16";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[17] && this.time_corderslist[a].current_date < this.today_time[18]) {
      console.log("One 18");
      let id = "17";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data); 
                  }  
     if( this.time_corderslist[a].current_date >= this.today_time[18] && this.time_corderslist[a].current_date < this.today_time[19]) {
      console.log("One 19");
      let id = "18";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[19] && this.time_corderslist[a].current_date < this.today_time[20]) {
      console.log("One 20");
      let id = "19";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[20] && this.time_corderslist[a].current_date < this.today_time[21]) {
      console.log("One 21");
      let id = "20";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     }  
     if( this.time_corderslist[a].current_date >= this.today_time[21] && this.time_corderslist[a].current_date < this.today_time[22]) {
      console.log("One 22");
      let id = "21";
      let value = this.time_corderslist[a].order_value;
  this.time_data.push({"id" :id,"total" :value});
               console.log(this.time_data);     } 
     if( this.time_corderslist[a].current_date >= this.today_time[22] && this.time_corderslist[a].current_date < this.today_time[23]) {
      console.log("One 23");
      let id = "22";
      let value = this.time_corderslist[a].order_value;
             this.time_data.push({"id" :id,"total" :value});
     } 
     if( this.time_corderslist[a].current_date >= this.today_time[23] && this.time_corderslist[a].current_date < this.today_time[23]) {
      console.log("One 24");
      let id = "23";
      let value = this.time_corderslist[a].order_value;
       this.time_data.push({"id" :id,"total" :value});
     }  
     if(this.corderslist.length - 1 == a ){
      console.log(this.time_data);
      this.group_time();
     }

 }
 
 
}


group_time(){
  console.log(this.time_data);
  let data = [];
  data = this.time_data;
  let map = data.reduce((prev, next) =>{
    if (next.id in prev) {
      prev[next.id].total += next.total;
    } else {
       prev[next.id] = next;
    }
    return prev;
  }, {});
  
  let result = Object.keys(map).map(id => map[id]);

  console.log(result);
  let c = [];
  let d = [];
  let e = [];
  this.C_today_value = 0;
  this.D_today_value = 0;
  for(let a = 0; a < result.length; a ++){
    console.log(result[a].total);
    console.log(result[a].id);
    c.push(result[a].id);
    d.push(result[a].total / 2);
    e.push(result[a].total);
this.C_today_value = this.C_today_value + result[a].total;
this.D_today_value = this.D_today_value + (result[a].total / 2);
  }
  this.initial(c,d,e);
}


initial(c,d,e){
  this.chartOptions = {
    series: [
      {
        name: "Credit amount",
        data: e
      },
      {
        name: "Debit Amount",
        data: d
      }
    ],
    chart: {
      height: 350,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      type: "category",
      categories: c,
      labels: {
        style: {
          fontWeight: 600
        }
      }
    },
    tooltip: {
      x: {
        format: "yyyy-MM-dd"
      }
    }
  };



  this.chartOptions1 = {
    series: [
      {
        name: "Credit amount",
        data: e
      },
    ],
    chart: {
      height: 150,
      width : 200,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      type: "category",
      categories: c,
      labels: {
        style: {
          fontWeight: 600
        }
      }
    },
    tooltip: {
      x: {
        format: "yyyy-MM-dd"
      }
    }
  };



  this.chartOptions2 = {
    series: [
      {
        name: "Debit Amount",
        data: d
      }
    ],
    chart: {
      height: 150,
      width : 200,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      type: "category",
      categories: c,
      labels: {
        style: {
          fontWeight: 600
        }
      }
    },
    tooltip: {
      x: {
        format: "yyyy-MM-dd"
      }
    }
  };







   this.page_visible = true;
}



initial1(c,d,e){
  this.chartOptionss = {
    series: [
      {
        name: "Credit amount",
        data: c
      },
      {
        name: "Debit Amount",
        data: e
      }
    ],
    chart: {
      height: 350,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      type: "category",
      categories: d
    },
    tooltip: {
      x: {
        format: "yyyy-MM-dd"
      }
    }
  };



  this.chartOptionss1 = {
    series: [
      {
        name: "Credit amount",
        data: c
      }
    ],
    chart: {
      height: 150,
      width : 200,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      type: "category",
      categories: d
    },
    tooltip: {
      x: {
        format: "yyyy-MM-dd"
      }
    }
  };


  this.chartOptionss2 = {
    series: [
      {
        name: "Debit Amount",
        data: e
      }
    ],
    chart: {
      height: 150,
      width : 200,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      type: "category",
      categories: d
    },
    tooltip: {
      x: {
        format: "yyyy-MM-dd"
      }
    }
  };



   this.page_visible = true;
}






}
