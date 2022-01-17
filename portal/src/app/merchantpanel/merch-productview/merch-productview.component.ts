import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/_core/services/category.service';
import { ProductService } from 'src/app/_core/services/product.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { City_list } from '../../../assets/xlsxtojson'


@Component({
  selector: 'app-merch-productview',
  templateUrl: './merch-productview.component.html',
  styleUrls: ['./merch-productview.component.scss'],
})
export class MerchProductviewComponent implements OnInit {

  productForm: FormGroup;
  submitted = false;

  categories: any[];
  product: any;
  _prodId: number;
  prodImage: File;

  Product_list: any;

  cat_name  = '';
  cat_id = '';
  error_cat_empty = false;

  error_cat_reason_empty = false;
  error_prod_reason_empty = false;
  cat_reason = '';
  prod_reason = '';
 
  lang_setting = '';





  view_product_visible = false;
  view_product_detail : any;
  view_product_desc_visible = false;
  view_product_desc_detail : any;
  view_product_img_visible = false;
  view_product_img_detail : any;

  view_cat_delete_visible = false;
  view_cat_delete_detail : any;
  view_prod_delete_visible = false;
  view_prod_delete_detail : any;



  

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
    "remove_product":"Remove"
   };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: ProductService,
    
    private categoyservice: CategoryService,
    private storage: LocalStorage,
    private changeDetection: ChangeDetectorRef,
    public City_list : City_list,
  ) { }

  ngOnInit() {



    let lang_setting =  this.storage.lang_setting;
    console.log(lang_setting);
    if(!lang_setting){
      this.lable_text = this.lable_text;
      this.lang_setting = "eng";
    }else{
      this.lang_setting = lang_setting;
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





    this.error_cat_empty = false;
    this.error_cat_reason_empty = false;
    this.error_prod_reason_empty = false;


    this.view_product_visible = false;
    this.view_product_desc_visible = false;
    this.view_product_img_visible = false;
    this.view_cat_delete_visible = false;
    this.view_prod_delete_visible = false;

    this.cat_reason = '';
    this.prod_reason = '';



    // this.service.list({
    //   profile_id: this.storage.user.profile_id
    // }).subscribe(res => {
    //   this.Product_list = res.rows;
    //   console.log(this.Product_list);
    // })


    let profile_id =  this.storage.user.profile_id
    console.log(profile_id);
    this.categoyservice.list_by_profile_id(profile_id).subscribe(res => {
      this.categories = res.rows;
      this.categories.forEach(element => {
        element.show_status = false;
        element.product_data = [];
      });
      console.log(this.categories);
      this.stage2();
    })






  }

  stage2(){
    this.service.list({
      profile_id: this.storage.user.profile_id
    }).subscribe(res => {
      this.Product_list = res.rows;
      console.log(this.Product_list);
      this.stage3();
    })
  }
  stage3(){
    for(let a = 0 ; a < this.categories.length; a++){
      for(let b = 0 ; b < this.Product_list.length; b++){
          if(this.categories[a].cat_id == this.Product_list[b].cat_id){
            this.Product_list[b].prod_desc = JSON.parse(this.Product_list[b].prod_desc);
            this.Product_list[b].prod_img = JSON.parse(this.Product_list[b].prod_img);
            this.categories[a].product_data.push(this.Product_list[b])
          }
      }
      if(a == this.categories.length - 1){
        console.log(this.categories);
      }
    }
  }


  show_table(index){
    this.categories.forEach(element => {
      element.show_status = false;
    });
    this.categories[index].show_status = true;
  }

  hide_table(index){
    this.categories.forEach(element => {
      element.show_status = false;
    });
    this.categories[index].show_status = false;
  }




  edit(product_details) {
    console.log(product_details);
    localStorage.setItem('prod_data', JSON.stringify(product_details));
    this.router.navigate(['/merchant/product-edit', product_details.prod_id]);
  }

  // statusupdate(data,id){
  //   console.log(data);
  //   let cat_data = {
  //     cat_id : cat_id,
  //     cat_name : cat_name
  //   }
  //   localStorage.setItem('cat_data',JSON.stringify(cat_data));
  //   this.router.navigateByUrl('/merchant/update_category');
  // }

  statusupdate(data, id) {
    console.log(data);
    if (data == 'A') {
      let a = {
        prod_status: data,
        prod_id: id
      }
      this.service.update_status(a).subscribe(res => {
        console.log("Updated Successfully");
        this.ngOnInit();
      }, err => {
      });
    }
    if (data == 'B') {
      let a = {
        prod_status: data,
        prod_id: id
      }
      this.service.update_status(a).subscribe(res => {
        console.log("Update Successfully");
        this.ngOnInit();
      }, err => {
      });
    }
  }

  cat_delete(_id) {
    this.service.delete(_id).subscribe(res => {
      console.log("Update Successfully");
      this.ngOnInit();
    }, err => {
    });
  }

  edit_product(data){
    console.log(data);
    this.storage.product_detail = data;
    this.router.navigateByUrl('/merchant_panel/productedit');
  }


  move_to_add_product(data) {
    this.storage.cat_id = data;
    this.router.navigateByUrl('/merchant_panel/productcreate');
  }

  move_to_add_cat(){
    this.storage.cat_id = '';
    this.router.navigateByUrl('/merchant_panel/productcreate');
  }


  clear_cat(){
    this.cat_name = ''; 
  }

  cat_creaate(){
    this.error_cat_empty = false;
    if(this.cat_name == ''){
      this.error_cat_empty = true;
    }else{
  const _category = {
        cat_name: this.cat_name,
        cat_id : this.cat_id
      };
  console.log(_category);
      this.categoyservice.update(_category).subscribe(res => {
        console.log("Updated Successfully");
        this.ngOnInit();
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
    }

 
  }

  edit_data(data){
    console.log(data);
    this.cat_id = data.cat_id;
    this.cat_name = data.cat_name;
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

   show_product_visible(data){
    this.view_product_visible = true;
    this.view_product_detail = data;
    console.log(this.view_product_detail);
   }

   hide_product_visible(){
    this.view_product_visible = false;
  }


  show_product_desc_visible(data){
    this.view_product_desc_visible = true;
    this.view_product_desc_detail = data;
    console.log(this.view_product_desc_detail);
   }

   hide_product_desc_visible(){
    this.view_product_desc_visible = false;
  }


  show_product_img_visible(data){
    this.view_product_img_visible = true;
    this.view_product_img_detail = data;
    console.log(this.view_product_img_detail);
   }

   hide_product_img_visible(){
    this.view_product_img_visible = false;
  }


  show_cat_delete_visible(data){
    this.view_cat_delete_visible = true;
    this.view_cat_delete_detail = data;
    console.log(this.view_cat_delete_detail);
   }

   hide_cat_delete_visible(){
    this.view_cat_delete_visible = false;
  }


  show_prod_delete_visible(data){
    this.view_prod_delete_visible = true;
    this.view_prod_delete_detail = data;
    console.log(this.view_prod_delete_detail);
   }

   hide_prod_delete_visible(){
    this.view_prod_delete_visible = false;
  }



  // (keyup)="bussiness_name_tag_action()"
  ////Tag Action////////
  bussiness_name_tag_action1(){
    var controls = this.cat_reason;
    console.log(controls);
    setTimeout(() => {
        if (controls == '') {
          this.error_cat_reason_empty = true;
        }else{
          this.error_cat_reason_empty = false;
        }
    }, 1000);
  }

    ////Tag Action////////
    bussiness_name_tag_action2(){
      var controls = this.prod_reason;
      console.log(controls);
      setTimeout(() => {
          if (controls == '') {
            this.error_prod_reason_empty = true;
          }else{
            this.error_prod_reason_empty = false;
          }
      }, 1000);
    }


  delect_cat_action(){
    this.error_cat_reason_empty = false;
    if(this.cat_reason == ''){
      this.error_cat_reason_empty = true;
    }else{
  const _category = {
        cat_reason: this.cat_reason,
        cat_status : "D",
        cat_id : this.view_cat_delete_detail.cat_id
      };
  console.log(_category);
      this.categoyservice.update_status(_category).subscribe(res => {
        console.log("Deleted Successfully");
        alert("Deleted Successfully");
        this.ngOnInit();
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
    }
  }
   
  delect_prod_action(){
    this.error_prod_reason_empty = false;
    if(this.prod_reason == ''){
      this.error_prod_reason_empty = true;
    }else{
  const _category = {
        prod_reason: this.prod_reason,
        prod_status : "D",
        prod_id : this.view_prod_delete_detail.prod_id
      };
  console.log(_category);
      this.service.update_status(_category).subscribe(res => {
        console.log("Deleted Successfully");
        alert("Deleted Successfully");
        this.ngOnInit();
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
    }

  }


  onChange(event){
    const newVal = event.target.value;
    this.storage.lang_setting = newVal;
    this.ngOnInit();

  }
   

    

}
