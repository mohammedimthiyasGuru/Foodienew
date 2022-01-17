import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { VendorService } from 'src/app/_core/services/vendor.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

@Component({
  selector: 'app-sub-vendor',
  templateUrl: './sub-vendor.page.html',
  styleUrls: ['./sub-vendor.page.scss'],
})
export class SubVendorPage implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private VendorService: VendorService,
    private storage: LocalStorage,
    private profileservice: ProfileService,
  ) { }

  profile: any;
  profileForm: FormGroup;
  submitted = false;
  profileImage: File;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  ngOnInit() {
    // this.profileservice.view(this.storage.user.profile_id).subscribe(res => {
    //   this.profile = res;
    //   console.log(this.profile);
    //   this.initForm();
    // })
    this.initForm();
  }

  initForm() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      businessName:['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]],
      location: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address:['', [Validators.required]],
      summary: ['', [Validators.required]],
      facebook: ['', [Validators.required]],
      twitter: ['', [Validators.required]],
      instagram: ['', [Validators.required]],
    });
  }

  get f() { return this.profileForm.controls; }

  selectImg(event) {
    this.profileImage = event.target.files[0];
  }

  onSubmit() {
    this.submitted = true;

    if (this.profileForm.invalid) {
      return;
    }
    const controls = this.f;
    console.log('controls ', controls);
    const _profile = {
      role : 6 ,
      first_name: controls.firstName.value,
      last_name: controls.lastName.value,
      password : "123456",
      email: controls.email.value,
      contactno: controls.mobile.value,
    };
console.log(_profile);
    this.VendorService.vendor_register(_profile).subscribe(res => {
    console.log(res);
    this.profile = res;
    this.update_profile();
   
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });
  }

  uploadImg() {
    if (this.profileImage) {
      this.VendorService.uploadimage(this.profile.profile_id, this.profileImage).subscribe(res => {
        console.log(res);
        alert("Added Successfully");
      //  this.router.navigateByUrl('/users');
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
    } else {
      alert('Select Image');
    }
  }
  

  update_profile(){
    const controls = this.f;
    let _profile ={
      profile_id: this.profile.profile_id,
      profile_first_name: controls.firstName.value,
      profile_last_name: controls.lastName.value,
      profile_email: controls.email.value,
      // profile_biz_name : controls.businessName.value,
      profile_contact: controls.mobile.value,
      profile_address: controls.address.value,
      profile_dob: controls.dob.value,
      profile_location: controls.location.value,
      profile_summary: controls.summary.value,
      profile_facebook: controls.facebook.value,
      profile_instagram: controls.instagram.value,
      profile_twitter: controls.twitter.value
    }
    this.profileservice.update(_profile).subscribe(res => {
      console.log(res);
      this.uploadImg();
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });
  }




  ngOnDestroy(): void {
    this.submitted = false;
  }

}
