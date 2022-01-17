import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { authConfig } from 'src/app/_core/configs/property.config';
import { AuthService } from 'src/app/_core/services/auth.service';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { PromocodeService } from 'src/app/_core/services/promocode.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';



@Component({
  selector: 'app-merch-promo-code',
  templateUrl: './merch-promo-code.component.html',
  styleUrls: ['./merch-promo-code.component.scss'],
})
export class MerchPromoCodeComponent implements OnInit {

 /////Value data/////
  promocode_type = 'amount';
  promocode_value = 0;
  promocode_mini_value = 0;
  promocode_until = '';
  promocode_usage = 1;
  promocode_img = 'https://careerindemo.s3.ap-southeast-1.amazonaws.com/profileimgs/1130969969-Screenshot-2021-11-14%20at%2011.02.27%20PM.png';
  merchant_id = '';
  idprofileone : any;
  promocode_id = '';

  Active_promo_code_list = [];
  De_active_promo_code_list = [];
  Exp_promo_code_list = [];

 ////Error value //////

 promocode_type_error = '';
 promocode_value_error = '';
 promocode_until_error = '';
 promocode_usage_error = '';
 promocode_img_error = '';
 promocode_mini_value_error = '';
  
 color_code = ['red','green','blue'];



  constructor(
    private storage: LocalStorage,
    private router: Router,
    private profileservice: ProfileService,
    public toastr: ToastrManager,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private service: PromocodeService,

  ) { }

  ngOnInit() {
    this.getlist_promocode();
    this.clear_error();
    this.clear_data();
  }



    selectImgidprofileone(event) {
    this.idprofileone = event.target.files[0];
    this.idprofileoneuploadImg()
  }


  idprofileoneuploadImg() {
    var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
    console.log(reguser);
    if (this.idprofileone) {
      this.profileservice.idprofileone(1, this.idprofileone).subscribe(res => {
        console.log(res);
        this.promocode_img = ""+res.url;
        // this.router.navigateByUrl('dashboard');
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
    } else {
      alert('Select Image');
    }
  }


  submit(){
    console.log(
      this.promocode_type,
      this.promocode_value,
      this.promocode_mini_value ,
      this.promocode_until ,
      this.promocode_usage,
      this.promocode_img ,
      this.merchant_id ,
    )

    let a = {
      merchant_id : this.storage.user.profile_id,
      promocode_type : this.promocode_type,
      promocode_value : this.promocode_value,
      promocode_mini_value : this.promocode_mini_value,
      promocode_until : this.promocode_until,
      promocode_usage : this.promocode_usage,
      promocode_img : this.promocode_img,
    }


    this.service.create(a).subscribe(res => {
      console.log(res);
      alert("Created successfully");
      this.ngOnInit();
      // this.router.navigateByUrl('/merchant/products-list');
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });



  }

  check_value(){
    this.clear_error();
    var check_status = false;
    if(this.promocode_type == ''){
      this.promocode_type_error = 'Please Enter The value';
      var check_status = true;
    }
    if(this.promocode_type == 'amount'){
      if(this.promocode_value > this.promocode_mini_value){
        this.promocode_mini_value_error = 'Minimum Order Value is less then offer value';
        var check_status = true;
      }
    }


    if(this.promocode_value == 0){
      this.promocode_value_error = 'Please Enter The value';
      var check_status = true;
    }

    if(this.promocode_mini_value == 0){
      this.promocode_mini_value_error = 'Please Enter The value';
      var check_status = true;
    }

    if(this.promocode_until == ''){
      this.promocode_until_error = 'Please Enter The value';
      var check_status = true;
    }

    if(this.promocode_usage == 0){
      this.promocode_usage_error = 'Please Enter The value';
      var check_status = true;
    }
  
    if(new Date(this.promocode_until)  <  new Date()){
      this.promocode_until_error = 'Please Select Upcoming date';
      var check_status = true;
    }

    if(this.promocode_img == ''){
      this.promocode_img_error = 'Please Enter The value';
      var check_status = true;
    }

    if(check_status == false){
      this.submit();
    }

  }


  clear_error(){
    this.promocode_type_error = '';
    this.promocode_value_error = '';
    this.promocode_until_error = '';
    this.promocode_usage_error = '';
    this.promocode_img_error = '';
    this.promocode_mini_value_error = '';
  }

  clear_data(){

    this.promocode_type = 'amount';
    this.promocode_value = 0;
    this.promocode_mini_value = 0;
    this.promocode_until = '';
    this.promocode_usage = 1;
    this.promocode_img = '';
    this.merchant_id = '';
  }


  getlist_promocode(){
    let a = 1
    this.service.view(a).subscribe(res => {
      console.log(res.rows);
      this.Active_promo_code_list = [];
      this.De_active_promo_code_list = [];
      this.Exp_promo_code_list = [];
      var value = 0;
      res.rows.forEach(element => {
        if(element.promocode_status !== "Exp"){
          console.log(new Date(),new Date(element.promocode_until));
          if(new Date() > new Date(element.promocode_until)){
            element.promocode_status = "Exp";
            console.log(true);
            this.exp_data_change(element.promocode_id);
            element.color = value;
            value = value + 1;
            this.Exp_promo_code_list.push(element);
            if(value == 3){
              value = 0;
            }
          }else{
          element.color = value;
          value = value + 1;
          this.Active_promo_code_list.push(element);
          if(value == 3){
            value = 0;
          }
          }
        } 
        else if(element.promocode_status == "Exp"){
          element.color = value;
          value = value + 1;
          this.Exp_promo_code_list.push(element);
          if(value == 3){
            value = 0;
          }
        } 
      });
      console.log(res.rows);
      // this.promo_code_list = res.rows; 
      // this.router.navigateByUrl('/merchant/products-list');
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });
  }


  status_change(data,index){
    console.log(data);
    this.promocode_id = this.Active_promo_code_list[index].promocode_id;
    let datas = {
      promocode_id : this.promocode_id,
      promocode_status : data
    }
    this.service.update_status(datas).subscribe(res => {
      console.log(res);
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });
  }


  exp_data_change(index){
    this.promocode_id = index;
    let datas = {
      promocode_id : this.promocode_id
    }
    this.service.update_date(datas).subscribe(res => {
      console.log(res);
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });

  }

}
