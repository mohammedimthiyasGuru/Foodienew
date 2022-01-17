import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/_core/_data/localstorage';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  user_details : any;


  constructor(private storage: LocalStorage) { }

  ngOnInit() {
    this.user_details = this.storage.user;
  }

}
