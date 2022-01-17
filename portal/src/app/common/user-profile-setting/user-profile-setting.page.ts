import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

import {AgmMap, MouseEvent,MapsAPILoader  } from '@agm/core';
import { Location } from '@angular/common';
import { Inject, ViewChild, ElementRef } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';




@Component({
  selector: 'app-user-profile-setting',
  templateUrl: './user-profile-setting.page.html',
  styleUrls: ['./user-profile-setting.page.scss'],
})
export class UserProfileSettingPage implements OnInit, OnDestroy {

  @ViewChild(AgmMap,{static: true}) public agmMap: AgmMap;
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;

  public handleAddressChange(address: any) {
    this.zoom = 15;
    this.location_lat = Number(address.geometry.location.lat());
    this.location_lng = Number(address.geometry.location.lng());
    this.base_lat = this.location_lat;
    this.base_lng = this.location_lng;
    this.Latitude = this.location_lat;
    this.Longitude = this.location_lng;
    this.address = address.formatted_address;

    console.log(this.Latitude,this.Longitude);
    console.log(this.address);

  }

  options={
    types: [],
    componentRestrictions: { country: 'IN' }
    }


  zoom: number = 8;
  base_lat: number = 11.1271;
  base_lng: number = 78.6569;
  location_lat: number = 11.1271;
  location_lng: number = 78.6569;

  Latitude : any;
  Longitude : any;
  address : any;
  // Latitude : any;

  Location_list :any = [];
  location_type : any = "Home";
  location_default : any;
  old_default_id : any = "";



  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private profileservice: ProfileService,
    private storage: LocalStorage,
    private apiloader:MapsAPILoader,
  ) { }

  profile: any;
  profileForm: FormGroup;
  submitted = false;
  profileImage: File;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  ngOnInit() {
    this.profileservice.view(this.storage.user.profile_id).subscribe(res => {
      this.profile = res;
      console.log(this.profile);
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
      // dob: [this.profile ? this.profile.profile_dob : '', [Validators.required]],
      address: [this.profile ? this.profile.profile_address : '', [Validators.required]],
      summary: [this.profile ? this.profile.profile_summary : '', [Validators.required]],
      bank_acc_no: [this.profile ? this.profile.bank_acc_no : '', [Validators.required]],
      bank_name: [this.profile ? this.profile.bank_name : '', [Validators.required]],

      bank_ifsc_no: [this.profile ? this.profile.bank_ifsc_no : '', [Validators.required]],
      bank_branch: [this.profile ? this.profile.bank_branch : '', [Validators.required]],



      // facebook: [this.profile ? this.profile.profile_facebook : '', [Validators.required]],
      // twitter: [this.profile ? this.profile.profile_twitter : '', [Validators.required]],
      // instagram: [this.profile ? this.profile.profile_instagram : '', [Validators.required]],
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
      profile_dob: new Date(),
      profile_location: controls.location.value,
      profile_summary: controls.summary.value,
      profile_facebook: "",
      profile_instagram: "",
      profile_twitter: "",
      bank_name : controls.bank_name.value,
      bank_acc_no : controls.bank_acc_no.value,
      bank_ifsc_no : controls.bank_ifsc_no.value,
      bank_branch : controls.bank_branch.value,
      location_lat : this.Latitude || 0,
      location_lng : this.Longitude || 0
    };
console.log(_profile);

    this.profileservice.update(_profile).subscribe(res => {
      console.log(res);
      
      this.router.navigateByUrl('dashboard');
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });
  }

  uploadImg() {
    if (this.profileImage) {
      this.profileservice.uploadimage(this.profile.profile_id, this.profileImage).subscribe(res => {
        console.log(res);
        
        this.router.navigateByUrl('dashboard');
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
    } else {
      alert('Select Image');
    }
  }

  ngOnDestroy(): void {
    this.submitted = false;
  }




  markerDragEnd($event: MouseEvent) {
    this.location_lat = Number($event.coords.lat);
    this.location_lng = Number($event.coords.lng);
    this.base_lat = this.location_lat;
    this.base_lng = this.location_lng;
    this.Latitude = this.location_lat;
    this.Longitude = this.location_lng;
    this.profileservice.location_details(this.location_lat,this.location_lng).subscribe(async data=>{
      this.address = await data['results'][0]['formatted_address'];  
    });
  }


      // profile_id: this.profile.profile_id,
      // profile_first_name: controls.firstName.value,
      // profile_last_name: controls.lastName.value,
      // // profile_biz_name: controls.password.value,
      // // profile_biz_type: controls.password.value,
      // profile_email: controls.email.value,
      // profile_contact: controls.mobile.value,
      // profile_address: controls.address.value,
      // profile_dob: controls.dob.value,
      // // profile_gender: controls.password.value,
      // profile_location: controls.location.value,
      // profile_summary: controls.summary.value,
      // profile_facebook: controls.facebook.value,
      // // profile_youtube: controls.youtube.value,
      // profile_instagram: controls.instagram.value,
      // profile_twitter: controls.twitter.value


}
