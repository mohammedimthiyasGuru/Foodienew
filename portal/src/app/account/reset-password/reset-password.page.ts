import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authConfig } from 'src/app/_core/configs/property.config';
import { AuthService } from 'src/app/_core/services/auth.service';
import { ConfirmPasswordValidator } from 'src/app/_core/utils/confirm-password.validator';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(
    private storage: LocalStorage,
    private router: Router,
    public toastr: ToastrManager,
    private formBuilder: FormBuilder,
    private auth: AuthService,
  ) {
    if (this.storage.user) {
      this.router.navigateByUrl('/dashboard');
    }
  }
  resetpswdForm: FormGroup;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.resetpswdForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]],
    }, {
      validators: ConfirmPasswordValidator.MatchPassword
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
      localStorage.removeItem(authConfig.REGISTERED_PROFILE);
      this.storage.user = res.user;
      this.storage.authToken = res.key.token;
      // this.toastr.successToastr("Password Changed Successfully");
      this.router.navigateByUrl("merchant/login");
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      this.toastr.warningToastr(err);
      // this.notify.showError(err, "LOGIN");
    });
  }

  ngOnDestroy(): void {
    this.submitted = false;
  }

}
