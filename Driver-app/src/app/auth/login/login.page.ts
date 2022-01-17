import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../_core/services/auth.service';
import { LocalStorage } from '../../../_core/_data/localstorage';
import { CustomerService } from '../../../_core/services/customer.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private storage: LocalStorage,
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

    this.initForm();

    // redirect back to the returnUrl before login
    // this.route.queryParams.subscribe(params => {
    //   this.returnUrl = params.returnUrl || '/dashboard';
    // });
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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

    this.CustomerService.login(authData).subscribe(res => {
      if(res.status == 'Failed'){;
        this.toastr.errorToastr(res.message);
      }else{
        this.toastr.successToastr('Login Successfully');
        this.storage.user = res.user;
        this.storage.authToken = res.key.token;
        // this.router.navigateByUrl('/my-cart');
        if(this.storage.routes_text){
           this.router.navigate([this.storage.routes_text])
          .then(() => {
           window.location.reload();
           });
          // window.location.reload();
        }else{
          this.router.navigate(['/client-home']);
            this.storage.footer_text = 'HOME';
        }



      }
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      this.toastr.errorToastr(err);
      // this.notify.showError(err, "LOGIN");
    });
  }

  ngOnDestroy(): void {
    this.submitted = false;
  }

  back_action(){
    this.storage.footer_text = 'HOME';
    console.log(this.storage.routes_text);
    this.router.navigate([this.storage.routes_text]);
  }

  signup_nav(){
    this.router.navigate(['/auth/register']);
  }

  forgot_nav(){
    this.router.navigate(['/auth/forget-password']);
  }

}
