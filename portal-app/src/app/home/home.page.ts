import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/_core/_data/localstorage';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private storage: LocalStorage,
    statusBar: StatusBar
  ) {
    statusBar.styleDefault();
    statusBar.overlaysWebView(false);
    statusBar.backgroundColorByHexString('#f8c333');
  }

  ngOnInit(): void {
    console.log(this.storage.user);
    if (this.storage.user) {

     setTimeout(() => {
      console.log('Dashboard');
      this.router.navigate(['/mob_dashboard']);
    }, 1000);

    } else {

      setTimeout(() => {
        console.log('Home interval');
        this.router.navigate(['/mob_landingpage']);
      }, 3000);

    }




  }

  ngOnDestroy(): void {
    console.log('Home destroy');
  }
}
