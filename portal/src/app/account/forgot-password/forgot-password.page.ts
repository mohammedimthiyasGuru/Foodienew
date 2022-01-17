import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authConfig } from 'src/app/_core/configs/property.config';
import { AuthService } from 'src/app/_core/services/auth.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email_loader = false;
  email_error: boolean = false;
  email_error_text = "";
  constructor(
    private router: Router,
    private auth: AuthService,
    private storage: LocalStorage,
    private formBuilder: FormBuilder
  ) {
    // if (this.storage.user) {
    //   this.router.navigateByUrl('/dashboard');
    // }
  }

  ForgetPasswordForm: FormGroup;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  ngOnInit() {
    this.ForgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
    });
  }

  get f() { return this.ForgetPasswordForm.controls; }

  onSubmit() {
    this.email_loader = true;

    this.submitted = true;
    // stop here if form is invalid
    if (this.ForgetPasswordForm.invalid) {
      return;
    }

    const controls = this.ForgetPasswordForm.controls;

    this.auth
      .forgetpassword(controls.email.value).subscribe(otp => {
        console.log(otp);
        this.email_loader = false;
        this.router.navigateByUrl("account/otp-fp");
        let a = {
          user_id: otp.user_id,
          email: controls.email.value
        }
        localStorage.setItem(authConfig.REGISTERED_PROFILE, JSON.stringify(a));
        // this.notify.showSuccess("OTP sent successfully", "Forget Password");
      }, err => {
        // this.notify.showError(err, "Forget Password");
        console.log(err);
        this.email_error = true;
        this.email_error_text = err;
        this.email_loader = false;
      });
  }


  checkemail() {
    const controls = this.ForgetPasswordForm.controls;
    let Data = {
      email: controls.email.value,
    }
    this.auth.checkemail(Data).subscribe(res => {
      this.email_error = false;
      this.email_loader = false;
      // this.toastr.successToastr('This Email id already Registerd');
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      console.log(err);
      this.email_error_text = 'No account found';
      this.email_error = true;
      this.email_loader = false;
      // this.toastr.warningToastr('This Email id already Registerd');
      // this.toastr.warningToastr(err);
      // this.notify.showError(err, "LOGIN");
    });
  }

  searchInterest() {
    this.email_loader = true;
    const controls = this.ForgetPasswordForm.controls;
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
    }, 1000);
  }

}
