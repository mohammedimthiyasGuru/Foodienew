import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantDetailComponent } from '../admin/merchant-detail/merchant-detail.component';
import { MasterlayoutPage } from '../layout/masterlayout/masterlayout.page';
import { AddNewCategoryPage } from './add-new-category/add-new-category.page';
import { AddRemoveExistingFormPage } from './add-remove-existing-form/add-remove-existing-form.page';
import { AddRemoveExistingPage } from './add-remove-existing/add-remove-existing.page';
import { CategoryEditPage } from './category-edit/category-edit.page';
import { CategoryListPage } from './category-list/category-list.page';
import { CreditreportComponent } from './creditreport/creditreport.component';
import { DashboardPage } from './dashboard/dashboard.component';
import { DebitreportComponent } from './debitreport/debitreport.component';
import { DeliveredPage } from './delivered/delivered.page';
import { LoginPage } from './login/login.page';
import { MerchantWallerComponent } from './merchant-waller/merchant-waller.component';

import { MerchantPage } from './merchant.component';
import { OrderPreparingPage } from './order-preparing/order-preparing.page';
import { PostProductPage } from './post-product/post-product.page';
import { ProductDetailPage } from './product-detail/product-detail.page';
import { ProductEditPage } from './product-edit/product-edit.page';
import { ProductListPage } from './product-list/product-list.page';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProductviewComponent } from './productview/productview.component';
import { ReportDownloadPage } from './report-download/report-download.page';
import { RiderPickedPage } from './rider-picked/rider-picked.page';
import { UpdateOrderStatusPage } from './update-order-status/update-order-status.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoviewComponent } from './videoview/videoview.component';
import { WalletPointPage } from './wallet-point/wallet-point.page';
import { WalletcreditComponent } from './walletcredit/walletcredit.component';
import { WalletdebitComponent } from './walletdebit/walletdebit.component';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // { path: 'dashboard', component: DashboardComponent },


  {
    path: 'updateorderstatus',
    component: UpdateOrderStatusPage
  },







      {
        path: 'dashboard',
        component: DashboardPage
      },


      
     



      {
        path: 'rider-picked',
        component: RiderPickedPage
      },
      {
        path: 'delivered',
        component: DeliveredPage
      },
    
      {
        path: 'post-product',
        component: PostProductPage
      },
      {
        path: 'add-new-category',
        component: AddNewCategoryPage
      },
    
      {
        path: 'product-add',
        component: ProductDetailPage
      },
    
      {
        path: 'products-list',
        component: ProductListPage
      },
      {
        path: 'products/:prodid',
        component: ProductDetailPage
      },
      {
        path: 'add-remove-existing-form',
        component: AddRemoveExistingFormPage
      },
      {
        path: 'wallet-point',
        component: WalletPointPage
      },
      {
        path: 'merchant_wallet',
        component: MerchantWallerComponent
      },
      {
        path: 'report-download',
        component: ReportDownloadPage
      },
      {
        path: 'video_list/:userid',
        component: VideoListComponent
      },
    
      {
        path: 'video_view',
        component: VideoviewComponent
      },
    
    
      {
        path: 'product_create',
        component: ProductcreateComponent
      },
    
      {
        path: 'product_view',
        component: ProductviewComponent
      },
    
    
      {
        path: 'report_debit',
        component: DebitreportComponent
      },
    
      {
        path: 'report_credit',
        component: CreditreportComponent
      },
    
    
      {
        path: 'wallet_debit',
        component: WalletdebitComponent
      },
    
      {
        path: 'wallet_credit',
        component: WalletcreditComponent
      },
    
    ///// imthiyas code /////
      {
        path: 'update_category',
        component: CategoryEditPage
      },
      {
        path: 'list_category',
        component: CategoryListPage
      },
      {
        path: 'product-edit/:productid',
        component: ProductEditPage
      },
      {
        path: 'list_product',
        component: ProductListPage
      },


  




  
 
  






  // {
  //   path: '',
  //   component: MasterlayoutPage,
  //   children: [

  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantPageRoutingModule { }
