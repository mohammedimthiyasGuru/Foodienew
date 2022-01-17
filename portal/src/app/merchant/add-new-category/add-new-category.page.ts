import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/_core/services/category.service';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.page.html',
  styleUrls: ['./add-new-category.page.scss'],
})
export class AddNewCategoryPage implements OnInit {

  categoryForm: FormGroup;
  submitted = false;

  categories: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: CategoryService,
  ) { }

  ngOnInit() {
    this.service.list({}).subscribe(res => {
      this.categories = res.rows;
    })
    this.initForm();
  }

  initForm() {
    this.categoryForm = this.formBuilder.group({
      category: ['', [Validators.required]]
    });
  }

  get f() { return this.categoryForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.categoryForm.invalid) {
      return;
    }

    const controls = this.categoryForm.controls;
    const _category = {
      cat_name: controls.category.value,
    };
console.log(_category);

    this.service.create(_category).subscribe(res => {
      console.log("Created Successfully");
      alert("Category added Successfully");
      this.router.navigateByUrl('/merchant/post-product');
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });
  }


  ngOnDestroy(): void {
    this.submitted = false;
  }


  cat_delete(_id) {
    this.service.delete(_id).subscribe(res => {
      console.log("Update Successfully");
      this.ngOnInit();
    }, err => {
    });
  }

}
