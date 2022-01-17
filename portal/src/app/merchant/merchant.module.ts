import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchantPageRoutingModule } from './merchant-routing.module';

import { MerchantPage } from './merchant.component';
import { MasterheaderPage } from '../layout/masterheader/masterheader.page';
import { MasterfooterPage } from '../layout/masterfooter/masterfooter.page';
import { MasterasidePage } from '../layout/masteraside/masteraside.page';
import { MasterlayoutPage } from '../layout/masterlayout/masterlayout.page';
import { LayoutModule } from '../layout/layout.module';
import { DashboardPage } from './dashboard/dashboard.component';
import { PostProductPage } from './post-product/post-product.page';
import { AddNewCategoryPage } from './add-new-category/add-new-category.page';
import { AddRemoveExistingPage } from './add-remove-existing/add-remove-existing.page';
import { AddRemoveExistingFormPage } from './add-remove-existing-form/add-remove-existing-form.page';
import { DeliveredPage } from './delivered/delivered.page';
import { OrderPreparingPage } from './order-preparing/order-preparing.page';
import { ReportDownloadPage } from './report-download/report-download.page';
import { RiderPickedPage } from './rider-picked/rider-picked.page';
import { UpdateOrderStatusPage } from './update-order-status/update-order-status.component';
import { WalletPointPage } from './wallet-point/wallet-point.page';
import { ProductDetailPage } from './product-detail/product-detail.page';
import { LoginPage } from './login/login.page';
import { ProductListPage } from './product-list/product-list.page';
import { CategoryListPage } from './category-list/category-list.page';
import { ProductEditPage } from './product-edit/product-edit.page';
import { CategoryEditPage } from './category-edit/category-edit.page';
import { LoaderComponent } from '../common/loader/loader.component';


import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
// import { LoaderComponent } from './loader/loader.component';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { VideoListComponent } from './video-list/video-list.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProductviewComponent } from './productview/productview.component';
import { WalletcreditComponent } from './walletcredit/walletcredit.component';
import { WalletdebitComponent } from './walletdebit/walletdebit.component';
import { CreditreportComponent } from './creditreport/creditreport.component';
import { DebitreportComponent } from './debitreport/debitreport.component';

import { NgApexchartsModule } from "ng-apexcharts";
import { NgxPaginationModule } from 'ngx-pagination';


import { NgImageSliderModule } from 'ng-image-slider';
import {TimeAgoPipe} from 'time-ago-pipe';
import { MerchantDetailComponent } from '../admin/merchant-detail/merchant-detail.component';
import { MerchantWallerComponent } from './merchant-waller/merchant-waller.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MerchantPageRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y'}),
    GooglePlaceModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    NgApexchartsModule,
    NgxPaginationModule,
    NgImageSliderModule
 

  ],
  declarations: [
    MerchantPage,
    MasterlayoutPage,
    MasterheaderPage,
    MasterasidePage,
    MasterfooterPage,
    LoginPage,
    DashboardPage,
    PostProductPage,
    AddNewCategoryPage,
    ProductDetailPage,
    ProductListPage,
    AddRemoveExistingPage,
    AddRemoveExistingFormPage,
    DeliveredPage,
    OrderPreparingPage,
    ReportDownloadPage,
    RiderPickedPage,
    UpdateOrderStatusPage,
    WalletPointPage,
    CategoryListPage,
    CategoryEditPage,
    ProductListPage,
    ProductEditPage,
    LoaderComponent,
    VideoListComponent,

    ProductcreateComponent,
    ProductviewComponent,
    WalletcreditComponent,
    WalletdebitComponent,
    CreditreportComponent,
    DebitreportComponent,
    MerchantDetailComponent,
    MerchantWallerComponent,
    TimeAgoPipe,
    UpdateOrderStatusPage,
    MerchantPage


    
 







  ]
})
export class MerchantPageModule {}
