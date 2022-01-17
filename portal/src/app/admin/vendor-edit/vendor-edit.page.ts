import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.page.html',
  styleUrls: ['./vendor-edit.page.scss'],
})
export class VendorEditPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private profileservice: ProfileService,
    private storage: LocalStorage,
  ) { }

  profile: any;
  profileForm: FormGroup;
  submitted = false;
  profileImage: File;

  _profileId : any;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  ngOnInit() {

    this.route.params.subscribe(params => {
      this._profileId = params.userid;
    })

    this.profileservice.view(this._profileId).subscribe(res => {
      this.profile = res;
      console.log(this.profile);
      console.log()
      this.initForm();
    })
    this.initForm();
  }

  initForm() {
    this.profileForm = this.formBuilder.group({
      firstName: [this.profile ? this.profile.profile_first_name : '', [Validators.required]],
      lastName: [this.profile ? this.profile.profile_last_name : '', [Validators.required]],
      businessName: [this.profile ? this.profile.profile_biz_name : '', [Validators.required]],
      mobile: [this.profile ? this.profile.profile_contact : '', [Validators.required]],
      email: [this.profile ? this.profile.profile_email : '', [Validators.required, Validators.pattern(this.emailPattern)]],
      location: [this.profile ? this.profile.profile_location : '', [Validators.required]],
      dob: [this.profile ? this.profile.profile_dob : '', [Validators.required]],
      address: [this.profile ? this.profile.profile_address : '', [Validators.required]],
      summary: [this.profile ? this.profile.profile_summary : '', [Validators.required]],
      facebook: [this.profile ? this.profile.profile_facebook : '', [Validators.required]],
      twitter: [this.profile ? this.profile.profile_twitter : '', [Validators.required]],
      instagram: [this.profile ? this.profile.profile_instagram : '', [Validators.required]],
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
      profile_id: this.profile.profile_id,
      profile_first_name: controls.firstName.value,
      profile_last_name: controls.lastName.value,
      profile_email: controls.email.value,
      profile_biz_name : controls.businessName.value,
      profile_contact: controls.mobile.value,
      profile_address: controls.address.value,
      profile_dob: controls.dob.value,
      profile_location: controls.location.value,
      profile_summary: controls.summary.value,
      profile_facebook: controls.facebook.value,
      profile_instagram: controls.instagram.value,
      profile_twitter: controls.twitter.value
    };
console.log(_profile);
    this.profileservice.update(_profile).subscribe(res => {
      console.log(res);
      this.uploadImg();
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });
  }

  uploadImg() {
    if (this.profileImage) {
      this.profileservice.uploadimage(this.profile.profile_id, this.profileImage).subscribe(res => {
        console.log(res);
        alert("Updated Successfully");
      }, err => {
      });
    } else {
      // alert('Select Image');
      alert("Updated Successfully");
    }
  }

  ngOnDestroy(): void {
    this.submitted = false;
  }
}
