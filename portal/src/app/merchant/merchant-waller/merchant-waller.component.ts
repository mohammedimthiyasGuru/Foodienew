import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/_core/services/order.service';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";



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
  selector: 'app-merchant-waller',
  templateUrl: './merchant-waller.component.html',
  styleUrls: ['./merchant-waller.component.scss'],
  providers: [DatePipe]
})
export class MerchantWallerComponent implements OnInit {
 
  visible = false;

  corderslist : any = [];
  yearsUnique = [2016, 2017, 2018, 2017, 2018, 2019, 2020, 2021];
  
  country_name = 'MALAYSIA';
  state_name = '';
  role = '2';
  sort_by = 'Y';
  date = '2021';
  merchant_id = 0;
  state_list = [];
  monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];  
  date_values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  times_values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  year_values = [0,0,0,0,0,0,0,0,0,0,0,0];
  
  debit_date_values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  debit_times_values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  debit_year_values = [0,0,0,0,0,0,0,0,0,0,0,0];

  date_display = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
  time_display = ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"];
  year_display = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



  dates_array = [];
  time_array = [];

  time_data : any;
  date_data : any;
  year_data : any;

  today_count_credit = 0;
  today_count_debit = 0;

  total_count_credit = 0;
  total_count_debit = 0;

 

  total_subtoal = 0; // net 
  total_refund = 0; //
  others = 0; // 
  grand_total = 0; //
  rest_name = '';




  //////Chart Delaraiton/////////
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;

  public chartOptions3: Partial<ChartOptions1>;
  public chartOptions4: Partial<ChartOptions1>;
  public chartOptions5: Partial<ChartOptions1>;
  
  
  constructor(
    private storage: LocalStorage,
    private service: ProfileService,
    private router: Router,
    // private auth: AuthService,
    private orderservice: OrderService,
    private datePipe: DatePipe
  ) { 
    this.merchant_id = this.storage.user.user_id;
    this.rest_name = this.storage.user.business_name;


    this.service.profile_view(this.merchant_id).subscribe(res => {
      console.log(res);
      this.country_name = res.p_country_name;
      this.state_name = res.p_state_name;
      this.find_state_list();
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
    });
    
    console.log(this.merchant_id);
    // finding current year and month
    const d = new Date();
    console.log(d);
    var month =  this.monthNames[d.getMonth()];
    for(let a = 0 ; a < 31 ; a ++){
      this.date_display[a] = ""+this.date_display[a]+"-"+month;
    }
   
    console.log(this.date_display);
    console.log(this.time_display);

    
  }



  ngOnInit() {
  
    this.date_list();
    this.time_list();
    this.year_list();
  }

  find_state_list(){
    this.state_list =[];
    let country_name = this.country_name;
    this.service.list_by_country_state(country_name).subscribe(res => {
     console.log(res);
     this.state_list = res.rows;
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });
  }

  fetch() {
    let filter = { 
      country: this.country_name,
      state: this.state_name,
      role: this.role,
      sortby: this.sort_by,
      sortval: this.date,
      merchant: this.merchant_id 
    }
    console.log(filter);
    this.total_subtoal = 0;
    this.orderservice.list_merchant_wallet(filter, {}).subscribe(res => {
      console.log(res);
      this.corderslist = res.rows;
     console.log('Walet List',this.corderslist);
     this.corderslist.forEach(element => {
      element.discount_price = (25 / 100) * element.prod_total_price;
      element.discount_price = Math.round(element.discount_price);
      element.net_price =  element.prod_total_price - element.discount_price;
      this.total_subtoal = this.total_subtoal + element.net_price;
      this.grand_total = this.grand_total + element.net_price;
      console.log(element.discount_price);
      console.log(element.net_price);
     });
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
    });
  }



  date_list(){
    let a =
    {
      date : new Date(),
      merchant: this.merchant_id
    }
    this.orderservice.list_merchant_wallet_date(a,{}).subscribe(res => {
      this.date_data = res.rows;
       console.log('Date List',this.date_data);
       for(let a = 0 ; a < this.date_data.length ; a ++){
          let temp = +this.date_data[a].dat;
          console.log(temp)
          this.date_values[temp - 1] = +this.date_data[a].amount;
       }

    },err => {
      console.log(err);

    });
    
  }

  time_list(){

    let a =
    {
      date : new Date(),
      merchant: this.merchant_id
    }
    this.orderservice.list_merchant_wallet_time(a,{}).subscribe(res => {
      this.time_data = res.rows;
      console.log('Time List',this.time_data);
      for(let a = 0 ; a < this.time_data.length ; a ++){
        let temp = +this.time_data[a].hrs;
        console.log(temp)
        this.times_values[temp] = +this.time_data[a].amount;
     }
    },err => {
      console.log(err)
    });


  }
  
  year_list(){
    let a = {
      date : new Date(),
      merchant: this.merchant_id
    }
    this.orderservice.list_merchant_wallet_year(a,{}).subscribe(res => {
      this.year_data = res.rows;
      console.log('year List',this.year_data);

      for(let a = 0 ; a <  this.year_data.length ; a ++){
        let temp = +this.year_data[a].mnth;
        console.log(temp)
        this.year_values[temp - 1] = +this.year_data[a].amount;
        this.initial();
     }


    },err => {
      console.log(err)
    });
  }









  // chart declaration

  initial(){

  this.chartOptions = {
      series: [
        {
          name: "Credit Amount",
          data: this.times_values
        }
      ],
      chart: {
        height: 200,
        width : 250,
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
        categories: this.time_display,
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
        name: "Debit amount",
        data: this.debit_times_values
      },
    ],
    chart: {
      height: 200,
      width : 250,
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
      categories: this.time_display,
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
        name: "Credit Amount",
        data: this.year_values
      }
    ],
    chart: {
      height: 200,
      width : 250,
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
      categories: this.year_display,
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


  this.chartOptions3 = {
      series: [
        {
          name: "Debit Amount",
          data: this.debit_year_values
        }
      ],
      chart: {
        height: 200,
        width : 250,
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
        categories: this.year_display,
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

  this.chartOptions4 = {
    series: [
      {
        name: "Credit amount",
        data: this.date_values
      },
      {
        name: "Debit amount",
        data: this.debit_date_values
      }
    ],
    chart: {
      height: 350,
      width : 500,
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
      categories: this.date_display,
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

  this.chartOptions5 = {
    series: [
      {
        name: "Credit Amount",
        data: this.year_values
      },
      {
        name: "Debit amount",
        data: this.debit_year_values
      }
    ],
    chart: {
      height: 350,
      width : 500,
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
      categories: this.year_display,
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



   this.visible = true;
  }


 





}
