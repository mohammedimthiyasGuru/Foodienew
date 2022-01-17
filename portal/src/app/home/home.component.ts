import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authConfig } from '../_core/configs/property.config';
import { AuthService } from '../_core/services/auth.service';
import { ConfirmPasswordValidator } from '../_core/utils/confirm-password.validator';
import { LocalStorage } from '../_core/_data/localstorage';
import { ToastrManager } from 'ng6-toastr-notifications';
import { countrycode } from '../countrycode'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  
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
  ) {
    // if (this.storage.user) {
    //   this.router.navigateByUrl('/dashboard');
    // }
  }
  country_codes : string;
  registerForm: FormGroup;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  contact_no = ''

  email_looad : boolean = false;
  number_load : boolean = false;


  ngOnInit() {
    this.initForm();
    this.country_codes = "+65";
    // console.log(this.countrycode.country);
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      country_code: [''],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      contactno: ['', Validators.compose([Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(8),Validators.maxLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      cpassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    }, {
      validators: ConfirmPasswordValidator.MatchPassword
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    if(this.checkstatus == false){
      this.terms = true;
      // this.toastr.warningToastr('Please accept our terms and conditions');
    }else{
      this.terms = false;
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }
      const controls = this.registerForm.controls;
      const registerData = {
        first_name: controls.first_name.value,
        last_name: controls.last_name.value,
        email: controls.email.value,
        contactno: this.country_codes+"-"+controls.contactno.value,
        password: controls.password.value,
        role: 2 // Merchant
      };
      console.log(registerData);
      this.storage.merchant_detail = registerData;
      this.auth.signup(registerData).subscribe((res: any) => {
        res.email = controls.email.value;
        console.log(res);
        localStorage.setItem(authConfig.REGISTERED_PROFILE, JSON.stringify(res));
        // this.toastr.warningToastr("OTP send to your mail id");
        this.router.navigateByUrl("account/otp");
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        console.log(err);

        this.toastr.warningToastr(err);
        // this.notify.showError(err, "LOGIN");
      });
    }




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
        this.contact_error_msg = "This number already Exists";
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


navigate1() {
  this.router.navigateByUrl('/account/home_page');
}


navigate2() {
  this.router.navigateByUrl('/loginpage');
}

navigate3() {
  this.router.navigateByUrl('/loginpage');
}




  


}
