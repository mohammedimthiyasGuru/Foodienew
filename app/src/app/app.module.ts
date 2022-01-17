import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutPage } from './layout/main-layout/main-layout.page';
import { FooterLayoutPage } from './layout/footer-layout/footer-layout.page';
import { ClientHomePage } from './client-home/client-home.page';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductListPage } from './product-list/product-list.page';
import { MyOrderPage } from './my-order/my-order.page';
import { NearbyPage } from './nearby/nearby.page';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { SelectLocationPage } from './select-location/select-location.page';
import { UserProfilePage } from './user-profile/user-profile.page';
import { EditProfilePage } from './edit-profile/edit-profile.page';
import { OrderEmptyPage } from './order-empty/order-empty.page';
import { AllOffersPage } from './all-offers/all-offers.page';
import { LocationPage } from './location/location.page';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderhistoryPage } from './orderhistory/orderhistory.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SliderHomePage } from './slider-home/slider-home.page';
import { NewPasswordPage } from './auth/new-password/new-password.page';
import { FavemptyPage } from './favempty/favempty.page';
import { FavouritePage } from './favourite/favourite.page';
import { LoaderComponent } from './loader/loader.component';
import { HomePage } from './home/home.page';
import { NgxPullToRefreshModule } from 'ngx-pull-to-refresh';

import { FCM } from 'plugins/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { PromocodeListComponent } from './promocode-list/promocode-list.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotificationComponent } from './notification/notification.component';
import { ChangeLocationComponent } from './change-location/change-location.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PaymentHistoryListComponent } from './payment-history-list/payment-history-list.component';



import { SellMyProductComponent } from './sell-my-product/sell-my-product.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { ChatsingleviewComponent } from './chatsingleview/chatsingleview.component';


import {TimeAgoPipe} from 'time-ago-pipe';


// import { FCM } from '@ionic-native/fcm/ngx';


import { VideolistComponent } from './videolist/videolist.component';
// import { GestureSliderComponent } from './gesture-slider/gesture-slider.component';
// making hammer config (3)

import { NgxPaginationModule } from 'ngx-pagination';
import { YummypayhistorylistComponent } from './yummypayhistorylist/yummypayhistorylist.component';

// import { FlexLayoutModule } from '@angular/flex-layout';
import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';


import { Camera } from '@ionic-native/camera/ngx';
import { TrackingScreenComponent } from './tracking-screen/tracking-screen.component';
import { StatusBar } from '@ionic-native/status-bar/ngx'

import { NavigationBarColor } from 'ionic-navigationbar-color';


// SwiperOptions from 'swiper' could also be used here instead of SwiperConfigInterface
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};





@NgModule({
  declarations: [AppComponent, MainLayoutPage, FooterLayoutPage, ClientHomePage, ProductListPage, MyOrderPage, NearbyPage, SelectLocationPage, LocationPage, UserProfilePage, EditProfilePage, OrderEmptyPage, AllOffersPage, SliderHomePage, OrderhistoryPage, NewPasswordPage,FavemptyPage,FavouritePage,LoaderComponent,HomePage,BusinessDetailComponent,PromocodeListComponent,CartPageComponent,NotificationComponent,ChangeLocationComponent,PaymentMethodComponent,PaymentHistoryListComponent,VideolistComponent,YummypayhistorylistComponent,SellMyProductComponent,ChatlistComponent,ChatsingleviewComponent,TimeAgoPipe,TrackingScreenComponent,
   ],
  imports: [ SwiperModule,NgxPaginationModule,CommonModule,NgxPullToRefreshModule, ToastrModule.forRoot(), ReactiveFormsModule, BrowserModule, BrowserAnimationsModule, FormsModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, AgmCoreModule.forRoot({ apiKey: 'AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y' }), GooglePlaceModule],
  providers: [Camera,Geolocation,StatusBar,NavigationBarColor, FCM, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
