import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/_core/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {

  categories_list: any[];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: CategoryService,
  ) { }

  ngOnInit() {

    this.service.list({}).subscribe(res => {
      this.categories_list = res.rows;
      console.log(this.categories_list);
    })


  }

  edit(cat_id,cat_name){
    let cat_data = {
      cat_id : cat_id,
      cat_name : cat_name
    }
    localStorage.setItem('cat_data',JSON.stringify(cat_data));
    this.router.navigateByUrl('/merchant/update_category');
  }

  statusupdate(data,id){
    console.log(data);
    if(data == 'A'){
       let a = {
        cat_status : data,
        cat_id: id
       }
      this.service.update_status(a).subscribe(res => {
        console.log("Updated Successfully");
        this.ngOnInit();
      }, err => {
      });
    }
    if(data == 'B'){
      let a = {
        cat_status : data,
        cat_id: id
       }
      this.service.update_status(a).subscribe(res => {
        console.log("Update Successfully");
        this.ngOnInit();
      }, err => {
      });
    }
  }


  cat_delete(_id){
    this.service.delete(_id).subscribe(res => {
      console.log("Update Successfully");
      this.ngOnInit();
    }, err => {
    });
  }
}
