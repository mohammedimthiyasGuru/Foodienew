import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../_core/services/auth.service';
import { LocalStorage } from '../../_core/_data/localstorage';
import { CustomerService } from '../../_core/services/customer.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-favempty',
  templateUrl: './favempty.page.html',
  styleUrls: ['./favempty.page.scss'],
})
export class FavemptyPage implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrManager,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private storage: LocalStorage,
    private CustomerService: CustomerService,
  ) { }

  ngOnInit() {
    // fav-empty
  }
  fav_con(){
    this.storage.footer_text = 'HOME';
  }


}
