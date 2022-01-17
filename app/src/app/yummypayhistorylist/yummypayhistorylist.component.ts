import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City_list } from '../../assets/xlsxtojson'
import { LocalStorage } from 'src/_core/_data/localstorage';
import { CommonService } from 'src/_core/services/common.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Input , OnChanges , Output , EventEmitter} from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-yummypayhistorylist',
  templateUrl: './yummypayhistorylist.component.html',
  styleUrls: ['./yummypayhistorylist.component.scss'],
})
export class YummypayhistorylistComponent {
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

  this.service.fetch_transction(this.storage.user).subscribe((res:any) => {
    this.employeedata = [];
    for(let a = 0 ;a < res.rows.length; a ++){
        res.rows[a].show_status = false;
        this.employeedata.push(res.rows[a]);
        this.temp_data.push(res.rows[a]);
    }
    });

}


back_action(){
  this.router.navigate([this.storage.routes_text]);
}


filter(){
 this.employeedata = [];
 console.log(this.start_date,this.end_date);
 for(let a = 0 ; a < this.temp_data.length ; a++){
  if (new Date(this.temp_data[a].createdAt) > new Date(this.start_date) && new Date(this.temp_data[a].createdAt) < new Date(this.end_date)) {
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


show_trans_detail(index){
  this.clear_trans_status();
  this.employeedata[index].show_status = true;
}

clear_trans_status(){
  this.employeedata.forEach(element => {
    element.show_status = false;
  });
}



}
