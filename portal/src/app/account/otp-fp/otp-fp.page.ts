import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authConfig } from 'src/app/_core/configs/property.config';
import { AuthService } from 'src/app/_core/services/auth.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-otp-fp',
  templateUrl: './otp-fp.page.html',
  styleUrls: ['./otp-fp.page.scss'],
})
export class OtpFpPage implements OnInit {
  otp_load = false;
  otp_error : boolean = false;
  otp_error_msg = '';
  
  constructor(
    private storage: LocalStorage,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    public toastr: ToastrManager,
  ) {
    // if (this.storage.user) {
    //   this.router.navigateByUrl('/dashboard');
    // }
  }

  otpForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  get f() { return this.otpForm.controls; }

  onSubmit() {
    this.otp_load = true;
    this.submitted = true;
    // stop here if form is invalid
    if (this.otpForm.invalid) {
      return;
    }
    var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
    console.log(reguser);
    const controls = this.otpForm.controls;
    const otpData = {
      user_id: reguser.user_id,
      otp: controls.otp.value
    };
    console.log(otpData);
    this.auth.verifypassword(otpData).subscribe(res => {
      console.log(res);
      this.otp_load = false;
      
      // this.storage.user = res.user;
      // this.storage.authToken = res.key.token;
      // this.toastr.successToastr('OTP Verified');
      this.router.navigateByUrl('/account/reset-password');
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      // this.toastr.warningToastr(err);
      this.otp_error = true;
      this.otp_error_msg = err;
      this.otp_load = false;
      // this.notify.showError(err, "LOGIN");
    });
  }

  ngOnDestroy(): void {
    this.submitted = false;
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
    // this.toastr.warningToastr(res.message);
    // this.router.navigateByUrl('/my-cart');
  }, err => {
    this.otp_error_msg = err;
    this.otp_load = false;
    // this.notify.showError(err, "LOGIN");
  });
}


}
