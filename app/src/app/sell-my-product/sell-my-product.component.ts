import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../_core/services/auth.service';
import { LocalStorage } from '../../_core/_data/localstorage';
import { CommonService } from '../../_core/services/common.service';
import { authConfig } from 'src/_core/configs/property.config';
import { ToastrManager } from 'ng6-toastr-notifications';

import { DomSanitizer } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-sell-my-product',
  templateUrl: './sell-my-product.component.html',
  styleUrls: ['./sell-my-product.component.scss'],
})
export class SellMyProductComponent implements OnInit {


  clickedImage: String = '../../assets/profile_user.jpg';

  view_otp =  false;
  show_image = false;
  show_alert = false;


  cat_name = '';
  sub_cat = '';
  final_sub_cat = [];
  idprofileone : any;

  location_check = false;
  location_text = '';
  location_lat = 0;
  location_long = 0;
  profile_img = '';
  name = '';
  email_id = '';
  phone_no : any;
  passport = '';
  certificate = '';
  cat_text = '';
  sub_cat_text = '';
  otp = '';
  user_id = '';
  sellproduct_status :"Pending";

  temp_otp = '';

  check_status = 'State 1';



  cat_list = [
    {
      _id : 1,
      cat_name : 'cat one'
    },
    {
      _id : 2,
      cat_name : 'cat two'
    },
    {
      _id : 3,
      cat_name : 'cat three'
    },
    {
      _id : 4,
      cat_name : 'cat four'
    },
    {
      _id : 5,
      cat_name : 'cat five'
    }
  ];
  sub_cat_list = [
    {
      _id : 0,
      cat_id : 'cat one',
      sub_cat_name : 'Sub 1'
    },
    {
      _id : 0,
      cat_id : 'cat one',
      sub_cat_name : 'Sub 2'
    },
    {
      _id : 0,
      cat_id : 'cat one',
      sub_cat_name : 'Sub 3'
    },
    {
      _id : 0,
      cat_id : 'cat one',
      sub_cat_name : 'Sub 4'
    },
    {
      _id : 0,
      cat_id : 'cat two',
      sub_cat_name : 'Sub 01'
    },
    {
      _id : 0,
      cat_id : 'cat two',
      sub_cat_name : 'Sub 02'
    },
    {
      _id : 0,
      cat_id : 'cat two',
      sub_cat_name : 'Sub 03'
    },
    {
      _id : 0,
      cat_id : 'cat three',
      sub_cat_name : 'Sub 04'
    },
    {
      _id : 0,
      cat_id : 'cat three',
      sub_cat_name : 'Sub 05'
    }
  ]



  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }



    constructor(
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute,
    private storage: LocalStorage,
    private service: CommonService,
    private camera: Camera,
    private _sanitizer: DomSanitizer,
    private StatusBar : StatusBar,
  ) {
    this.StatusBar.show();
    this.StatusBar.backgroundColorByName('white');
    this.StatusBar.styleDefault();
    // window.location.reload();
   }


  // constructor(private camera: Camera) { }



  ngOnInit() {


    let a = this.storage.user_location;
    console.log(a);
    if (!a) {
      this.router.navigateByUrl('/location');
    } else {
      // this.location_detail = res;
      this.location_text = a.address_text;
      this.location_lat = a.lat;
      this.location_long = a.lng;
    }



  }


  captureImage() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.check_status = 'State 2';
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      // this.clickedImage = base64Image;
      this.clickedImage = ""+base64Image;
      this.check_status = 'State 3';
      console.log(this.clickedImage);
      const base64 = ""+base64Image;
      const imageName = 'Image'+Math.floor(100000 + Math.random() * 900000);
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
      this.clickedImage = ""+imageFile;
      this.check_status = 'State 4';
      this.check_status = ""+this.storage.user.profile_id,""+imageFile;
      this.service.idprofileone(this.storage.user.profile_id,imageFile).subscribe(res => {
        this.clickedImage = "Value in";
        this.check_status = 'State 5';
        console.log(res);
         this.clickedImage = res.url;
        // this.attached_tag = ""+this.idprofileone.name;
        // this.router.navigateByUrl('dashboard');
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }



  change_location(){
    this.storage.routes_text = '/sell_by_product';
    this.router.navigate(['/change_location']);
   }


   cat_onChange(data){
     console.log(this.cat_name);
     this.final_sub_cat = [];
     this.sub_cat_list.forEach(element => {
       if(element.cat_id == this.cat_name){
        this.final_sub_cat.push(element);
       }
     });
   }

   selectImgidprofileone(event) {
    this.idprofileone = event.target.files[0];
    this.idprofileoneuploadImg()
  }


  idprofileoneuploadImg() {
    var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
    if (this.idprofileone) {
      this.service.idprofileone(this.storage.user.profile_id,this.idprofileone).subscribe(res => {
        console.log(res);
         this.certificate = res.url;
        // this.attached_tag = ""+this.idprofileone.name;
        // this.router.navigateByUrl('dashboard');
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
    } else {
      alert('Select Image');
    }
  }

  submit_otp(){
    if(""+this.temp_otp !== ""+this.otp){
      this.toastr.warningToastr("Invalid OTP");
    }else{
      let a = {
        otp : ""+this.otp
      }
      this.service.update_sellproduct(a).subscribe(res => {
        console.log(res);
        this.toastr.successToastr("Otp Verified Successfully");
        this.view_otp = false;
        this.router.navigate(['/user_profile']);
      }, err => {
      this.toastr.warningToastr(err);
      });




    }
  }



   submit_data(){
    console.log(this.location_check);
    if(this.location_check == false){
     this.toastr.warningToastr("Please select address tic");
    }else if(this.location_text == '' && this.location_lat == 0 && this.location_long == 0){
      this.toastr.warningToastr("Location Not set correctly, please select again");
    }
    // else if(this.clickedImage == undefined || this.clickedImage == ''){
    //   this.toastr.warningToastr("add image");
    // }
    else if(this.name == ''){
      this.toastr.warningToastr("Enter Name");
    }else if(this.email_id == ''){
      this.toastr.warningToastr("Enter Valid Email");
    }else if(this.phone_no == 0){
      this.toastr.warningToastr("Enter Valid Number");
    }else if(this.passport == ''){
      this.toastr.warningToastr("Enter Passport");
    }else if(this.certificate == ''){
      this.toastr.warningToastr("Add Certificate");
    }else if(this.cat_name == ''){
      this.toastr.warningToastr("Select Cat");
    }else if(this.sub_cat == ''){
      this.toastr.warningToastr("Select Sub Cat");
    }else{
    this.otp = ""+Math.floor(100000 + Math.random() * 900000);
    let a = {
      location_text : this.location_text,
      location_lat : this.location_lat,
      location_long : this.location_long,
      profile_img : "",
      name : this.name,
      email_id : this.email_id,
      phone_no : this.phone_no,
      passport : this.passport,
      certificate : this.certificate,
      cat_text : this.cat_name,
      sub_cat_text : this.sub_cat,
      otp : this.otp,
      user_id : this.storage.user.profile_id,
      sellproduct_status : 'Pending'
    }
    console.log(a);
    this.service.add_sellproduct(a).subscribe(res => {
      console.log(res);
      this.toastr.successToastr("Submitted");
      this.view_otp = true;
    }, err => {
    this.toastr.warningToastr(err);
    });
    }


   }



   dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
 }


 back_action(){
  this.router.navigate(['/user_profile']);
 }










}
