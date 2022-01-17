import { Router } from '@angular/router';
import { authConfig } from 'src/_core/configs/property.config';
import { MerchantService } from 'src/_core/services/merchant.service';
import { LocalStorage } from 'src/_core/_data/localstorage';

import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { CommonService } from 'src/_core/services/common.service';
import { Location } from '@angular/common';
import { AgmMap, MouseEvent, MapsAPILoader } from '@agm/core';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.page.html',
  styleUrls: ['./nearby.page.scss'],
})
export class NearbyPage implements OnInit {
  loader :boolean = true;
  ///Location Declartion/////
  @ViewChild(AgmMap, { static: true }) public agmMap: AgmMap;
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

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

  merchants: any[];

  constructor(
    private router: Router,
    private storage: LocalStorage,
    // private service: MerchantService,
    private service: CommonService,
    public toastr: ToastrManager
  ) { }

  ngOnInit() {
    this.get();

  }

  loadData() {
    this.service.merchantDashboard({
      lat: this.location_lat,
      lng: this.location_lng
    }).subscribe(response => {
      console.log(response);
      this.merchants = response.rows;
      if(this.merchants.length == 0){
       this.toastr.warningToastr('No restaurant found around 5 kms')
      }
      this.loader = false;
    })
  }

  selectShop(_shopId) {
    localStorage.setItem(authConfig.SELECTED_SHOP, _shopId);
    this.router.navigateByUrl('/all-offers')
  }


// Location changes
  markerDragEnd($event: MouseEvent) {
    this.location_lat = Number($event.coords.lat);
    this.location_lng = Number($event.coords.lng);
    this.base_lat = this.location_lat;
    this.base_lng = this.location_lng;
    this.Latitude = this.location_lat;
    this.Longitude = this.location_lng;
    console.log(this.location_lat, this.location_lng);
    this.service.location_details(this.location_lat,this.location_lng).subscribe(async data=>{
      this.address = await data['results'][0]['formatted_address'];
      this.loadData();
    });
  }

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
    this.loadData();
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
          console.log(position)
          this.service.location_details(this.Latitude, this.Longitude).subscribe(async data => {
            this.address = await data['results'][0]['formatted_address'];
            this.loadData();
          });
        }
      })
    }

  }



}
