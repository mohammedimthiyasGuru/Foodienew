import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/_core/_data/localstorage';
import { Router } from '@angular/router';
import { CommonService } from '../../../_core/services/common.service';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.page.html',
  styleUrls: ['./main-layout.page.scss'],
})
export class MainLayoutPage implements OnInit {

  active: string;
  user_details : any;
  constructor(private storage: LocalStorage,private router: Router,private service: CommonService,) { }

  ngOnInit() {
    // this.active = 'HOME';
    // console.log(this.storage.footer_text);
    if(!this.storage.footer_text){
      this.storage.footer_text = 'HOME';
      this.active = 'HOME';
    }else{
      this.active = this.storage.footer_text;
    }
  }

  onTab(_tab) {
    this.user_details = this.storage.user;
    // console.log(this.user_details);
    if(_tab == 'VIDEO'){
      if(!this.user_details){
        this.router.navigate(['/auth/login']);
        this.storage.routes_text = 'videolist';
      }else{
        this.router.navigate(['/videolist']);
      }
      this.active = _tab;
      this.storage.footer_text = _tab;
    }
    if(_tab == 'FAV'){
      if(!this.user_details){
        this.router.navigate(['/auth/login']);
        this.storage.routes_text = 'favourites';
      }else{
        this.fav_check();
      }
      this.active = _tab;
      this.storage.footer_text = _tab;
    }
    if(_tab == 'NEARBY'){
      if(!this.user_details){
        this.router.navigate(['/auth/login']);
        this.storage.routes_text = 'nearby';
      }else{
        this.router.navigate(['/nearby']);
      }
      this.active = _tab;
      this.storage.footer_text = _tab;
    }
    if(_tab == 'PROFILE'){
      if(!this.user_details){
        this.router.navigate(['/auth/login']);
        this.storage.routes_text = 'user_profile';
      }else{
        this.router.navigate(['/user_profile']);
      }
      this.active = _tab;
      this.storage.footer_text = _tab;
    }
    if(_tab == 'HOME'){
      this.active = _tab;
      this.storage.footer_text = _tab;
      this.router.navigate(['/client-home']);
      this.storage.routes_text = 'client-home';

    }
  }


  fav_check() {
    let user = this.storage.user;
    // console.log(user);
    if(user){
      let a = {
        customer_id  : user.user_id
      }
      this.service.list_fav(a).subscribe(response => {
        // console.log(response);
        if(response.count == 0){
          this.router.navigateByUrl('/fav-empty');
        }else{
          this.router.navigate(['/favourites']);
        }
        // this.merchants = response.rows;
      });
    }
  }






}
