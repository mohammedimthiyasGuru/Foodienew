import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/_core/services/category.service';
import { ProductService } from 'src/app/_core/services/product.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit, OnDestroy {


  productForm: FormGroup;
  submitted = false;

  categories: any[];
  product: any;
  _prodId: number;
  prodImage: File;

  start_time = "01:00 AM";
  end_time = "12:00 PM";

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
    this.route.params.subscribe(params => {
      this._prodId = params.prodid;
    })
    this.categoyservice.list({}).subscribe(res => {
      this.categories = res.rows;
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

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }

    const controls = this.productForm.controls;
    let a  = Math.round((10/100) * +controls.prod_price.value)
    console.log(a);
    const _product = {
      prod_name: controls.prod_name.value,
      prod_desc: controls.prod_desc.value,
      prod_price: +controls.prod_price.value + a,
      prod_avail_time: "" + controls.prod_avail_time_s.value + " to " + "" + controls.prod_avail_time_e.value,
      cat_id: controls.cat_id.value,
      profile_id: this.storage.user.profile_id,
      mercant_price : controls.prod_price.value,
      commission_amount : a
    };
    console.log(_product);

    if (this.product.prod_id) {
      _product["prod_id"] = this.product.prod_id;
      this.service.update(_product).subscribe(res => {
        console.log(res);
        alert("Updated successfully");
        this.router.navigateByUrl('merchant/products-list');
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
    } else {
      this.service.create(_product).subscribe(res => {
        console.log(res);
        alert("Created successfully");
        this.router.navigateByUrl('/merchant/products-list');
        // this.notify.showSuccess("Logged in successfully", "LOGIN");
      }, err => {
        // this.notify.showError(err, "LOGIN");
      });
    }
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


}
