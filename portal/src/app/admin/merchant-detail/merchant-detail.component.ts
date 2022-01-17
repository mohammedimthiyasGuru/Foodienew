// import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { MerchantService } from 'src/app/_core/services/merchant.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

import {AgmMap, MouseEvent,MapsAPILoader  } from '@agm/core';
import { Location } from '@angular/common';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-merchant-detail',
  templateUrl: './merchant-detail.component.html',
  styleUrls: ['./merchant-detail.component.scss'],
})
export class MerchantDetailComponent implements OnInit {

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

  keyword = 'name';
  data = [
     {
       id: 1,
       name: 'Usa'
     },
     {
       id: 2,
       name: 'England'
     }
  ];



  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private MerchantService: MerchantService,
    private storage: LocalStorage,
    private profileservice: ProfileService,
    private apiloader:MapsAPILoader,
  ) { }

  profile: any;
  profileForm: FormGroup;
  submitted = false;
  profileImage: File;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  markerDragEnd($event: MouseEvent) {
    this.location_lat = Number($event.coords.lat);
    this.location_lng = Number($event.coords.lng);
    this.base_lat = this.location_lat;
    this.base_lng = this.location_lng;
    this.Latitude = this.location_lat;
    this.Longitude = this.location_lng;
    this.MerchantService.location_details(this.location_lat,this.location_lng).subscribe(async data=>{
      this.address = await data['results'][0]['formatted_address'];  
    });
  }



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
      // dob: ['', [Validators.required]],
      address:['', [Validators.required]],
      summary: ['', [Validators.required]],
      // facebook: ['', [Validators.required]],
      // twitter: ['', [Validators.required]],
      // instagram: ['', [Validators.required]],
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
      role : 2 ,
      first_name: controls.firstName.value,
      last_name: controls.lastName.value,
      password : "123456",
      email: controls.email.value,
      contactno: controls.mobile.value,
    };
console.log(_profile);
    this.MerchantService.merchant_register(_profile).subscribe(res => {
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
      this.MerchantService.uploadimage(this.profile.profile_id, this.profileImage).subscribe(res => {
        console.log(res);
        alert("Added Successfully");
       this.router.navigateByUrl('/admin/users');
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
      profile_biz_name : controls.businessName.value,
      profile_contact: controls.mobile.value,
      profile_address: controls.address.value,
      profile_dob: new Date(),
      profile_location: controls.location.value,
      profile_summary: controls.summary.value,
      profile_facebook: "",
      profile_instagram: "",
      profile_twitter: "",
      location_lat : this.Latitude || 0,
      location_lng : this.Longitude || 0
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

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }
  
}
