import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../_core/services/auth.service';
import { LocalStorage } from '../../../_core/_data/localstorage';
import { CustomerService } from '../../../_core/services/customer.service';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {


  private returnUrl: any;

  loginForm: FormGroup;
  submitted = false;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor(

    private router: Router,
    private toastr: ToastrManager,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private storage: LocalStorage,
    private CustomerService: CustomerService,
  ) { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
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
    };
    console.log(authData);
    this.storage.user_info = authData;
    this.CustomerService.forgotpassword(authData).subscribe(res => {
      console.log(res);
      if(res){
        this.toastr.successToastr(res.message);
        this.storage.temp_user_info = res.user_id;
        console.log(this.storage.temp_user_info);
        this.router.navigateByUrl('/auth/forgot_email_verification');
      }else{
        this.toastr.warningToastr('Something went wrong, try again');
      }
    }, err => {
      console.log(err);
      // this.notify.showError(err, "LOGIN");
      if(err == 'Email not registered with us'){
        this.toastr.errorToastr('Email not registered with us');
      }
    });
  }

  ngOnDestroy(): void {
    this.submitted = false;
  }

  // href="/auth/new-password"

  back_action(){
    this.storage.footer_text = 'HOME';
    this.router.navigate(['/auth/login']);
  }

}
