import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private storage: LocalStorage,
    public toastr: ToastrManager
  ) { }
  private returnUrl: any;
  loginForm: FormGroup;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  
  email_error : boolean = false;
  password_error : boolean = false;

  password_error_msg = '';


  email_loader = false;
  pass_loader = false;






  ngOnInit() {
    // if (this.storage.user) {
    //   this.router.navigateByUrl('/dashboard');
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

    this.auth.login(authData).subscribe(res => {
      this.pass_loader = false;
      this.storage.user = res.user;
      this.storage.authToken = res.key.token;
      this.storage.menu_setting = {status : true};
     
      console.log("res",res.user.role_id);

      if(res.user.role_id == 2){
        this.router.navigateByUrl('/merchant_panel/dashboard');
      }else if(res.user.role_id == 3){
        this.router.navigateByUrl('/vendor/dashboard');
      }else if(res.user.role_id == 6){
        this.router.navigateByUrl('/vendor/dashboard');
      }




      // this.toastr.successToastr('Login Successfully');
     
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
            }else{
                //code here
            }
        }
    }, 2000);
}

 checkemail(){
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
  this.router.navigateByUrl('/');
}

action2(){
  this.router.navigateByUrl('/loginpage');
}

action3(){
  this.router.navigateByUrl('/');
}

}
