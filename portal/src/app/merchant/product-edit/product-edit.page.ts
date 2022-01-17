import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/_core/services/category.service';
import { ProductService } from 'src/app/_core/services/product.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductEditPage implements OnInit {

  prod_data : any;

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

    this.prod_data = JSON.parse(localStorage.getItem('prod_data'));
    console.log(this.prod_data);

     let testdata = this.prod_data.prod_avail_time.split("to");
     this.start_time = testdata[0].substring(0, testdata[0].length - 1);
     this.end_time = testdata[1].substring(1);
     console.log(this.start_time,this.end_time);




    // this.route.params.subscribe(params => {
    //   this._prodId = params.prodid;
    // })
    this.categoyservice.list({}).subscribe(res => {
      this.categories = res.rows;
    })

    // if (this._prodId) {
    //   this.service.view(this._prodId).subscribe(res => {
    //     this.product = res;
    //     console.log(this.product);
        
    //     this.changeDetection.detectChanges();
    //   })
    // }
    this.initForm();
    this.changeDetection.detectChanges();
  }


  initForm() {
    this.productForm = this.formBuilder.group({
      cat_id: [this.product ? this.product.cat_id : '', [Validators.required]],
      prod_name: [this.product ? this.product.prod_name : '', [Validators.required]],
      prod_desc: [this.product ? this.product.prod_desc : '', [Validators.required]],
      prod_price: [this.product ? this.product.prod_price : '', [Validators.required]],
      prod_avail_time_s: [this.product ? this.product.prod_avail_time : '', [Validators.required]],
      prod_avail_time_e: [this.product ? this.product.prod_avail_time : '', [Validators.required]]
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
    prod_avail_time: ""+controls.prod_avail_time_s.value + " to " + ""+controls.prod_avail_time_e.value,
    cat_id: controls.cat_id.value,
    profile_id: this.storage.user.profile_id,
    prod_id : this.prod_data.prod_id,
    mercant_price : controls.prod_price.value,
    commission_amount : a
    };
console.log(_product);

    this.service.update(_product).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('merchant/products-list');
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });
  }

  saveImg() {
    console.log(this.prod_data.prod_id, this.prodImage);
    
    this.service.uploadimage(this.prod_data.prod_id, this.prodImage).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('merchant/products-list');
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });
  }

  ngOnDestroy(): void {
    this.submitted = false;
  }

}
