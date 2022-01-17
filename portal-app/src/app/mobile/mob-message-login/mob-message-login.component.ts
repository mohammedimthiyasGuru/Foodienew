import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-mob-message-login',
  templateUrl: './mob-message-login.component.html',
  styleUrls: ['./mob-message-login.component.scss'],
})
export class MobMessageLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private storage: LocalStorage,
    statusBar: StatusBar
    // public toastr: ToastrManager
  ) {

    statusBar.styleDefault();
    statusBar.overlaysWebView(false);
    statusBar.backgroundColorByHexString('#f8c333');
  }

  private returnUrl: any;
  loginForm: FormGroup;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  email_error: boolean = false;
  password_error: boolean = false;
  password_error_msg = '';
  email_loader = false;
  pass_loader = false;

  fb_token = '';

  ngOnInit() {
    console.log('login init');
    // redirect back to the returnUrl before login
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params.returnUrl || '/mob_dashboard';
      console.log('Return ------- ', this.returnUrl);

    });

    if (this.storage.user) {
      console.log('goto dashboard');

      this.router.navigateByUrl(this.returnUrl);
    }

    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.pass_loader = true;
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const controls = this.loginForm.controls;
    const authData = {
      email: controls.email.value,
      password: controls.password.value
    };
console.log(authData);

    this.auth.login(authData).subscribe(res => {
      console.log('Result - ', res);
      this.pass_loader = false;
      this.storage.user = res.user;
      this.storage.authToken = res.key.token;
      this.storage.menu_setting = { status: true };
      // this.toastr.successToastr('Login Successfully');
      // this.update_fb_token();
      this.router.navigateByUrl('/mob_dashboard');
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      console.log(err)
      this.pass_loader = false;
      // this.toastr.errorToastr(err);
      this.password_error_msg = err;
      this.password_error = true;
      // this.notify.showError(err, "LOGIN");
    });
  }

  ngOnDestroy(): void {
    this.submitted = false;
    this.pass_loader = false;
  }



  // update_fb_token(){
  //  let user_details = this.storage.user;
  //  console.log(user_details);
  //   const otpData = {
  //     user_id: user_details.user_id,
  //     fb_token: this.fb_token
  //   };
  //   console.log(otpData);
  //   this.auth.update_fb_token(otpData).subscribe(res => {
  //     console.log(res);
  //     // this.storage.user = res.user;
  //     // this.storage.authToken = res.key.token;
  //     // this.toastr.successToastr('OTP Verified');
  //     this.router.navigateByUrl('/mob_dashboard');
  //     // this.notify.showSuccess("Logged in successfully", "LOGIN");
  //   }, err => {
  //     // this.toastr.warningToastr(err);
  //     // this.notify.showError(err, "LOGIN");
  //   });
  // }



  searchInterest() {
    this.email_loader = true;
    const controls = this.loginForm.controls;
    let wordSearch = controls.email.value;
    setTimeout(() => {
      if (wordSearch == controls.email.value) {
        if (controls.email.value) {
          console.log(controls.email.value);
          this.checkemail();
          //função que irá retornar sua lista de objetos
        } else {
          //code here
        }
      }
    }, 2000);
  }

  checkemail() {
    const controls = this.loginForm.controls;
   let Data = {
    email : controls.email.value,
   }
  this.auth.checkemail(Data).subscribe(res => {
    this.email_error = false;
    this.email_loader = false;
    // this.toastr.successToastr('This Email id already Registerd');
    // this.notify.showSuccess("Logged in successfully", "LOGIN");
  }, err => {
    console.log(err);
    this.email_error = true;
    this.email_loader = false;
    // this.toastr.warningToastr('This Email id already Registerd');
    // this.toastr.warningToastr(err);
    // this.notify.showError(err, "LOGIN");
  });
  }

  searchInterest1() {
    this.pass_loader = false;
    this.password_error = false;
  }

  action1(){
    this.router.navigateByUrl('/mob_message_forgotpassword');
  }

}
