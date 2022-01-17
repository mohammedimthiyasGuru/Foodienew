// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { LocalStorage } from 'src/_core/_data/localstorage';


import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../_core/services/auth.service';
import { LocalStorage } from '../../../_core/_data/localstorage';

import { CustomerService } from '../../../_core/services/customer.service';

import { MustMatch } from '../../auth/must-match.validator';
import { ToastrManager } from 'ng6-toastr-notifications';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {

  fp_success:Boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private storage: LocalStorage,
    private StatusBar : StatusBar,
    public toastr: ToastrManager,
    private CustomerService: CustomerService,
  ) {
    this.StatusBar.show();
    this.StatusBar.backgroundColorByName('white');
    this.StatusBar.styleDefault();
  }


  private returnUrl: any;

  loginForm: FormGroup;
  submitted = false;

  ngOnInit() {

    this.initForm();


    // if (this.storage.user) {
    //   this.router.navigateByUrl('/client-home');
    // }
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },{
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  get f() { return this.loginForm.controls; }


  fp_success_btn(){
    this.fp_success = true;
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    const controls = this.loginForm.controls;
    const _profile = {
      user_id : this.storage.temp_user_info,
      password : controls.password.value,
    };
console.log(_profile);
    // this.storage.user_info = _profile;
    this.CustomerService.reset_password(_profile).subscribe(res => {
    console.log(res);
    this.storage.user = res;
    // alert("Register Successfull");
    this.toastr.successToastr('Password Changes Successfully');
    this.fp_success_btn();
    // this.router.navigateByUrl('/auth/email-verification');
    }, err => {
      console.log(err);
      if(err == 'Something went wrong'){
        this.toastr.errorToastr(err);
      }
      if(err.message !== undefined){
        this.toastr.errorToastr(err.message);
      }
    });
  }
}
