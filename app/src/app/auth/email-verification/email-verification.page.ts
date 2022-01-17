import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalStorage } from 'src/_core/_data/localstorage';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../_core/services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../_core/services/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.page.html',
  styleUrls: ['./email-verification.page.scss'],
})
export class EmailVerificationPage implements OnInit {

   text1 : string;
   text2 : string;
   text3 : string;
   text4 : string;

   Local_data : any;



  constructor(
    private toastr: ToastrManager,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private storage: LocalStorage,
    private CustomerService: CustomerService,
    private StatusBar : StatusBar,
  ) {
    this.StatusBar.show();
    this.StatusBar.backgroundColorByName('white');
    this.StatusBar.styleDefault();
   }

  ngOnInit() {
    var container = <HTMLInputElement>document.getElementsByClassName("digit-group")[0];
    container.onkeyup = function (e) {
      var target = <HTMLInputElement>e.target;
      var maxLength = parseInt(target.attributes["maxlength"].value, 10);
      var myLength = target.value.length;
      if (myLength >= maxLength) {
        var next = target;
        while (next = <HTMLInputElement>next.nextElementSibling) {
          if (next == null)
            break;
          if (next.tagName.toLowerCase() === "input") {
            next.focus();
            break;
          }
        }
      }
    }


    console.log(this.storage.user);
    console.log(this.storage.user_info);
    // if (this.storage.user) {
    //   this.router.navigateByUrl('/client-home');
    // }
  }

  submit(){
    let final_otp = this.text1 + this.text2 + this.text3 + this.text4 ;
    console.log(final_otp);
    let a = {
      user_id : this.storage.temp_user_info.user_id,
      otp : final_otp
    }
    console.log(a);
    this.CustomerService.otp_verify(a).subscribe(res => {
      console.log(res);
      this.toastr.successToastr("Register successfully");
      this.router.navigateByUrl('/auth/login');
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      console.log(err);
      this.toastr.errorToastr(err);
      // this.notify.showError(err, "LOGIN");
    });


  }


  resend_otp(){
    let a = {
      email : this.storage.user_info.email,
    }
    console.log(a);
    this.CustomerService.resend_otp(a).subscribe(res => {
      console.log(res);
      // alert(res.message);
      this.toastr.warningToastr(res.message);
      // this.router.navigateByUrl('/my-cart');
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });
  }


  back_action(){
    this.router.navigate(['/auth/register']);
  }

}
