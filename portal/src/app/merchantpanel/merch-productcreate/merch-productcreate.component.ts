import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/_core/services/category.service';
import { ProductService } from 'src/app/_core/services/product.service';
import { ProfileService } from 'src/app/_core/services/profile.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { DatePipe } from '@angular/common';
import { City_list } from '../../../assets/xlsxtojson'



@Component({
  selector: 'app-merch-productcreate',
  templateUrl: './merch-productcreate.component.html',
  styleUrls: ['./merch-productcreate.component.scss'],
  providers: [DatePipe]
})
export class MerchProductcreateComponent implements OnInit {

  productForm: FormGroup;
  submitted = false;

  categories: any[];
  product: any;
  _prodId: number;
  prodImage: File;


  desc_array = [];
  image_array = [];
  img_url = '';





  // Error_check
  error_cat_id = false;
  error_profile_id = false;
  error_prod_name = false;
  error_prod_img = false;
  error_Pre_order_type =false;
  error_pre_order_time = false;
  error_item_name = false;
  error_item_code = false;
  error_item_start_time = false;
  error_item_end_time = false;
  error_prod_price = false;
  error_prod_desc = false;
  error_prod_status = false;
  error_cat_empty = true;




  ////Product New Params///////
      cat_id = this.storage.cat_id;
      profile_id = "";
      prod_name = "";
      prod_img = "";
      Pre_order_type = "";
      pre_order_time = "";
      item_name = "";
      item_code = ""+Math.floor(100000 + Math.random() * 900000);
      item_start_time = "";
      item_end_time = "";
      prod_price = 0;
      prod_desc = "";
      prod_status = "";
      idprofileone : any;












  start_time = "01:00 AM";
  end_time = "12:00 PM";

  
  ///Cat Params//
  cat_name = "";







  lable_text = {
    "choose_cat":"Choose Category",
    "product_name":"Product Name",
    "product_img" : "Product image",
    "preorder":"Pre Order",
    "item_name" : "Item Name (Max 80 Character)",
    "item_code":"Item Code(Auto Generate)",
    "choose_menu_available_time":"Choose Menu Availabilty Time",
    "from_time":"From Time",
    "to_time":"To Time",
    "product_pricing" : "Product Pricing",
    "description":"Description",
    "description_title":"Description Title",
    "product_description":"Product Description (max- 2000 Characters)",
    "add_button":"Add",
    "save_button":"Save",
    "cancel_button":"Cancel",
    "select_cat":"Select Category",
    "enter_category_name":"Enter Category Name",
    "add_category":"Add Category",
    "save_changes":"Save changes",
    "product_list":"Product List",
    "select_language":"Select Language",
    "s_no":"S.no",
    "more":"more",
    "category_id":"category id",
    "category_name":"Category name",
    "total_items":"Total items",
    "add_product":"Add Product",
    "view_product":"View Product",
    "revome_category":"Revome Category",
    "edit_category":"Edit Category",
    "edit_product":"Edit Product",
    "yummy_rate":"yummy_rate",
    "close_button":"Close",
    "remove_product":"",
   }

