import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authConfig } from '../../_core/configs/property.config';
import { AuthService } from '../../_core/services/auth.service';
import { ConfirmPasswordValidator } from '../../_core/utils/confirm-password.validator';
import { LocalStorage } from '../../_core/_data/localstorage';
import { ToastrManager } from 'ng6-toastr-notifications';
import { countrycode } from '../../../app/countrycode'
import { ProfileService } from 'src/app/_core/services/profile.service';

@Component({
  selector: 'app-merch-edit-profile',
  templateUrl: './merch-edit-profile.component.html',
  styleUrls: ['./merch-edit-profile.component.scss'],
})
export class MerchEditProfileComponent implements OnInit {

  otp_check = true;
  otp_load = false;
  otp_error = false;
  otp_error_msg = '';
  otp_value = '';


  checkstatus : boolean = false;

  email_error  = false;
  contact_error = false;
  terms = false;
  error_msg = false;
  errortext = ''
  contact_error_msg = '';
  email_error_msg = '';


   






  constructor(
    private storage: LocalStorage,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    public toastr: ToastrManager,
    public countrycode : countrycode,
    private profileservice: ProfileService,
  ) {
    // if (this.storage.user) {
    //   this.router.navigateByUrl('/dashboard');
    // }
  }
  loading = false;
  country_codes : string;
  registerForm: FormGroup;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  contact_no = ''

  email_looad : boolean = false;
  number_load : boolean = false;
  profile_details : any;


  ngOnInit() {

    this.country_codes = "+65";
    var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
    this.profileservice.profile_view(reguser.profile_id).subscribe((res:any) => {
      console.log(res);
      this.profile_details = res
      let code = res.profile_contact.split("-");
      this.country_codes = code[0];
      this.contact_no = code[1];
      this.loading = true;
      this.initForm();
      this.resend_otp();
      });



    // console.log(this.countrycode.country);
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      country_code: [''],
      email: [''],
      contactno: [''],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.terms = false;
      this.submitted = true;
      // stop here if form is invalid
      console.log(this.registerForm.invalid);
      if (this.registerForm.invalid) {
        return;
      }
      const controls = this.registerForm.controls;
      var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
      const registerData = {
        profile_first_name: controls.first_name.value,
        profile_last_name : controls.last_name.value,
        profile_id: reguser.profile_id,
      };
      console.log(registerData);
      this.auth.register_profile(registerData).subscribe((res: any) => {
        console.log(res);
        // localStorage.removeItem(authConfig.REGISTERED_PROFILE);
        // this.toastr.successToastr('Registered Succesfully');
        this.router.navigateByUrl("merchant_panel/dashboard");
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        this.toastr.warningToastr(err);
        // this.notify.showError(err, "LOGIN");
      });
   
  




  }



  check_email(){
    let a = {
    }
    this.auth.signup(a).subscribe((res: any) => {
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
    });
  }

  ngOnDestroy(): void {
    this.submitted = false;
  }

  toggleEditable(event) {
    console.log(event.target.checked);
    this.checkstatus = event.target.checked;
} 

terms_con(){
  window.open('/account/privacypolicy', '_blank');
}


change(event) {
  console.log(event);
    let profile_contact = this.country_codes+"-"+event
  console.log(profile_contact);
  this.auth.checkmobile(profile_contact).subscribe(res => {
    console.log("test");
    console.log(res);
    if(res == null){
      this.contact_error = false;
      this.number_load = false;
    }else{
      this.contact_error = true;
      this.number_load = false;
      if(res.role_id == 2){
        this.contact_error_msg = "This mobile number already with us a Merchant"
      }
      // this.toastr.warningToastr("This mobile number already with us");
      // this.contact_no = '';
    }
    // this.profile = res;
    // this.loadUsers(this.profile.role_id);
  });


}


searchInterest() {
  this.email_looad = true;
  const controls = this.registerForm.controls;
  let wordSearch = controls.email.value;
  setTimeout(() => {
      if (wordSearch == controls.email.value) {
          if (controls.email.value) {
            console.log(controls.email.value);
            this.checkemail();
              //função que irá retornar sua lista de objetos
          }else{
              //code here
          }
      }
  }, 2000);
}


checkemail(){
  const controls = this.registerForm.controls;
   let Data = {
    email : controls.email.value,
   }
  this.auth.checkemail(Data).subscribe(res => {
    console.log(res);
    if(res.profile.role_id == 2){
      this.email_error_msg = "This email already with us a Merchant"
    }
    if(res.profile.role_id == 5){
      this.email_error_msg = "This email already with us a Customer"
    }
    this.email_error = true;
    this.email_looad = false;
    // this.toastr.successToastr('This Email id already Registerd');
    // this.notify.showSuccess("Logged in successfully", "LOGIN");
  }, err => {
    console.log(err);
    this.email_error = false;
    this.email_looad = false;
    // this.toastr.warningToastr('This Email id already Registerd');
    // this.toastr.warningToastr(err);
    // this.notify.showError(err, "LOGIN");
  });
 }


 searchInterestno(){
   this.number_load = true;
  const controls = this.registerForm.controls;
  let wordSearch = controls.contactno.value;
  setTimeout(() => {
      if (wordSearch == controls.contactno.value) {
          if (controls.contactno.value) {
            console.log(controls.contactno.value);
            this.change(controls.contactno.value);
              //função que irá retornar sua lista de objetos
          }else{
              //code here
          }
      }
  }, 2000);
}



sumbitotp(){
  var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
  // const controls = this.otpForm.controls;
  console.log(this.otp_value);
  const otpData = {
    user_id: reguser.user_id,
    otp: this.otp_value
  };
  this.auth.verifyotp(otpData).subscribe(res => {
    this.otp_load = false;
    this.otp_error = true;
    this.otp_check = false;
    // this.toastr.successToastr('OTP Verified');
    // this.router.navigateByUrl('/account/register');
    // this.notify.showSuccess("Logged in successfully", "LOGIN");
  }, err => {
    console.log(err);
    // this.toastr.warningToastr(err);
    this.otp_error = true;
    this.otp_load = false;
    this.otp_check = true;
    this.otp_error_msg = err;
    // this.notify.showError(err, "LOGIN");
  });
}

resend_otp(){
  this.otp_load = true;
  var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
  console.log(reguser);
let a = {
  email : reguser.email,
}
console.log(a);
this.auth.resend_otp(a).subscribe(res => {
  console.log(res);
  // alert(res.message);
  this.otp_error = true;
  this.otp_error_msg = res.message;
  this.otp_load = false;
  // this.router.navigateByUrl('/my-cart');
}, err => {
  // this.notify.showError(err, "LOGIN");
});
}

bussiness_name_tag_action(){
setTimeout(() => {
  this.otp_error = false;
  this.otp_error_msg = "";
  this.otp_load = false;
}, 1000);
}
  


}
