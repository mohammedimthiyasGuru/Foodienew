import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../_core/services/auth.service';
import { LocalStorage } from '../../../_core/_data/localstorage';

import { CustomerService } from '../../../_core/services/customer.service';

import { MustMatch } from '../../auth/must-match.validator';
import { ToastrManager } from 'ng6-toastr-notifications';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private storage: LocalStorage,
    public toastr: ToastrManager,
    private CustomerService: CustomerService,

  ) { }

  private returnUrl: any;

  loginForm: FormGroup;
  submitted = false;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  ngOnInit() {
    // if (this.storage.user) {
    //   this.router.navigateByUrl('/client-home');
    // }
    // this.storage.clear();
    this.initForm();

    // redirect back to the returnUrl before login
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params.returnUrl || '/dashboard';
    });
  }

  initForm() {
    this.loginForm = this.formBuilder.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactno: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },{
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
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

    const _profile = {
      role : 5 ,
      first_name: controls.firstName.value,
      last_name: controls.lastName.value,
      password : controls.password.value,
      email: controls.email.value,
      contactno: ""+controls.contactno.value,
    };
console.log(_profile);
    this.storage.user_info = _profile;
    this.CustomerService.vendor_register(_profile).subscribe(res => {
    console.log(res);
    this.storage.temp_user_info = res;
    // alert("Register Successfull");
    this.toastr.successToastr('OTP send to your email');
    this.router.navigateByUrl('/auth/email-verification');
    }, err => {
      console.log(err);
      if(err == 'Email already registered with us'){
        this.toastr.errorToastr(err);
      }
      if(err.message !== undefined){
        this.toastr.errorToastr(err.message);
      }
    });



  }

  ngOnDestroy(): void {
    this.submitted = false;
  }


  back_action(){
    this.storage.footer_text = 'HOME';
    this.router.navigate(['/auth/login']);
  }

}
