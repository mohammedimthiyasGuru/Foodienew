import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/_core/_data/localstorage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  user_details : any;
  page_visible : boolean =  false;


  constructor(private storage: LocalStorage,private router: Router,) { }

  ngOnInit() {
    this.user_details = this.storage.user;
    console.log('user_details - ' , this.user_details);
    if(this.user_details){
      this.page_visible = true;
    }else{
      this.router.navigateByUrl('/auth/login');
    }

  }

  clear(){
    this.storage.clear();
    // this.router.navigateByUrl('/home')
  }

}
