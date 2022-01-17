import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.component';
import { DashboardPage } from './dashboard/dashboard.page';
import { AuthGuard } from './_core/guard';
import { AdminPage } from './admin/admin.component';
import { MerchantPage } from './merchant/merchant.component';
import { AccountPage } from './account/account.component';
import { CommonPage } from './common/common.component';
import { VendorPage } from './admin/vendor/vendor.page';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomeeditComponent } from './account/homeedit/homeedit.component';
import { HomepageComponent } from './account/homepage/homepage.component';
import { MerchDashboadComponent } from './merchantpanel/merch-dashboad/merch-dashboad.component';
import { MerchOrderdetailsComponent } from './merchantpanel/merch-orderdetails/merch-orderdetails.component';
import { MerchProductcreateComponent } from './merchantpanel/merch-productcreate/merch-productcreate.component';
import { MerchProductviewComponent } from './merchantpanel/merch-productview/merch-productview.component';
import { MerchChatComponent } from './merchantpanel/merch-chat/merch-chat.component';
import { MerchCreditreportComponent } from './merchantpanel/merch-creditreport/merch-creditreport.component';
import { MerchDebitreportComponent } from './merchantpanel/merch-debitreport/merch-debitreport.component';
import { MerchGoliveComponent } from './merchantpanel/merch-golive/merch-golive.component';
import { MerchWallettComponent } from './merchantpanel/merch-wallett/merch-wallett.component';
import { MerchEditProfileComponent } from './merchantpanel/merch-edit-profile/merch-edit-profile.component';
import { MerchEditBussinessComponent } from './merchantpanel/merch-edit-bussiness/merch-edit-bussiness.component';
import { MerchEditBankinfoComponent } from './merchantpanel/merch-edit-bankinfo/merch-edit-bankinfo.component';
import { MerchEditChangepasswordComponent } from './merchantpanel/merch-edit-changepassword/merch-edit-changepassword.component';
import { MerchVideoAddComponent } from './merchantpanel/merch-video-add/merch-video-add.component';
import { MerchVideoViewComponent } from './merchantpanel/merch-video-view/merch-video-view.component';
import { MerchWalletPremiumComponent } from './merchantpanel/merch-wallet-premium/merch-wallet-premium.component';
import { MerchPromoCodeComponent } from './merchantpanel/merch-promo-code/merch-promo-code.component';
import { VideoListComponent } from './merchant/video-list/video-list.component';
import { MerchVideoListComponent } from './merchantpanel/merch-video-list/merch-video-list.component';
import { MerchChatOneComponent } from './merchantpanel/merch-chat-one/merch-chat-one.component';
import { MerchChatTwoComponent } from './merchantpanel/merch-chat-two/merch-chat-two.component';
import { MerchProducteditComponent } from './merchantpanel/merch-productedit/merch-productedit.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },

  {
    path: 'home',
    component: HomePage
  },

  {
    path: 'loginpage',
    component: LoginpageComponent
  },

  {
    path: 'merchant_panel/dashboard',
    component: MerchDashboadComponent
  },

  {
    path: 'merchant_panel/orderdetails',
    component: MerchOrderdetailsComponent
  },



  {
    path: 'merchant_panel/chat',
    component: MerchChatComponent
  },

  {
    path: 'merchant_panel/wallett',
    component: MerchWallettComponent
  },

  {
    path: 'merchant_panel/creditreport',
    component: MerchCreditreportComponent
  },

  {
    path: 'merchant_panel/debitreport',
    component: MerchDebitreportComponent
  },

  {
    path: 'merchant_panel/golive/:userid',
    component: MerchGoliveComponent
  },


  {
    path: 'merchant_panel/merch_edit_profile/:id',
    component: MerchEditProfileComponent
  },

  {
    path: 'merchant_panel/merch_edit_bussiness/:id',
    component: MerchEditBussinessComponent
  },


  {
    path: 'merchant_panel/merch_edit_bankinfo/:id',
    component: MerchEditBankinfoComponent
  },


  {
    path: 'merchant_panel/merch_edit_changepassword/:id',
    component: MerchEditChangepasswordComponent
  },


 





  {
    path: 'merchant_panel/productcreate',
    component: MerchProductcreateComponent
  },

  {
    path: 'merchant_panel/productlist',
    component: MerchProductviewComponent
  },

  {
    path: 'merchant_panel/productedit',
    component: MerchProducteditComponent
  },


  {
    path: 'merchant_panel/wallett_premium',
    component: MerchWalletPremiumComponent
  },

  {
    path: 'merchant_panel/promo_code',
    component: MerchPromoCodeComponent
  },

  {
    path: 'merchant_panel/videolist',
    component: MerchVideoListComponent
  },


  {
    path: 'merchant_panel/merch_video_add',
    component: MerchVideoAddComponent
  },

  {
    path: 'merchant_panel/merch_video_view',
    component: MerchVideoViewComponent
  },


  {
    path: 'merchant_panel/chat_one',
    component: MerchChatOneComponent
  },

  {
    path: 'merchant_panel/chat_two',
    component: MerchChatTwoComponent
  },



















  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: '/account/home_page'
  // },
  {
    path: 'dashboard',
    component: DashboardPage,
    canActivate: [AuthGuard]
  },

  {
    path: 'admin', component: AdminPage,
    children: [
      {
        path: '',
        loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminPageModule)
      },]
  },

  {
    path: 'merchant', component: MerchantPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./merchant/merchant.module').then( m => m.MerchantPageModule)
      },]
  },

  {
    path: 'merchant', component: MerchantPage,
    children: [
      {
        path: 'updateorderstatus',
        loadChildren: () => import('./merchant/merchant.module').then( m => m.MerchantPageModule)
      },]
  },























  {
    path: 'account', component: AccountPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
      },]
  },


  {
    path: 'common', component: CommonPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./common/common.module').then( m => m.CommonPageModule)
      },]
  },


  {
    path: 'vendor', component: VendorPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./common/common.module').then( m => m.CommonPageModule)
      },]
  },


  // {
  //   path: '**', redirectTo: '/dashboard', pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
