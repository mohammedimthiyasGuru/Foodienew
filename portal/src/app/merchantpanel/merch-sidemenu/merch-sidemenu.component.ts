import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-merch-sidemenu',
  templateUrl: './merch-sidemenu.component.html',
  styleUrls: ['./merch-sidemenu.component.scss'],
})
export class MerchSidemenuComponent implements OnInit {

  currentUser: any;
  sidemenu : boolean;

  constructor(
    private storage: LocalStorage,
    private router: Router,
    private route: ActivatedRoute,
    


  ) {

   let temp = this.storage.menu_setting;
   
  //  this.storage.menu_setting = true;
  this.sidemenu = temp.status;
  console.log(this.sidemenu);
   }

  ngOnInit() {
    this.currentUser = this.storage.user;
  }

  menu_action(data){
    console.log(data);
    console.log(this.sidemenu);
    if(data == 'small'){
      this.storage.menu_setting = {status : true};
      this.sidemenu = true;
    }
    else if(data == 'big'){
      this.storage.menu_setting = {status : false};
      this.sidemenu = false;
      console.log(this.storage.menu_setting);
    }
  }


  action1(){
    this.router.navigateByUrl('/merchant_panel/dashboard');
  }
  action2(){
    this.router.navigateByUrl('/merchant_panel/orderdetails');
  }
  action3(){
    this.router.navigateByUrl('/merchant_panel/productcreate');
  }
  action4(){
    this.router.navigateByUrl('/merchant_panel/productlist');
  }
  action5(){
    this.router.navigateByUrl('/merchant_panel/chat');
  }
  action6(){
    this.router.navigateByUrl('/merchant_panel/wallett');
  }
  action7(){
    this.router.navigateByUrl('/merchant_panel/creditreport');
  }
  action8(){
    this.router.navigateByUrl('/merchant_panel/debitreport');
  }
  action9(){
    this.router.navigateByUrl('/merchant_panel/golive/'+this.currentUser.profile_id);
  }
  
}
