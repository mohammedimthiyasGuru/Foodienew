import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorage } from 'src/_core/_data/localstorage';
import { StatusBar } from '@ionic-native/status-bar/ngx';



import { Location } from '@angular/common'
import { NavigationEnd } from '@angular/router'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loader :boolean = true;
  private returnUrl: any;
  timeLeft: number = 60;
  interval;

  private history: string[] = []



  constructor(
    private router: Router,
    private storage: LocalStorage,
    private statusBar : StatusBar,
     private location: Location
  ) {

    this.statusBar.show();
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#fec429');
    // this.statusBar.backgroundColorByHexString('#fec429');
    this.timers_start();
  }
  ngOnInit() {

  }

  check_page(){
    console.log(this.storage.user);
    console.log(this.storage.user_location);
    if (this.storage.user) {
      this.loader = false;
      this.storage.reload = {value : 1};
      this.router.navigateByUrl('/client-home');
    } else if (this.storage.user_location){
      this.router.navigateByUrl('/client-home');
      this.loader = false;
      this.storage.reload = {value : 1};
    }
     else {
      if (this.storage.user_location) {
        this.router.navigateByUrl('/client-home');
        this.loader = false;
        this.storage.reload = {value : 1};
      } else {
        this.loader = false;
        this.storage.reload = {value : 0};
        this.router.navigate(['/slider-home']);
        // this.router.navigateByUrl('/slider-home');
      }
    }
  }

  timers_start() {
    this.timeLeft = 2;
    this.interval = setInterval(() => {
      console.log(this.timeLeft);
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
        clearInterval(this.interval);
        this.check_page();
      }
    }, 1000);
  }

}
