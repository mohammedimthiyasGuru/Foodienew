import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MasterlayoutPage } from '../layout/masterlayout/masterlayout.page';
import { AdminPage } from './admin.component';
import { AnnouncementPage } from './announcement/announcement.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { FormViewInfoPage } from './form-view-info/form-view-info.page';
import { FormViewPage } from './form-view/form-view.page';
import { FormsPage } from './forms/forms.page';
import { ReportDownloadPage } from './report-download/report-download.page';
import { ReportGenerationPage } from './report-generation/report-generation.page';
import { UserListPage } from './user-list/user-list.page';
import { UsersPage } from './users/users.page';
import { LoginPage } from './login/login.page';
import { VideoPage } from './video/video.page';
import { VendorPage } from './vendor/vendor.page';
import { VendorEditPage } from './vendor-edit/vendor-edit.page';
import { SubVendorPage } from './sub-vendor/sub-vendor.page';
import { MerchantDetailComponent } from './merchant-detail/merchant-detail.component';
import { MerchantEditComponent } from './merchant-edit/merchant-edit.component';
import { FormstypeComponent } from './formstype/formstype.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: '',
    component: MasterlayoutPage,
    children: [
      {
        path: 'dashboard',
        component: DashboardPage,
      },
      {
        path: 'users',
        component: UserListPage,
      },
      {
        path: 'users/:userid',
        component: UsersPage,
      },
      {
        path: 'forms',
        component: FormsPage,
      },
      {
        path: 'form-view',
        component: FormViewPage,
      },
      {
        path: 'form-view-info',
        component: FormViewInfoPage
      },
      {
        path: 'report-generation',
        component: ReportGenerationPage,
      },
      {
        path: 'report-download',
        component: ReportDownloadPage,
      },
      {
        path: 'announcement',
        component: AnnouncementPage,
      },
      {
        path: 'Vendor_form',
        component: VendorPage,
      },

      {
        path: 'forms_type',
        component: FormstypeComponent,
      },

      {
        path: 'vendor_edit/:userid',
        component: VendorEditPage,
      },


      {
        path: 'merchant_form',
        component: MerchantDetailComponent,
      },

      {
        path: 'merchant_edit:userid',
        component: MerchantEditComponent,
      },



      {
        path: 'subvendor_form',
        component: SubVendorPage,
      },
      {
        path: 'live_video/:userid',
        component: VideoPage,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class AdminPageRoutingModule { }
