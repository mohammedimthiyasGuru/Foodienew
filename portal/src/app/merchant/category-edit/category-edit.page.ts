import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/_core/services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.page.html',
  styleUrls: ['./category-edit.page.scss'],
})
export class CategoryEditPage implements OnInit {

  cat_data : any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: CategoryService,
  ) { }


  categoryForm: FormGroup;
  submitted = false;

  // categories: any[];

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.categoryForm = this.formBuilder.group({
      category: ['', [Validators.required]]
    });

    this.cat_data = JSON.parse(localStorage.getItem('cat_data'));
    console.log(this.cat_data);
    // const controls = this.categoryForm.controls;
    // controls.category.value = this.cat_data.cat_id

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
      cat_id : this.cat_data.cat_id
    };
console.log(_category);

    this.service.update(_category).subscribe(res => {
      console.log("Created Successfully");
      this.router.navigateByUrl('/merchant/list_category');
      // this.notify.showSuccess("Logged in successfully", "LOGIN");
    }, err => {
      // this.notify.showError(err, "LOGIN");
    });
  }


  ngOnDestroy(): void {
    this.submitted = false;
  }

  back(){
    this.router.navigateByUrl('/merchant/list_category');
  }


}
