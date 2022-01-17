import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.component';
import { LayoutModule } from '../layout/layout.module';
import { DashboardPage } from './dashboard/dashboard.page';
import { AnnouncementPage } from './announcement/announcement.page';
import { FormViewPage } from './form-view/form-view.page';
import { FormViewInfoPage } from './form-view-info/form-view-info.page';
import { ReportDownloadPage } from './report-download/report-download.page';
import { ReportGenerationPage } from './report-generation/report-generation.page';
import { UserListPage } from './user-list/user-list.page';
import { UsersPage } from './users/users.page';
import { FormsPage } from './forms/forms.page';
import { MasterlayoutPage } from '../layout/masterlayout/masterlayout.page';
import { MasterheaderPage } from '../layout/masterheader/masterheader.page';
import { MasterasidePage } from '../layout/masteraside/masteraside.page';
import { MasterfooterPage } from '../layout/masterfooter/masterfooter.page';
import { LoginPage } from './login/login.page';
import { VendorPage } from './vendor/vendor.page';
import { VendorEditPage } from './vendor-edit/vendor-edit.page';
import { SubVendorPage } from './sub-vendor/sub-vendor.page';
import { VideoPage } from './video/video.page';
import { MerchantDetailComponent } from './merchant-detail/merchant-detail.component';
import { MerchantEditComponent } from './merchant-edit/merchant-edit.component';

import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { LoaderComponent } from '../common/loader/loader.component';
// import { SelectLocationPage } from './select-location/select-location.page';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminPageRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y'}),
    GooglePlaceModule
  ],
  declarations: [
    AdminPage,
    MasterlayoutPage,
    MasterheaderPage,
    MasterasidePage,
    MasterfooterPage,
    LoginPage,
    AnnouncementPage,
    DashboardPage,
    FormViewPage,
    FormViewInfoPage,
    FormsPage,
    ReportDownloadPage,
    ReportGenerationPage,
    UserListPage,
    UsersPage,
    VendorPage,
    VendorEditPage,
    SubVendorPage,
    VideoPage,
    MerchantDetailComponent,
    MerchantEditComponent,
    LoaderComponent,
  ]
})
export class AdminPageModule {}
