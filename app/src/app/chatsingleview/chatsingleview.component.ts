import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City_list } from '../../assets/xlsxtojson'
import { LocalStorage } from 'src/_core/_data/localstorage';
import { CommonService } from 'src/_core/services/common.service';
import { ToastrManager } from 'ng6-toastr-notifications';

// location

import { Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Location } from '@angular/common';

import { AgmMap, MouseEvent, MapsAPILoader } from '@agm/core';
import { GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';





@Component({
  selector: 'app-chatsingleview',
  templateUrl: './chatsingleview.component.html',
  styleUrls: ['./chatsingleview.component.scss'],
})
export class ChatsingleviewComponent implements OnInit {


  @ViewChild('scrollBottom') private scrollBottom: ElementRef;

  //  location details

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
  last_counts = true;
  // Latitude : any;

  Location_list: any = [];
  location_type: any = "Home";
  location_default: any;
  old_default_id: any = "";


  moptions: GeolocationOptions;
  currentPos: Geoposition;
  show_chat_history = false;


  constructor(private StatusBar : StatusBar,public toastr: ToastrManager,private router: Router,public City_list : City_list,private storage: LocalStorage,private service: CommonService) {

    console.log(this.storage.chat_detail.order_merchant_id);
    this.StatusBar.show();
    this.StatusBar.backgroundColorByName('white');
    this.StatusBar.styleDefault();

  }

  user_id = this.storage.user.profile_id;

  chat_history = [];

  text_type = '';
  chat_text = '';
  chat_img = '';
  chat_type = 'text';
  last_count = undefined;
  current_count = 0;

  idprofileone : any;

  timeLeft: number = 3;
  interval;
  chat_name = '';
  chat_head = 'false';
  chat_status = '';
  chat_start_time = '';
  chat_end_time = '';
  chat_title = '';
  chat_location = undefined;
  show_location_view = false;





  ngOnInit() {
    this.chat_text = '';
    this.get();
    this.check_chat_history();
  }


  check_chat_history(){
    // let check = ""+this.storage.user.profile_id+""+this.storage.chat_detail.order_merchant_id;
    // let a = {
    //   user_id : this.storage.user.profile_id,
    //   merchant_id : +this.storage.chat_detail.order_merchant_id
    // }
    // this.service.fetch_chat_both(a).subscribe((response:any) => {
    //   if(response.count == 0){
    //   }else{
    //     check = response.rows[0].chat_name;
    //   }
    //   let b = {
    //     user_id : +this.storage.chat_detail.order_merchant_id,
    //     merchant_id : this.storage.user.profile_id,
    //   }
    //   this.service.fetch_chat_both(b).subscribe((response:any) => {
    //     if(response.count == 0){
    //     }else{
    //       check = response.rows[0].chat_name;
    //     }
    //     console.log("DATA");
    //   }, err => {
    //   });
    // }, err => {
    // });

    this.fetch_chat_data(+this.storage.chat_detail.order_id);
  }


  fetch_chat_data(data){
    this.chat_name = data;
    let a = {
      chat_name : ""+this.chat_name
    }
    this.service.fetch_chat_by_chatname(a).subscribe((response:any) => {
     console.log(this.last_count,response.count);
     if(this.last_count == response.count){
     }else{
       console.log("data 1");
      this.last_count = response.count;
      this.chat_history = response.rows;
      this.chat_history = response.rows;
      this.chat_history.forEach(element => {
        if(element.chat_type == 'Location'){
          element.chat_location = JSON.parse(element.chat_location);
        }
      });
      this.last_count = response.count;
      console.log(this.chat_history.length);
      if(this.chat_history.length == 0){
        this.show_chat_history = false;
        this.chat_head = 'true';
        this.chat_start_time = ""+new Date();
        this.chat_title = "New Ticket"
      }else{
        this.show_chat_history = true;
        this.chat_head = 'false';
        this.chat_start_time = "";
        this.chat_title = ""
      }
      this.Change_read_status();
      this.scrollToBottom();
      // this.loader =  true;
     }
     this.startTimer();
    }, err => {
    });
  }


  location_change(){
    this.show_location_view = true;
    this.chat_type = 'Location';
    // this.storage.routes_text = '/chatviewsingle';
    // this.router.navigate(['/change_location']);
    // this.chat_type = 'location';
  }

  selectImgidprofileone(event) {
    this.loader = true;
    this.idprofileone = event.target.files[0];
    this.idprofileoneuploadImg()
  }

  idprofileoneuploadImg() {
    if (this.idprofileone) {
      this.service.idprofileone(this.storage.user.profile_id,this.idprofileone).subscribe(res => {
         this.chat_img = res.url;
         this.chat_type = 'img';
         this.Send_msg();
        // this.attached_tag = ""+this.idprofileone.name;
        // this.router.navigateByUrl('dashboard');
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
    } else {
      alert('Select Image');
      this.loader = false;
    }
  }



Send_msg(){
  if(this.chat_text !== '' ){
    this.text_type = 'Text';
  }
  if(this.chat_img !== ''){
    this.text_type = "Img";
  }
let a = {
chat_read_status :"U",
chat_sender_id : +this.storage.user.profile_id,
chat_reciver_id : +this.storage.chat_detail.order_merchant_id,
chat_user_type : "Customer",
chat_type : this.text_type,
chat_text : this.chat_text,
chat_location : JSON.stringify(this.chat_location),
chat_img : this.chat_img,
created_by : new Date(),
chat_name : this.chat_name,
chat_head : this.chat_head,
chat_status : this.chat_status,
chat_title :  this.chat_title,
chat_start_time : this.chat_start_time,
chat_user_id : +this.storage.user.profile_id,
chat_admin_id : 999999999
    }
    this.service.add_chatdetail(a).subscribe((response:any) => {
      clearInterval(this.interval);
      this.fetch_chat_data(this.chat_name);
      this.clear_data();
      this.scrollToBottom();
      this.loader = false;
      // this.chat_history = response.rows;
     }, err => {
       this.toastr.warningToastr("sorry something went wrong");
       this.loader = false;
     });
  }




  end_Send_msg(){
    this.chat_text = 'Thanks for the Support - Ticket Closed by Customer'
    if(this.chat_text !== '' ){
      this.text_type = 'Text';
    }
    if(this.chat_img !== ''){
      this.text_type = "Img";
    }
  let a = {
  chat_read_status :"U",
  chat_sender_id : +this.storage.user.profile_id,
  chat_reciver_id : +this.storage.chat_detail.order_merchant_id,
  chat_user_type : "Customer",
  chat_type : this.text_type,
  chat_text : this.chat_text,
  chat_location : JSON.stringify(this.chat_location),
  chat_img : this.chat_img,
  created_by : new Date(),
  chat_name : this.chat_name,
  chat_head : "end",
  chat_status : this.chat_status,
  chat_title :  this.chat_title,
  chat_start_time : this.chat_start_time,
      }
      this.service.add_chatdetail(a).subscribe((response:any) => {
        clearInterval(this.interval);
        this.fetch_chat_data(this.chat_name);
        this.clear_data();
        this.scrollToBottom();
        this.loader = false;
        // this.chat_history = response.rows;
       }, err => {
         this.toastr.warningToastr("sorry something went wrong");
         this.loader = false;
       });
    }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        // this.placeorder();
        this.timeLeft = 3;
        this.fetch_chat_data(this.chat_name);
        clearInterval(this.interval);
      }
    },1000)
  }

  clear_data(){
    this.text_type = '';
    this.chat_text = '';
    this.chat_img = '';
  }
  end_msg(){
  }




  // location_selection_process


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
      });
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
      this.text_type = "Location"
      this.chat_location = this.storage.user_location;
      this.Send_msg();
      this.show_location_view = false;
      // this.router.navigateByUrl('/cartpage');
    }
  }

  skip_location() {
   this.show_location_view = false;
   this.text_type = '';
  }

  scrollToBottom(): void {
    try {
        this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;
    } catch(err) { }
}





Change_read_status(){
  let chat_name = this.chat_name;
  let a = {
     chat_name : chat_name,
     chat_reciver_id : this.storage.user.profile_id,
     chat_read_status : 'R'
  }
  this.service.chat_read_status(a).subscribe((response:any) => {
    console.log(response);
  }, err => {
    console.log(err);
    this.toastr.warningToastr("sorry something went wrong");
  });
}

back_action(){
  clearInterval(this.interval);
  this.router.navigate([this.storage.routes_text])
  .then(() => {
   window.location.reload();
   });
  // this.router.navigate([this.storage.routes_text]);
 }

}
