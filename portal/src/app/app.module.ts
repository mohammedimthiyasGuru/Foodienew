import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './_core/guard';
import { InterceptService } from './_core/utils/intercept.service';
import { DataService } from './_core/services/data.service';
import { PaginationUtil } from './_core/utils/pagination-util';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.component';


import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';

import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { NgApexchartsModule } from "ng-apexcharts";

import { AdminPage } from './admin/admin.component'
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MerchDashboadComponent } from './merchantpanel/merch-dashboad/merch-dashboad.component';
import { MerchSidemenuComponent } from './merchantpanel/merch-sidemenu/merch-sidemenu.component';
import { MerchHeaderComponent } from './merchantpanel/merch-header/merch-header.component';
import { MerchOrderdetailsComponent } from './merchantpanel/merch-orderdetails/merch-orderdetails.component';
import { MerchProductcreateComponent } from './merchantpanel/merch-productcreate/merch-productcreate.component';
import { MerchProductviewComponent } from './merchantpanel/merch-productview/merch-productview.component';
import { MerchChatComponent } from './merchantpanel/merch-chat/merch-chat.component';
import { MerchWallettComponent } from './merchantpanel/merch-wallett/merch-wallett.component';
import { MerchCreditreportComponent } from './merchantpanel/merch-creditreport/merch-creditreport.component';
import { MerchDebitreportComponent } from './merchantpanel/merch-debitreport/merch-debitreport.component';
import { MerchGoliveComponent } from './merchantpanel/merch-golive/merch-golive.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxPaginationModule } from 'ngx-pagination';
import { MerchEditBankinfoComponent } from './merchantpanel/merch-edit-bankinfo/merch-edit-bankinfo.component';
import { MerchEditProfileComponent } from './merchantpanel/merch-edit-profile/merch-edit-profile.component';
import { MerchEditChangepasswordComponent } from './merchantpanel/merch-edit-changepassword/merch-edit-changepassword.component';
import { MerchEditBussinessComponent } from './merchantpanel/merch-edit-bussiness/merch-edit-bussiness.component';
import { MerchantEditComponent } from './admin/merchant-edit/merchant-edit.component';
import { MerchVideoAddComponent } from './merchantpanel/merch-video-add/merch-video-add.component';
import { MerchVideoViewComponent } from './merchantpanel/merch-video-view/merch-video-view.component';


import { MerchWalletPremiumComponent } from './merchantpanel/merch-wallet-premium/merch-wallet-premium.component';
import { MerchVideoListComponent } from './merchantpanel/merch-video-list/merch-video-list.component';
import { MerchPromoCodeComponent } from './merchantpanel/merch-promo-code/merch-promo-code.component';
import { MerchChatOneComponent } from './merchantpanel/merch-chat-one/merch-chat-one.component';
import { MerchChatTwoComponent } from './merchantpanel/merch-chat-two/merch-chat-two.component';
import { MerchProducteditComponent } from './merchantpanel/merch-productedit/merch-productedit.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    AdminPage,
    LoginpageComponent,



    MerchDashboadComponent,
    MerchSidemenuComponent,
    MerchHeaderComponent,
    MerchOrderdetailsComponent,
    MerchProductcreateComponent,
    MerchProductviewComponent,
    MerchProducteditComponent,
    MerchChatComponent,
    MerchWallettComponent,
    MerchCreditreportComponent,
    MerchDebitreportComponent,
    MerchGoliveComponent,

   
    MerchEditBankinfoComponent,
    MerchEditProfileComponent,
    MerchEditChangepasswordComponent,
    MerchEditBussinessComponent,
    MerchantEditComponent,
    MerchVideoAddComponent,
    MerchVideoViewComponent,

    MerchWalletPremiumComponent,
    MerchVideoListComponent,
    MerchPromoCodeComponent,
    MerchChatOneComponent,
    MerchChatTwoComponent,
    MerchPromoCodeComponent,

  


    // TimeAgoPipe,


  ],
  entryComponents: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y'}),
    GooglePlaceModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    NgApexchartsModule,

    NgApexchartsModule,
    NgxPaginationModule,
    NgImageSliderModule

  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    DataService,
    PaginationUtil
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
