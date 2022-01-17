import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authConfig } from 'src/app/_core/configs/property.config';
import { AuthService } from 'src/app/_core/services/auth.service';
import { ConfirmPasswordValidator } from 'src/app/_core/utils/confirm-password.validator';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent implements OnInit {

  otp_check = true;
  otp_load = false;
  otp_error = false;
  otp_error_msg = '';
  otp_value = '';


  constructor(
    private storage: LocalStorage,
    private router: Router,
    public toastr: ToastrManager,
    private formBuilder: FormBuilder,
    private auth: AuthService,
  ) {
    // if (this.storage.user) {
    //   this.router.navigateByUrl('/dashboard');
    // }
  }
  resetpswdForm: FormGroup;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  pass_looad = false;
  pass_error = false;


  ngOnInit() {
    this.initForm();
    this.resend_otp();
    var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
    console.log(reguser);
  }

  initForm() {
    this.resetpswdForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.resetpswdForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.resetpswdForm.invalid) {
      return;
    }
    var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
    const controls = this.resetpswdForm.controls;
    const pswdData = {
      password: controls.password.value,
      user_id: reguser.user_id
    };

    this.auth.resetpassword(pswdData).subscribe((res: any) => {
      console.log(res);
      // this.toastr.successToastr("Password Changed Successfully");
      this.router.navigateByUrl("merchant_panel/dashboard");
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      this.toastr.warningToastr(err);
      // this.notify.showError(err, "LOGIN");
    });
  }

  ngOnDestroy(): void {
    this.submitted = false;
  }



  searchInterest() {
    this.pass_looad = true;
    const controls = this.resetpswdForm.controls;
    let wordSearch = controls.cpassword.value;
    setTimeout(() => {
        if (wordSearch == controls.cpassword.value) {
            if (controls.cpassword.value) {
              console.log(controls.cpassword.value);
              this.checkemail();
                //função que irá retornar sua lista de objetos
            }else{
                //code here
            }
        }
    }, 2000);
  }


  checkemail(){
    var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
    const controls = this.resetpswdForm.controls;
     const authData = {
      email: reguser.email,
      password: controls.cpassword.value
    };
    this.auth.login(authData).subscribe(res => {
     console.log(res);
     this.pass_looad = false;
     this.pass_error = false;
    }, err => {
      console.log(err);
      this.pass_looad = false;
      this.pass_error = true;
    });
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
