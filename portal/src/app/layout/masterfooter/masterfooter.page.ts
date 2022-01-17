import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/app/_core/_data/localstorage';

@Component({
  selector: 'app-masterfooter',
  templateUrl: './masterfooter.page.html',
  styleUrls: ['./masterfooter.page.scss'],
})
export class MasterfooterPage implements OnInit {

  currentUser: any;

  constructor(
    private storage: LocalStorage
  ) {
  }

  ngOnInit() {
    this.currentUser = this.storage.user;
  }

}
