import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/_core/services/product.service';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

@Component({
  selector: 'app-add-remove-existing',
  templateUrl: './add-remove-existing.page.html',
  styleUrls: ['./add-remove-existing.page.scss'],
})
export class AddRemoveExistingPage implements OnInit {

  products: any[];

  constructor(
    private router: Router,
    private service: ProductService,
    private storage: LocalStorage
  ) { }

  ngOnInit() {
    this.service.list({
      profile_id: this.storage.user.profile_id
    }).subscribe(res => {
      console.log(res);
      
      this.products = res.rows;
    })
  }

}