   time_list = [
     "00:30",
     "01:00",
     "01:30",
     "02:00",
     "02:30",
     "03:00",
     "03:30",
     "04:00",
     "04:30",
     "05:00",
     "05:30",
     "06:00",
     "06:30",
     "07:00",
     "07:30",
     "08:00",
     "08:30",
     "09:00",
     "09:30",
     "10:00",
     "10:30",
     "11:00",
     "11:30",
     "12:00",
     "12:30",
     "13:00",
     "13:30",
     "14:00",
     "14:30",
     "15:00",
     "15:30",
     "16:00",
     "16:30",
     "17:00",
     "17:30",
     "18:00",
     "18:30",
     "19:00",
     "19:30",
     "20:00",
     "20:30",
     "21:00",
     "21:30",
     "22:00",
     "22:30",
     "23:00",
     "23:30"
   ]


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: ProductService,
    private categoyservice: CategoryService,
    private storage: LocalStorage,
    private changeDetection: ChangeDetectorRef,
    private profileservice: ProfileService,
    private datePipe: DatePipe,
    public City_list : City_list,
  ) { }

  ngOnInit() {
    


    let lang_setting =  this.storage.lang_setting;
    if(!lang_setting){
      this.lable_text = this.lable_text;
    }else{
      if(lang_setting == "eng"){
       this.lable_text = this.City_list.lang_eng;
      }else if(lang_setting == "tam"){
        this.lable_text = this.City_list.lang_tam;
      }else if(lang_setting == "hin"){
        this.lable_text = this.City_list.lang_hin;
      }else if(lang_setting == "mal"){
        this.lable_text = this.City_list.lang_mal;
      }else if(lang_setting == "chi"){
        this.lable_text = this.City_list.lang_chin;
      }
      else if(lang_setting == "sin"){
        this.lable_text = this.City_list.lang_sinhala;
      }
    }
    


    this.add_desc();
    this.route.params.subscribe(params => {
      this._prodId = params.prodid;
    })

    let profile_id =  this.storage.user.profile_id
    console.log(profile_id);
    this.categoyservice.list_by_profile_id(profile_id).subscribe(res => {
      this.categories = res.rows;
      console.log(this.categories);
    })
    console.log(this._prodId);

    if (this._prodId) {
      this.service.view(this._prodId).subscribe(res => {
        this.product = res;
        console.log(this.product);

        let availtime = this.product.prod_avail_time.split("to");
        this.start_time = availtime[0].trim();
        this.end_time = availtime[1].trim();
        this.initForm();
      })
    } else {
      this.product = {};
    }
    this.initForm();
  }


  initForm() {
    this.productForm = this.formBuilder.group({
      cat_id: [this.product ? this.product.cat_id : '', [Validators.required]],
      prod_name: [this.product ? this.product.prod_name : '', [Validators.required]],
      prod_desc: [this.product ? this.product.prod_desc : '', [Validators.required]],
      prod_price: [this.product ? this.product.prod_price : '', [Validators.required]],
      prod_avail_time_s: [this.start_time, [Validators.required]],
      prod_avail_time_e: [this.end_time, [Validators.required]]
    });
  }

  get f() { return this.productForm.controls; }

  selectImg(event) {
    this.prodImage = event.target.files[0];
  }

  add_product() {
     let Pre_order_type = "No";
     if(this.pre_order_time == ''){
      Pre_order_type = 'No';
     }else{
      Pre_order_type = 'Yes';
     }
     let datas = {
      cat_id : this.cat_id,
      profile_id : this.storage.user.profile_id,
      prod_name : this.prod_name,
      prod_img : JSON.stringify(this.image_array),
      Pre_order_type : Pre_order_type,
      pre_order_time : this.pre_order_time,
      item_name : this.item_name,
      item_code : this.item_code,
      item_start_time : this.item_start_time,
      item_end_time : this.item_end_time,
      prod_price : this.prod_price,
      prod_desc : JSON.stringify(this.desc_array),
     }
     console.log(datas);
      this.service.create(datas).subscribe(res => {
        console.log(res);
        alert("Created successfully");
        this.clear_product_data();
        this.router.navigateByUrl('/merchant/productlist');
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
  }

  uploadImg() {
    if (this.prodImage) {
      this.service.uploadimage(this.product.prod_id, this.prodImage).subscribe(res => {
        console.log(res);
        
        this.router.navigateByUrl('/merchant/products-list');
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


  add_cat(){
    this.router.navigateByUrl('/merchant/add-new-category');
  }


  clear_cat(){
    this.cat_name = ''; 
  }

  cat_creaate(){
    this.error_cat_empty = false;
    if(this.cat_name == ''){
      this.error_cat_empty = true;
    }else{
      let a = {
        cat_name : this.cat_name,
        cat_pid : ""
      }
      this.categoyservice.create(a).subscribe(res => {
          console.log(res);
          this.cat_name = ''; 
          alert("Created successfully");
          this.ngOnInit();
          this.router.navigateByUrl('/merchant/productview');
          // this.notify.showSuccess("Logged in successfully", "LOGIN");
        }, err => {
          // this.notify.showError(err, "LOGIN");
        });
    }

 
  }

  clear_product_data(){
   this.cat_id = '';
   this.prod_name = '';
   this.image_array = [];
   this.img_url = '';
   this.pre_order_time = '';
   this.Pre_order_type = '';
   this.start_time = '12:00';
   this.end_time = '12:00';
   this.prod_price = 0;
   this.item_name = '';
   this.desc_array = [];
   this.add_desc();
  }


  add_desc(){
    this.desc_array.push({"title":"","desc":""})
  }

  desc_remove(data){
    console.log(data);
    this.desc_array.splice(data, 1);
  }

  add_img(){
    if(this.image_array.length < 4){
      this.image_array.push({image_path:this.img_url});
    }else{
      alert("Max 4 img only");
    }
  }

  img_remove(data){
    console.log(data);
    this.image_array.splice(data, 1);
  }

  clear_image(){
    this.img_url = '';
  }


  selectImgidprofileone(event) {
    this.idprofileone = event.target.files[0];
    this.idprofileoneuploadImg()
  }

  idprofileoneuploadImg() {
    var reguser = 1
    if (this.idprofileone) {
      this.profileservice.idprofileone(reguser, this.idprofileone).subscribe(res => {
        console.log(res);
        this.img_url = res.url;
        // this.router.navigateByUrl('dashboard');
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
    } else {
      alert('Select Image');
    }
  }

  Check_validation(){
  this.clear_validation();
  var value_check = false;
  if(this.cat_id == ''){
    this.error_cat_id = true;
    value_check = true;
  }
  if(this.prod_name == ''){
    this.error_prod_name = true;
    value_check = true;
  }
  if(this.image_array.length == 0){
    this.error_prod_img = true;
    value_check = true;
  }
  if(this.item_name == ''){
    this.error_item_name = true;
    value_check = true;
  }
  if(this.item_code == ''){
    this.error_item_code = true;
    value_check = true;
  }
  if(this.item_start_time == ''){
    this.error_item_start_time = true;
    value_check = true;
  }
  if(this.item_end_time== ''){
    this.error_item_end_time = true;
    value_check = true;
  }
  if(this.prod_price == 0){
    this.error_prod_price = true;
    value_check = true;
  }
  if(this.desc_array.length == 0){
    this.error_prod_desc = true;
    value_check = true;
  }

  if(this.item_start_time !== '' &&  this.item_end_time !== ''){
    console.log(this.item_start_time,this.item_end_time);
    //  2021-11-09T05:47:34.672Z
     let date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
     console.log(date);
     let start_time = date+"T"+this.item_start_time+":34.672Z";
     let end_time = date+"T"+this.item_end_time+":34.672Z";
     let test_start_time = new Date(start_time);
     let test_end_time = new Date(end_time);
     console.log(test_start_time,test_end_time);
     if(start_time > end_time){
       alert("Please select the correct time");
       value_check = true;
     }
  }

  if(value_check == false){
    this.add_product();
  }else {

  }
  }



  clear_validation() {
    this.error_cat_id = false;
    this.error_profile_id = false;
    this.error_prod_name = false;
    this.error_prod_img = false;
    this.error_Pre_order_type =false;
    this.error_pre_order_time = false;
    this.error_item_name = false;
    this.error_item_code = false;
    this.error_item_start_time = false;
    this.error_item_end_time = false;
    this.error_prod_price = false;
    this.error_prod_desc = false;
    this.error_prod_status = false;
  }


  ////Tag Action////////
  bussiness_name_tag_action(){
    var controls = this.cat_name;
    console.log(controls);
    setTimeout(() => {
        if (controls == '') {
          this.error_cat_empty = true;
        }else{
          this.error_cat_empty = false;
        }
    }, 1000);
  }

  
}
