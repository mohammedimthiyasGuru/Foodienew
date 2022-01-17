import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Location } from '@angular/common';
// import { MouseEvent } from '@agm/core';
import { CommonService } from 'src/_core/services/common.service';
import { LocalStorage } from 'src/_core/_data/localstorage';

import {AgmMap, MouseEvent,MapsAPILoader  } from '@agm/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.page.html',
  styleUrls: ['./select-location.page.scss'],
})
export class SelectLocationPage implements OnInit {

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




  constructor(private location: Location,
    private storage: LocalStorage,
    private apiloader:MapsAPILoader,
    private router: Router,
    public toastr: ToastrManager,
    private StatusBar: StatusBar,
    private service: CommonService) {

      this.StatusBar.show();
      this.StatusBar.overlaysWebView(false);
      this.StatusBar.backgroundColorByHexString('#fffff');
     }

  ngOnInit() {

    let user = this.storage.user;
    if(!user){
      this.router.navigateByUrl('/auth/location');
    }else{
      this.get();
      let a = {
        user_id : this.storage.user.user_id
      }
      this.service.get_location(a).subscribe(res => {
        // this.router.navigateByUrl('/products');
        console.log(res);
        if(res.count == 0){
         this.Location_list = [];
         this.location_default = "D";

        }else{
          this.Location_list = res.rows;
          this.location_default = "";
          for(let a = 0; a < this.Location_list.length;a ++){
             if(this.Location_list[a].location_default == 'D'){
               this.old_default_id = this.Location_list[a].location_id;
             }
          }
        }
      });
    }




  }

  get(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
        this.zoom = 18;
        this.Latitude = position.coords.latitude;
        this.Longitude = position.coords.longitude;
        this.base_lat =  position.coords.latitude;
        this.base_lng =  position.coords.longitude;
        this.location_lat = position.coords.latitude;
        this.location_lng =  position.coords.longitude;
        console.log(position)
        this.service.location_details(this.Latitude,this.Longitude).subscribe(async data=>{
          this.address = await data['results'][0]['formatted_address'];
        });
      }
    })
  }

  }



  markerDragEnd($event: MouseEvent) {
    this.location_lat = Number($event.coords.lat);
    this.location_lng = Number($event.coords.lng);
    this.base_lat = this.location_lat;
    this.base_lng = this.location_lng;
    this.Latitude = this.location_lat;
    this.Longitude = this.location_lng;
    this.service.location_details(this.location_lat,this.location_lng).subscribe(async data=>{
      this.address = await data['results'][0]['formatted_address'];
    });
  }

  addlocation(){
   console.log(this.address);
   console.log(this.Latitude);
   console.log(this.Longitude);
   console.log(this.storage.user.user_id);
   let a  = {
    location_text : this.address,
    location_lat : this.Latitude,
    location_lng : this.Longitude,
    user_id : this.storage.user.user_id,
    location_default : this.location_default,
    location_type : this.location_type
   }

   let ca = {
    address_text: this.address,
    lat: this.Latitude,
    lng: this.Longitude,
    type: "Current Location"
  }
  console.log(ca);
  this.storage.user_location = ca;

   this.service.add_location(a).subscribe(res => {
    // this.router.navigateByUrl('/products');
    console.log(res);
    if(res){
      this.toastr.successToastr('Address added successfully')
      // alert("address added successfully");
      this.ngOnInit();
    }
  }, err => {
    console.log(err);
    this.toastr.errorToastr(err);
    // this.notify.showError(err, "LOGIN");
  });


  }

  delete_address(data){
   console.log(data);
   let a = {
    loc_id : data.location_id
   }
   this.service.delete_location(a).subscribe(res => {
    // this.router.navigateByUrl('/products');
    console.log(res);
    if(res){
      this.toastr.successToastr('Address deleted successfully')
      // alert("address deleted successfully");
      this.ngOnInit();
    }
  },err => {
    console.log(err);
    this.toastr.errorToastr(err);
    // this.notify.showError(err, "LOGIN");
  });

}



make_default(data){
 console.log(data.location_id,this.old_default_id);
 console.log(data);
 let a = {
  address_text: data.location_text,
  lat: data.location_lat,
  lng: data.location_lng,
  type: data.location_type
}
console.log(a);
this.storage.user_location = a;
this.router.navigateByUrl('/client-home');



//  let a = {
//   old_id : this.old_default_id,
//   new_id : data.location_id
//  }
//  this.service.make_default_location(a).subscribe(res => {
//   // this.router.navigateByUrl('/products');
//   console.log(res);
//   if(res){
//     alert("Default Marked");
//     // this.ngOnInit();
//     this.router.navigateByUrl('/client-home');
//   }
// });


}


}
