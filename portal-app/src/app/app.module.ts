import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainLayoutPage } from './layout/main-layout/main-layout.page';
import { FooterLayoutPage } from './layout/footer-layout/footer-layout.page';
import { HeaderPage } from './layout/header/header.page';
import { LayoutfooterPage } from './layout/layoutfooter/layoutfooter.page';
import { ChatUserListPage } from './chat-user-list/chat-user-list.page';
import { ChatMessagePage } from './chat-message/chat-message.page';
import { VideoListPage } from './video-list/video-list.page';
import { VideoViewPage } from './video-view/video-view.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { OrdersListPage } from './orders-list/orders-list.page';
import { AuthGuard } from './_core/guard';
import { InterceptService } from './_core/utils/intercept.service';
import { NotificsPage } from './notifics/notifics.page';
import {TimeAgoPipe} from 'time-ago-pipe';
import { VideoaddComponent } from './videoadd/videoadd.component';

// import { FCM } from '@ionic-native/fcm/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
// import { NavigationBar } from '@ionic-native/navigation-bar/ngx';

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MobVideoListComponent } from './mobile/mob-video-list/mob-video-list.component';
import { MobLandingpageComponent } from './mobile/mob-landingpage/mob-landingpage.component';
import { MobVideoViewComponent } from './mobile/mob-video-view/mob-video-view.component';
import { MobDashboardComponent } from './mobile/mob-dashboard/mob-dashboard.component';
import { MobMessageComponent } from './mobile/mob-message/mob-message.component';
import { MobMessageForgototpComponent } from './mobile/mob-message-forgototp/mob-message-forgototp.component';
import { MobMessageForgotpasswordComponent } from './mobile/mob-message-forgotpassword/mob-message-forgotpassword.component';
import { MobMessageLoginComponent } from './mobile/mob-message-login/mob-message-login.component';
import { MobMessageOtpComponent } from './mobile/mob-message-otp/mob-message-otp.component';
import { MobNotificationComponent } from './mobile/mob-notification/mob-notification.component';
import { MobMessageViewComponent } from './mobile/mob-message-view/mob-message-view.component';
import { MobResetpasswordComponent } from './mobile/mob-resetpassword/mob-resetpassword.component';


import { MobHeaderComponent } from './mobile/mob-header/mob-header.component';
import { MobFooterComponent } from './mobile/mob-footer/mob-footer.component';
import { MobVideoaddComponent } from './mobile/mob-videoadd/mob-videoadd.component';


// import { IonicApp, IonicErrorHandler } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar/ngx';


export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}


@NgModule({
  declarations: [
    TimeAgoPipe,
    AppComponent,
    HeaderPage,
    FooterLayoutPage,
    LayoutfooterPage,
    MainLayoutPage,
    ChatUserListPage, ChatMessagePage,
    VideoListPage, VideoViewPage,
    DashboardPage, OrdersListPage,
    NotificsPage,
    VideoaddComponent,


    MobVideoListComponent,
    MobLandingpageComponent,
    MobVideoViewComponent,
    MobDashboardComponent,
    MobMessageComponent,
    MobMessageForgototpComponent,
    MobMessageForgotpasswordComponent,
    MobMessageLoginComponent,
    MobMessageOtpComponent,
    MobNotificationComponent,
    MobMessageViewComponent,
    MobResetpasswordComponent,
    MobHeaderComponent,
    MobFooterComponent,
    MobVideoaddComponent,

















  ],
  entryComponents: [],
  imports: [
    CommonModule,
    BrowserModule,
    HammerModule,
    FormsModule,
    // NavigationBar,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
    AuthGuard,
    StatusBar,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    FCM,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
