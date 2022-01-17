import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/_core/services/category.service';
import { ProductService } from 'src/app/_core/services/product.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss'],
})
export class ProductviewComponent implements OnInit {

  productForm: FormGroup;
  submitted = false;

  categories: any[];
  product: any;
  _prodId: number;
  prodImage: File;

  Product_list: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: ProductService,
    private categoyservice: CategoryService,
    private storage: LocalStorage,
    private changeDetection: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.service.list({
      profile_id: this.storage.user.profile_id
    }).subscribe(res => {
      this.Product_list = res.rows;
      console.log(this.Product_list);
    })
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

}
