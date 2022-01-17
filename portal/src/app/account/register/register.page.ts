import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { authConfig } from 'src/app/_core/configs/property.config';
import { AuthService } from 'src/app/_core/services/auth.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { ToastrManager } from 'ng6-toastr-notifications';

import {AgmMap, MouseEvent,MapsAPILoader  } from '@agm/core';
import { Location } from '@angular/common';
import { Inject, ViewChild, ElementRef } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { countrycode } from '../../../app/countrycode'
import { City_list } from '../../../assets/xlsxtojson'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {

  Search_text : any;
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
    this.Search_text =  this.address;

    

  }

  options={
    types: [],
    componentRestrictions: { country: 'IN' }
    }
 
    button_visible = true;


  loader : boolean = true;
  idprofileone : File  
  idprofiletwo : File  
  lable_text = 'Average cost of food per person';
  postal_code_error = false ;


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
  refer_show : boolean = false;
  refer_value = '';
  selected : any = "";
  proof_type : any = "";

  address_error = false;
  country = "";

  proof_attach : boolean = false;

  country_code_price = [
  {
    country_code : "+65",
    country_code_price :['$ 1 - $ 10','$ 10 - $ 20','$ 20 - $ 30','$ 30 - $ 40','$ 40 - $ 50']
  },
  {
    country_code : "+60",
    country_code_price :['RM 1 - RM 10','RM 10 - RM 20','RM 20 - RM 30','RM 30 - RM 40','RM 40 - RM 50']
  },
  {
    country_code : "+91",
    country_code_price :['₹ 1 - ₹ 10','₹ 10 - ₹ 20','₹ 20 - ₹ 30','₹ 30 - ₹ 40','₹ 40 - ₹ 50']
  }
  ]
  cuisine_cat_text = '';
  category_text = '';


  cuisine_cat = [];
  category  = [];

  keyword = 'name';
  data = [];

  constructor(
    private storage: LocalStorage,
    private router: Router,
    private profileservice: ProfileService,
    public toastr: ToastrManager,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private apiloader:MapsAPILoader,
    public countrycode : countrycode,
    public City_list : City_list,
    // private service: ProfileService,
  ) {
    // if (this.storage.user) {
    //   this.router.navigateByUrl('/dashboard');
    // }
    this.cuisine_cat = [];
    this.category = [];
    this.category = this.City_list.sheet2;
    this.cuisine_cat = this.City_list.sheet1;
    
  }

  drop_down_value : any = [];

  registerForm: FormGroup;
  submitted = false;
  menuImages: FileList;
  map_view = false;

  address_view = false;

  


  email_error : boolean = false;
  doc_attach : boolean = false;


  doc_error_1  = false;
  doc_error_2 = false;
  email_empyt_error = false;



   /////////

   bussiness_name_tag : string = '';
   proof_type_tag : string = '';
   attached_tag : string = '';
   proof2_type_tag : string  = '';
   business_type_tag : string = '';
   average_type_tag : string = '';
   restaurant_type_tag : string = '';
   address_type_tag: string = '';
 
   postal_address : string = '';

   landmark_type_tag: string = '';
   existing_type_tag : string = '';
   ref_email_tag : string = '';

   done_button = false;












   country_name_list = [];
   state_name_list = [];
   city_name_list = [];


   p_country_name_list = [];
   p_state_name_list = [];
   p_city_name_list = [];


   p_country_name : any = '';
   p_state_name: any = '';
   p_city_name : any = '';


   pp_country_name = '';
   pp_state_name = '';
   pp_city_name = '';




  ngOnInit() {

    var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
    this.profileservice.profile_view(reguser.profile_id).subscribe(res => {
    console.log(res);
    let code = res.profile_contact.split("-");
    console.log(code[0]);
    if(code[0] == "+65" ){
      this.country = "Singapore";
      this.p_country_name = "SINGAPORE";
    }else if(code[0] == "+60" ){
      this.country = "Malaysia";
      this.p_country_name = "MALAYSIA";
    }else if(code[0] == "+91" ){
      this.country = "India";
      this.p_country_name = "INDIA";
    }
    });

    this.country_name_list = [];
    this.state_name_list = [];
    this.city_name_list = [];
    this.auth.list_county().subscribe(res => {
      console.log("Inserted",res.rows);
      let temp = res.rows;
      for(let d = 0 ; d < temp.length; d ++){
        let u = {
          id: d,
          name: temp[d].country_name
        }
        this.country_name_list.push(u);
        this.p_country_name_list.push(u);
        
      } 
     }, err => {
       console.log(err);
     });

    //  this.auth.list_state().subscribe(res => {
    //   console.log("Inserted",res.rows);
    //   let temp = res.rows;
    //   for(let d = 0 ; d < temp.length; d ++){
    //     let u = {
    //       id: d,
    //       name: temp[d].state_name
    //     }
    //     this.state_name_list.push(u);
    //     this.p_state_name_list.push(u);
    //   } 
    //  }, err => {
    //    console.log(err);
    //  });

     this.auth.list_city().subscribe(res => {
      console.log("Inserted",res.rows);
      let temp = res.rows;
      for(let d = 0 ; d < temp.length; d ++){
        let u = {
          id: d,
          name: temp[d].city_name
        }
        this.city_name_list.push(u);
        this.p_city_name_list.push(u);
      } 
   
     }, err => {
       console.log(err);
     });



    this.proofchange();
    this.initForm();
    var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
    console.log(reguser);
    var merchant_detail = this.storage.merchant_detail;
    console.log(merchant_detail);
    let code = merchant_detail.contactno.split("-",2);
    console.log(code[0]);
    for(let a = 0 ; a < this.country_code_price.length ; a ++){
      if(this.country_code_price[a].country_code == code[0]){
           this.drop_down_value = this.country_code_price[a].country_code_price;
      }
    } 
    this.loader = false;
  }

  initForm() {
    console.log(this.country);
    this.registerForm = this.formBuilder.group({
      business_name: ['', [Validators.required]],
      business_proof_type: ['', [Validators.required]],
      idprofileone: [''],
      idprofiletwo : [''],
      business_type: ['', [Validators.required]],
      avg_meal_cost: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(20)]],
      address_postal: ['', [Validators.required]],
      city : ['', [Validators.required]],
      state : ['', [Validators.required]],
      postal : ['', [Validators.required, Validators.maxLength(6)]],
      country : [ this.country ? this.country : '', [Validators.required]],
      address_landmark: ['', [Validators.required]],
      existing_user: ['',[Validators.required]],
      cuisine: [''],
   
      categorys: [''],
      ref_email: [''],
      temp_location: [''],

      temp_country: [''],
      temp_state: [''],
      temp_city: [''],





      // menucard: ['', [Validators.required]]
    });
  }

  get f() { return this.registerForm.controls; }



  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }else {
      const controls = this.registerForm.controls;
      console.log(this.idprofileone);
      console.log(this.idprofiletwo);
      let check_status = true;
      this.doc_error_2 = false;
      this.doc_error_1 = false;
      this.email_empyt_error = false;
      if(this.proof_type == 'None (Activate Account, once done verification call from us)'){
        if(this.idprofiletwo == undefined){
          // this.toastr.warningToastr('Add the file');
          this.doc_error_2 = true;
          check_status = false;
        }
      }
      if(this.proof_type !== 'None (Activate Account, once done verification call from us)'){
        if(this.idprofileone == undefined || this.idprofiletwo == undefined){
          // this.toastr.warningToastr('Add the file');
          this.doc_error_1 = true;
          this.doc_error_2 = true;
          check_status = false;
        }
      }
     if(this.refer_value == 'Yes' &&  controls.ref_email.value == ''){
        // this.toastr.warningToastr('Fill ref email id');
        this.email_empyt_error = true;
        check_status = false;
      }
     if(check_status == true){
       this.view_address_view();
     }
      }
  }



  submit_data(){
    console.log(this.registerForm.invalid);
    var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
    console.log(reguser);
    const controls = this.registerForm.controls;
    const registerData = {
      business_name: controls.business_name.value,
      business_proof_type : controls.business_proof_type.value,
      idprofileone : controls.idprofileone.value,
      idprofiletwo : controls.idprofiletwo.value,
      business_type: controls.business_type.value,
      avg_meal_cost: controls.avg_meal_cost.value,
      address: controls.address.value,
      address_postal :  controls.address_postal.value,
      city :  controls.city.value,
      state :  controls.state.value,
      postal : controls.postal.value,
      country :  controls.country.value,
      address_landmark : controls.address_landmark.value,
      ref_email : controls.ref_email.value,
      cuisine : controls.cuisine.value.name,
      categorys : controls.categorys.value,
      location_lat : this.Latitude,
      location_lng : this.Longitude,
      profile_id: reguser.profile_id,
      p_country_name : this.p_country_name.name,
      p_state_name : this.p_state_name.name,
      p_city_name : this.p_city_name.name,
    };
    console.log(registerData);
    this.auth.register(registerData).subscribe((res: any) => {
      console.log(res);
      // localStorage.removeItem(authConfig.REGISTERED_PROFILE);
      // this.toastr.successToastr('Registered Succesfully');
      this.router.navigateByUrl("/loginpage");
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      // this.toastr.warningToastr(err);
      // this.notify.showError(err, "LOGIN");
    });
  }


  selectImgidprofileone(event) {
    this.idprofileone = event.target.files[0];
    this.idprofileoneuploadImg()
  }


  idprofileoneuploadImg() {
    this.loader = true;
    var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
    if (this.idprofileone) {
      this.profileservice.idprofileone(reguser.profile_id, this.idprofileone).subscribe(res => {
        console.log(res);
        this.attached_tag = ""+this.idprofileone.name;
        this.loader = false;
        // this.router.navigateByUrl('dashboard');
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
    } else {
      alert('Select Image');
    }
  }


  selectImgidprofiletwo(event) {
    this.idprofiletwo = event.target.files[0];
    this.idprofiletwouploadImg()
  }


  idprofiletwouploadImg() {
    this.loader = true;
    var reguser = JSON.parse(localStorage.getItem(authConfig.REGISTERED_PROFILE));
    if (this.idprofiletwo) {
      this.profileservice.idprofiletwo(reguser.profile_id, this.idprofiletwo).subscribe(res => {
        console.log(res);
        this.loader = false;

        this.proof2_type_tag = ""+this.idprofiletwo.name;
      }, err => {
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
      this.Search_text =  await data['results'][0]['formatted_address'];  
    });
  }


  selectedChanged() {
  console.log(this.selected);
  this.business_type_tag = this.selected;
  if(this.selected == 'Restaurant' || this.selected == 'Home Kitchen' || this.selected == 'Caterers'){
    this.lable_text = 'Average cost of food per person';
    this.cuisine_cat_text = '';
    this.category_text = '';
  }
  if(this.selected == 'Others' || this.selected == 'Shop'){
    this.lable_text = 'Average cost of product';
    this.cuisine_cat_text = '';
    this.category_text = '';
  }


  }


  selectedChanged1() {
    console.log(this.refer_value);
    this.ref_email_tag = '';
    this.existing_type_tag = this.refer_value;
    if(this.refer_value == 'No'){
      this.refer_show =  false;
      this.button_visible = true;
    }
    if(this.refer_value == 'Yes'){
      this.refer_show =  true;
      this.button_visible = false;
    }
    this.email_error = false
    }

    selectEvent(item) {
      console.log(item);
      this.cuisine_cat_text = item.name;
      // do something with selected item
    }

    selectEvent1(item) {
      console.log(item);
      this.category_text = item.name;
      // do something with selected item
    }
  
    onChangeSearch(val: string) {
      console.log(val);
      // fetch remote data from here
      // And reassign the 'data' which is binded to 'data' property.
    }
    
    onFocused(e){
      console.log(e)
      // do something when input is focused
    }

    delete_cus(){
      this.cuisine_cat_text = '';
    }

    delete_cat(){
      this.category_text = '';
    }

    logout() {
      this.storage.clear();
      window.location.reload();
    }

    proofchange(){
      this.doc_attach = false;
      this.proof_type_tag = this.proof_type;
      console.log(this.proof_type);
      if(this.proof_type !== 'None (Activate Account, once done verification call from us)'){
        this.proof_attach = true;
        this.doc_attach = true;
      }
      if(this.proof_type == 'None (Activate Account, once done verification call from us)'){
       this.proof_attach = false;
       this.doc_attach = true;
      }
      if(this.proof_type == ''){
        this.proof_attach = false;
        this.doc_attach = false;
       }


    }


    searchInterest() {
      const controls = this.registerForm.controls;
      let wordSearch = controls.ref_email.value;
      setTimeout(() => {
          if (wordSearch == controls.ref_email.value) {
              if (controls.ref_email.value) {
                console.log(controls.ref_email.value);
                this.ref_email_tag = controls.ref_email.value;
                this.checkemail();
                  //função que irá retornar sua lista de objetos
              }else{
                  //code here
              }
          }
      }, 2000);
    }

    checkemail(){
      const controls = this.registerForm.controls;
       let Data = {
        email : controls.ref_email.value,
       }
      this.auth.checkemail(Data).subscribe(res => {
        this.email_error = false;
        this.button_visible = true;
        // this.toastr.successToastr('This Email id already Registerd');
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        console.log(err);
        this.email_error = true;
        this.button_visible = false;
        // this.toastr.warningToastr('This Email id already Registerd');
        // this.toastr.warningToastr(err);
        // this.notify.showError(err, "LOGIN");
      });
     }



    ////Tag Action////////
    bussiness_name_tag_action(){
      const controls = this.registerForm.controls;
      let wordSearch = controls.business_name.value;
      setTimeout(() => {
          if (wordSearch == controls.business_name.value) {
              if (controls.business_name.value) {
                console.log(controls.business_name.value);
                this.bussiness_name_tag = controls.business_name.value;
                  //função que irá retornar sua lista de objetos
              }else{
                  //code here
              }
          }
      }, 1000);
    }

    bussiness_name_tag_actions(){
      const controls = this.registerForm.controls;
      let wordSearch = controls.address.value;
      setTimeout(() => {
          if (wordSearch == controls.address.value) {
              if (controls.address.value) {
                console.log(controls.address.value);
                this.address_type_tag = controls.address.value;
                console.log(this.country);
                this.country.toLowerCase();
                var str = this.address_type_tag;
                if(str.indexOf(this.country) !== -1){
	              // alert("Not again");
                this.address_error = false;
                 }else{
                  this.address_error = true;
                  this.address = '';
                  this.address_type_tag = '';
                 }
                  //função que irá retornar sua lista de objetos
              }else{
                  //code here
              }
          }
      }, 1000);
    }

    bussiness_name_tag_actionss(){
      const controls = this.registerForm.controls;
      let wordSearch = controls.address_landmark.value;
      setTimeout(() => {
          if (wordSearch == controls.address_landmark.value) {
              if (controls.address_landmark.value) {
                console.log(controls.address_landmark.value);
                this.landmark_type_tag = controls.address_landmark.value;



                  //função que irá retornar sua lista de objetos
              }else{
                  //code here
              }
          }
      }, 1000);
    }

    delete_buss_name(){
      this.bussiness_name_tag = '';
    }


    selectedChanged12(){
      const controls = this.registerForm.controls;    
      this.average_type_tag = controls.avg_meal_cost.value;
    }

    proof_type_tags(){
      this.proof_type_tag = '';
    }
    delete_attached(){
      this.attached_tag = '';
    }
    proof2_type(){
      this.proof2_type_tag = '';
    }
    business_type(){
      this.business_type_tag = '';
    }
    average_type(){
      this.average_type_tag = '';
    }

    address_type(){
      this.address_type_tag = '';
    }
    landmark_type(){
      this.landmark_type_tag = '';
    }
    existing_type(){
      this.existing_type_tag = '';
    }
    ref_email(){
      this.ref_email_tag = '';
    }


    check_address(){
      const controls = this.registerForm.controls;
      let wordSearch = controls.address_postal.value;
      console.log(controls.address_postal.value);
      console.log(this.pp_city_name);
      console.log(this.pp_state_name);
      controls.city.setValue(this.pp_city_name);
      controls.state.setValue(this.pp_state_name); 
      controls.country.setValue(this.p_country_name);
      console.log(controls.city.value );
      console.log(controls.country.value);
      console.log(controls.state.value);
      setTimeout(() => {
          if (wordSearch == controls.address_postal.value) {
              if (controls.address_postal.value) {
                this.postal_code_error = false;
                console.log(Number(controls.postal.value));
                if(controls.address_postal.value !== '' && controls.city.value !== '' && controls.state.value !== '' && controls.postal.value !== '' && controls.country.value !== ''){
                  const isNumeric = (val: string) : boolean => {
                    return !isNaN(Number(val));
                 }
                 var da = isNumeric(controls.postal.value);
                 console.log(da);
                 console.log(controls.postal.value.length);
                  if(da == false){
                    this.postal_code_error = true;
                    this.done_button = false;
                  }else if(controls.postal.value.length < 5){
                    this.postal_code_error = true;
                    this.done_button = false;
                  }
                  else{
                    this.postal_code_error = false;
                    this.done_button = true;
                  }
                }
                  //função que irá retornar sua lista de objetos
              }else{
                  //code here
              }
          }
      }, 3000);
    }

    postal_address_check(){
      const controls = this.registerForm.controls;
      this.postal_address = controls.address_postal.value + ', ' + controls.city.value + ', ' + controls.state.value + ', '+controls.country.value + ', ' +controls.postal.value;
      console.log(this.postal_address);
    }

    postal_address_delete(){
      console.log("sdfas");
      this.postal_address = '';
    }







    terms_con(){
      window.open('/account/guideinfo', '_blank');
    }


    bussiness_name_tag_actions1(){
      const controls = this.registerForm.controls;
      let wordSearch = controls.address.value;
      setTimeout(() => {
          if (wordSearch == controls.address.value) {
              if (controls.address.value) {
                this.address_type_tag = controls.address.value;
                var str = this.address_type_tag;
                str = str.toLowerCase();
                console.log(str);
                var country_temp = this.country.toLowerCase();
                if(str.indexOf(country_temp) !== -1){
	              // alert("Not again");
                this.address_error = false;
                 }else{
                  this.address_error = true;
                  this.address = '';
                  this.address_type_tag = '';
                 }
                  //função que irá retornar sua lista de objetos
              }else{
                  //code here
              }
          }
      }, 5000);
    }


    


    view_map(){
      this.map_view = true;
    }
    close_map_view(){
      this.map_view = false;
     
    }


    view_address_view(){
      this.selectEvent3({name:this.p_country_name});
      this.address_view = true;
    }

    close_address_view(){
      if(this.p_country_name == '' || this.p_state_name == '', this.p_city_name == ''){
        alert("Please don't close without Saving country, state, city");
       }else{
         console.log(
           this.p_country_name,
           this.p_state_name,
           this.p_city_name
         )
         this.address_view = false;
       }
    }

    save_address_view(){
      this.p_country_name = this.country;
      if(this.p_country_name == '' || this.p_state_name == '', this.p_city_name == ''){
        alert("Please select country, state, city");
       }else{
         console.log(
           this.p_country_name,
           this.p_state_name,
           this.p_city_name
         )
         this.address_view = false;
         this.submit_data();
        //  alert("Data Submit");
       }
    }


    selectEvent3(item) {
      console.log(item);
      this.p_country_name = item.name;
      this.state_name_list = [];
      this.auth.list_by_country_state(this.p_country_name).subscribe(res => {
        console.log("Inserted",res);
        let temp = res.rows;
        for(let d = 0 ; d < temp.length; d ++){
          let u = {
            id: d,
            name: temp[d].state_name
          }
          this.state_name_list.push(u);
        } 
       }, err => {
         console.log(err);
       });


      // do something with selected item
    }

    selectEvent4(item) {
      console.log(item);
      this.p_state_name = item.name;
      this.city_name_list = [];
      this.auth.list_by_state_city(this.p_state_name).subscribe(res => {
        console.log("Inserted",res.rows);
        let temp = res.rows;
        for(let d = 0 ; d < temp.length; d ++){
          let u = {
            id: d,
            name: temp[d].city_name
          }
          this.city_name_list.push(u);
        } 
       }, err => {
         console.log(err);
       });



      // do something with selected item
    }


    selectEvent5(item) {
      console.log(item);
      this.p_city_name = item.name;
      // do something with selected item
    }





    selectEvent6(item) {
      console.log(item);
      this.pp_country_name = item.name;
      const controls = this.registerForm.controls;
      controls.country.setValue(item.name);
      this.p_state_name_list = [];
      this.auth.list_by_country_state(this.pp_country_name).subscribe(res => {
        console.log("Inserted",res);
        let temp = res.rows;
        for(let d = 0 ; d < temp.length; d ++){
          let u = {
            id: d,
            name: temp[d].state_name
          }
          this.p_state_name_list.push(u);
        } 
       }, err => {
         console.log(err);
       });


      // do something with selected item
    }

    selectEvent7(item) {
      console.log(item);
      
      this.pp_state_name = item.name;
      const controls = this.registerForm.controls;
      controls.state.setValue(item.name);
      console.log(controls.state.value);
      this.p_city_name_list = [];
      this.auth.list_by_state_city(this.pp_state_name).subscribe(res => {
        console.log("Inserted",res.rows);
        let temp = res.rows;
        for(let d = 0 ; d < temp.length; d ++){
          let u = {
            id: d,
            name: temp[d].city_name
          }
          this.p_city_name_list.push(u);
        } 
       }, err => {
         console.log(err);
       });



      // do something with selected item
    }


    selectEvent8(item) {


      console.log(item);
      this.pp_city_name = item.name;
      const controls = this.registerForm.controls;
      controls.city.setValue(item.name);
      console.log(controls.city.value);
      // do something with selected item
    }


    fetch_state_list(){
      this.selectEvent6({name:this.p_country_name});
      console.log({name:this.p_country_name});
    }
}
