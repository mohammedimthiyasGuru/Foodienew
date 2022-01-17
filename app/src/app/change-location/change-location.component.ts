import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
// import { MouseEvent } from '@agm/core';
import { CommonService } from 'src/_core/services/common.service';
import { LocalStorage } from 'src/_core/_data/localstorage';

import { AgmMap, MouseEvent, MapsAPILoader } from '@agm/core';
import { GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-change-location',
  templateUrl: './change-location.component.html',
  styleUrls: ['./change-location.component.scss'],
})
export class ChangeLocationComponent implements OnInit, AfterViewInit {

  @ViewChild(AgmMap, { static: true }) public agmMap: AgmMap;
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;
  loader :boolean = true;

  options = {
    types: [],
    componentRestrictions: { country: 'IN' }
  }


  zoom: number = 8;
  base_lat: number = 11.1271;
  base_lng: number = 78.6569;
  location_lat: number = 11.1271;
  location_lng: number = 78.6569;

  Latitude: any;
  Longitude: any;
  address: any;
  // Latitude : any;

  Location_list: any = [];
  location_type: any = "Home";
  location_default: any;
  old_default_id: any = "";


  moptions: GeolocationOptions;
  currentPos: Geoposition;

  constructor(
    private storage: LocalStorage,
    private router: Router,
    private StatusBar : StatusBar,
    private service: CommonService
  ) {
    this.StatusBar.show();
    this.StatusBar.backgroundColorByName('white');
    this.StatusBar.styleDefault();

    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
   }

  // private geolocation: Geolocation,
  // private apiloader: MapsAPILoader,
  // private location: Location,
  ngOnInit() {
    this.loader = false;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.zoom = 18;
          this.Latitude = position.coords.latitude;
          this.Longitude = position.coords.longitude;
          this.base_lat = position.coords.latitude;
          this.base_lng = position.coords.longitude;
          this.location_lat = position.coords.latitude;
          this.location_lng = position.coords.longitude;
          this.service.location_details(this.Latitude, this.Longitude).subscribe(async data => {
            this.address = await data['results'][0]['formatted_address'];
            let a = {
              address_text: this.address,
              lat: this.Latitude,
              lng: this.Longitude,
              type: "Current Location"
            }
            this.storage.user_location = a;
            this.loader = false;
            this.address = '';
          });
        }
      })
    }
    // this.get();
  }

  ngAfterViewInit() {

    // this.get();

    // private androidPermissions: AndroidPermissions,
    // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(
    //   result => console.log('Has permission?',result.hasPermission),
    //   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
    // );
    // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
    //   result => console.log('Has permission?',result.hasPermission),
    //   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
    // );
    // this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION, this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION]);

    // this.currentLocation();
  }
  // currentLocation() {
  //   this.geolocation.getCurrentPosition((pos) => {
  //     this.currentPos = pos;
  //     const location = {
  //       lat: pos.coords.latitude,
  //       lng: pos.coords.longitude,
  //       time: new Date(),
  //     };
  //     console.log('loc', location);
  //   }, (err) => {
  //     console.log("error : " + err.message);
  //   }, this.moptions);
  // }

  // getCurrentCoordinates() {
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     this.latitude = resp.coords.latitude;
  //     this.longitude = resp.coords.longitude;
  //    }).catch((error) => {
  //      console.log('Error getting location', error);
  //    });
  // }

  public handleAddressChange(address: any) {
    this.zoom = 15;
    this.location_lat = Number(address.geometry.location.lat());
    this.location_lng = Number(address.geometry.location.lng());
    this.base_lat = this.location_lat;
    this.base_lng = this.location_lng;
    this.Latitude = this.location_lat;
    this.Longitude = this.location_lng;
    this.address = address.formatted_address;
    let a = {
      address_text: this.address,
      lat: this.Latitude,
      lng: this.Longitude,
      type: "Current Location"
    }
    this.storage.user_location = a;
  }


  get() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.zoom = 18;
          this.Latitude = position.coords.latitude;
          this.Longitude = position.coords.longitude;
          this.base_lat = position.coords.latitude;
          this.base_lng = position.coords.longitude;
          this.location_lat = position.coords.latitude;
          this.location_lng = position.coords.longitude;
          this.service.location_details(this.Latitude, this.Longitude).subscribe(async data => {
            this.address = await data['results'][0]['formatted_address'];
            let a = {
              address_text: this.address,
              lat: this.Latitude,
              lng: this.Longitude,
              type: "Current Location"
            }
            this.storage.user_location = a;
            this.loader = false;
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
    this.service.location_details(this.location_lat, this.location_lng).subscribe(async data => {
      this.address = await data['results'][0]['formatted_address'];
      let a = {
        address_text: this.address,
        lat: this.Latitude,
        lng: this.Longitude,
        type: "Current Location"
      }
      this.storage.user_location = a;
    });
  }


  select_location() {
    let a = this.storage.user_location
    if (a) {
      this.router.navigate(['/cartpage'])
          .then(() => {
           window.location.reload();
           });
      // this.router.navigate([this.storage.routes_text]);
      // this.router.navigateByUrl('/cartpage');
    }
  }




  skip_location() {
    this.router.navigate(['/cartpage']);
    // this.router.navigateByUrl('/cartpage');
  }

  back_action(){
    this.router.navigate(['/cartpage']);
   }

}
