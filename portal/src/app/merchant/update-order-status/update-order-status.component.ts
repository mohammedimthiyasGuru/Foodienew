import { Component, OnDestroy, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/_core/services/order.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.page.html',
  styleUrls: ['./update-order-status.page.scss'],
})
export class UpdateOrderStatusPage implements OnInit {


  // items = [];
  // pageOfItems: Array<any>;


  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 10;
  @Input() maxPages = 10;
  pager: any = {};





  orderslist: any[];

  profile: any;
  corderslist = [];
  video_count : number;
  history_list  = [];
  previous_index : any;
  final_output : any = [];


  confirm_count : number = 0;
  prepare_count : number = 0;
  picked_count : number = 0;
  deliver_count : number = 0;
  id : any;

  select_value = 'Order Confirmation';


  status_one = 'B';
  status_two = 'A';

  stage : any;
  title : any;
  alt_title : any;
  alter_stage : any;
  business_name : any;
  busineess_id : any;
  status : any;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storage: LocalStorage,
    private service: OrderService,

  ) { 
   
    this.stage = "received";
    console.log(this.storage.user);
    this.business_name = this.storage.user.business_name;
    this.busineess_id = this.storage.user.profile_id;
    this.status = 'B';

  }

  ngOnInit() {
    this.ngOnDestroy();
    this.loadData();
    this.id = setInterval(() => {
      this.loadData();
      console.log("Refreshing");
    }, 20000);
  }


  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }





  loadData() {
    console.log(this.stage);
    if (this.stage == 'received') {
      this.title = 'Received'
      this.status = 'B';
    } else if (this.stage == 'delivered') {
      this.title = 'Delivered'
      this.status = 'C';
    } else if (this.stage == 'approved') {
      this.title = 'Approved'
      this.status = 'A';
    } else if (this.stage == 'picked') {
      this.title = 'Picked'
      this.status = 'P';
    }
    let filter = {
      merchant_id: Number(this.storage.user.profile_id),
      order_status: this.status
    }
    console.log("Filter",filter);
    this.service.list_merchant(filter).subscribe(res => {
      this.corderslist = res.rows;
      console.log('Orders -- ', this.corderslist);
      // this.corderslist.sort((a, b) => new Date(b.order_date.updatedAt).getTime() - new Date(a.order_detail.updatedAt).getTime());
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
    });
    if(this.stage == "received"){
      this.alter_stage = "approved";
      this.alt_title = "Approved";
      this.fetch_history("A");
    }else if(this.stage == "approved"){
      this.alter_stage = "picked"
      this.alt_title = "Picked";
      this.fetch_history("P");
    }else if(this.stage == "picked"){
      this.alter_stage = "delivered"
      this.alt_title = "Delivered";
      this.fetch_history("D");
    }else if(this.stage == "delivered"){
      this.alter_stage = "Cancelled"
      this.alt_title = "Cancelled";
      this.fetch_history("C");
    }
  }


  fetch_history(data){
    let filter = {
      merchant_id: Number(this.storage.user.profile_id),
      order_status: data
    }
    this.service.list_merchant(filter).subscribe(res => {
      this.history_list = res.rows;
      console.log('Orders -- ', this.history_list);
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
    });
  }




  // loadData() {
  //   let filter = {
  //     merchant_id: Number(this.storage.user.profile_id)
  //   }
  //   this.service.list_merchant(filter).subscribe(res => {
  //     this.corderslist = [];
  //     let temp_data = res.rows;
  //     for(let a = 0 ; a < temp_data.length ; a ++){
  //       if(a == 0){
  //         let tem = temp_data[0];
  //         let c = {
  //            order_detail : tem,
  //            order_value : tem.prod_total_price,
  //            product_details : [],
  //            order_qty : tem.prod_qty,
  //            view_status : false
  //         }
  //         c.product_details.push(tem);
  //         this.corderslist.push(c);
  //       }else{
  //         let datas = [];
  //         datas = this.corderslist;
  //         var check_status = 0;
  //         let tem = temp_data[a];
  //         for(let c = 0 ; c < datas.length ; c ++){
  //           if(datas[c].order_detail.order_id == temp_data[a].order_id){
  //             datas[c].order_value = datas[c].order_value + temp_data[a].prod_total_price,
  //             datas[c].order_qty = datas[c].order_qty + temp_data[a].prod_qty;
  //             check_status = 1;
  //           }
  //           if(c == datas.length - 1){
  //             if(check_status == 0){
  //            let tem = temp_data[a];
  //            let c = {
  //            order_detail : tem,
  //            order_value : tem.prod_total_price,
  //            product_details : [],
  //            order_qty : tem.prod_qty,
  //            view_status : false
  //            }
  //            c.product_details.push(tem);
  //            this.corderslist.push(c);
  //             }else{
  //               this.corderslist[c].product_details.push(tem);
  //             }
  //           }
  //         }
  //       }
  //       if(a == temp_data.length - 1 ){
  //          console.log(this.corderslist);
  //          this.final_output = this.corderslist;
  //       }
  //     }
  //     this.remove_index();
  //   }, err => {
  //     console.log(err);
  //     // this.notify.showError(err, "LOGIN");
  //   });
  // }

  remove_index(){
    for(let a  = 0 ; a < this.corderslist.length ; a ++){
      if(a !== 0){
        console.log(this.corderslist[a]);
        this.corderslist[a].product_details.sort((a, b) => (a.product.prod_name > b.product.prod_name) ? 1 : -1);
        this.corderslist[a].order_value = this.corderslist[a].order_value - this.corderslist[a].order_detail.prod_total_price
        this.corderslist[a].order_qty = this.corderslist[a].order_qty - this.corderslist[a].order_detail.prod_qty;
        this.corderslist[a].product_details.splice(0,1);
      }
    }
    

    this.count_cal();
    this.filter_status(this.status_one, this.status_two);
    // this.histroy_list();
 }


 count_cal(){
   console.log(this.final_output);
   this.confirm_count = 0;
   this.prepare_count = 0;
   this.deliver_count = 0; 
   this.picked_count = 0;
   for(let a  = 0 ; a < this.final_output.length; a ++){
     console.log(this.final_output[a].order_detail.order_dtl_status); 
    if(this.final_output[a].order_detail.order_dtl_status == 'B'){
      this.confirm_count = this.confirm_count + 1;
    }
    if(this.final_output[a].order_detail.order_dtl_status == 'A'){
      this.prepare_count = this.prepare_count + 1;
    }
    if(this.final_output[a].order_detail.order_dtl_status == 'C'){
      this.deliver_count = this.deliver_count + 1;
    }
    if(this.final_output[a].order_detail.order_dtl_status == 'P'){
      this.picked_count = this.picked_count + 1;
    }
    if(this.final_output[a].order_detail.order_dtl_status == 'D'){
      this.deliver_count = this.deliver_count + 1;
    }
    this.final_output[a].product_details.sort((a, b) => (a.product.prod_name > b.product.prod_name) ? 1 : -1);

   }



 }


  edit(cat_id, cat_name) {
    let cat_data = {
      cat_id: cat_id,
      cat_name: cat_name
    }
    localStorage.setItem('cat_data', JSON.stringify(cat_data));
    this.router.navigateByUrl('/merchant/update_category');
  }

  statusupdate(data, id) {
    console.log(data);
    if (data == 'A') {
      let a = {
        cat_status: data,
        cat_id: id
      }
      this.service.update_status(a).subscribe(res => {
        console.log("Updated Successfully");
        this.loadData();
      }, err => {
      });
    }
    if (data == 'B') {
      let a = {
        cat_status: data,
        cat_id: id
      }
      this.service.update_status(a).subscribe(res => {
        console.log("Update Successfully");
        this.loadData();
      }, err => {
      });
    }
  }

  cat_delete(_id) {
    this.service.delete(_id).subscribe(res => {
      console.log("Update Successfully");
      this.loadData();
    }, err => {
    });
  }

  updatestatus(data, order_detail) {
    console.log(data, order_detail.product_details.length);
    // order_detail = order_detail.order_detail;
   for(let a = 0 ; a < order_detail.product_details.length; a++){
     let order_id = order_detail.product_details[a].order_dtl_id;
     if (data == 'Accept') {
      let a = {
        order_dtl_status: "A",
        order_dtl_id: order_id
      }
      console.log(a);
      this.service.update_status(a).subscribe(res => {
        console.log("Update Successfully");
        // this.ngOnInit();
      }, err => {
      });
    }
    else if (data == 'Cancel') {
      let a = {
        order_dtl_status: "C",
        order_dtl_id: order_id
      }
      console.log(a);
      this.service.update_status(a).subscribe(res => {
        console.log("Update Successfully");
        // this.ngOnInit();
      }, err => {
      });
    }
    else if (data == 'Pick_Delivery') {
      let a = {
        order_dtl_status: "P",
        order_dtl_id: order_id
      }
      console.log(a);
      this.service.update_status(a).subscribe(res => {
        console.log("Update Successfully");
        // this.ngOnInit();
      }, err => {
      });
    }

    else if (data == 'Delivered') {
      let a = {
        order_dtl_status: "D",
        order_dtl_id: order_id
      }
      console.log(a);
      this.service.update_status(a).subscribe(res => {
        console.log("Update Successfully");
        // this.ngOnInit();
      }, err => {
      });
    }
    if(a == order_detail.product_details.length - 1){
      this.loadData();
    }

   }
    
  }


  view(index){
    console.log(index,this.previous_index);
    
    // console.log(this.previous_index);
    // console.log(index);
   if(this.previous_index == undefined){
    this.corderslist[index].view_status = true;
    this.previous_index = index;
   }else if(index == this.previous_index){
     if(this.corderslist[index].view_status == false){
      this.corderslist[index].view_status = true;
     }else{
      this.corderslist[index].view_status = false;
     }
    }
   else{
    this.corderslist[this.previous_index].view_status = false;
    this.corderslist[index].view_status = true;
    this.previous_index = index;
   }
  }


  filter_status(status,secstatus){
    console.log(status,secstatus);
        if(status == 'B' && secstatus == 'A'){
          this.stage = 'received';
          this.loadData();
        }else if(status == 'A' && secstatus == 'P'){
          this.stage = 'approved';
          this.loadData();
        }else if(status == 'P' && secstatus == 'D'){
          this.stage = 'picked';
          this.loadData();
        }else if(status == 'D' && secstatus == 'C'){
          this.stage = 'delivered';
          this.loadData();
        }
  }



  // filter_status(status,secstatus){
  //   console.log(status,secstatus);
  //   this.status_one = status;
  //   this.status_two = secstatus;
  //   if(status == 'B' && secstatus == 'A'){
  //    this.select_value = 'Order Confirmation'
  //   }else if(status == 'A' && secstatus == 'P'){
  //     this.select_value = 'Order Preparing'
  //   }else if(status == 'P' && secstatus == 'D'){
  //     this.select_value = 'Rider Picked'
  //   }else if(status == 'D' && secstatus == 'C'){
  //     this.select_value = 'Delivered & Cancelled'
  //   }
  //   this.corderslist = [];
  //   this.history_list = [];
  //   this.corderslist = this.final_output;
  //   let temp_data  = this.corderslist;
  //   this.corderslist = [];
  //   for(let a  = 0; a < temp_data.length ; a ++){
  //     if(temp_data[a].order_detail.order_dtl_status == status){
  //       this.corderslist.push(temp_data[a]);
  //     }
  //     if(temp_data[a].order_detail.order_dtl_status == secstatus){
  //       this.history_list.push(temp_data[a]);
  //     }
  //   }
  //   console.log(this.corderslist);
  //   console.log(this.history_list);
  //   this.history_list.sort((a, b) => new Date(b.order_detail.updatedAt).getTime() - new Date(a.order_detail.updatedAt).getTime());
  //   this.corderslist.sort((a, b) => new Date(b.order_detail.updatedAt).getTime() - new Date(a.order_detail.updatedAt).getTime());

  // }




  sortFunc (a, b) {
    console.log(a.order_id,b.order_id);
    return a.order_id - b.order_id
  }




}


