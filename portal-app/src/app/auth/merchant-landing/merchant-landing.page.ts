import { Component, OnInit } from '@angular/core';


import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-merchant-landing',
  templateUrl: './merchant-landing.page.html',
  styleUrls: ['./merchant-landing.page.scss'],
})
export class MerchantLandingPage implements OnInit {
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };


  slides = 0;
  constructor(statusBar: StatusBar) {

    statusBar.styleDefault();
    statusBar.overlaysWebView(false);
    statusBar.backgroundColorByHexString('#fffff');

   }

  ngOnInit() {
  }

  onSwipeRight(event, data) {
    if (this.slides > 0) {
      console.log('event left', data);
      this.slides = this.slides + data;
      console.log('slides', this.slides);
    }
  }

  onSwipeLeft(event, data) {
    if (this.slides < 2) {
      console.log('event left', data);
      this.slides = this.slides + data;
      console.log('slides', this.slides);
    }
  }

}
