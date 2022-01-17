import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterlayoutPage } from '../layout/masterlayout/masterlayout.page';
import { AddPremiumUserPage } from './add-premium-user/add-premium-user.page';
import { AddSubVendorFormPage } from './add-sub-vendor-form/add-sub-vendor-form.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { FormsPage } from './forms/forms.page';
import { LoginPage } from './login/login.page';
import { RemoveSubVendorFormPage } from './remove-sub-vendor-form/remove-sub-vendor-form.page';
import { VendorPage } from './vendor.component';
import { ViewprevendordashboardComponent } from './viewprevendordashboard/viewprevendordashboard.component';
import { ViewsubvendordashboardComponent } from './viewsubvendordashboard/viewsubvendordashboard.component';
import { WithdrawFormPage } from './withdraw-form/withdraw-form.page';

const routes: Routes = [
  {
    path: '',
    component: VendorPage
  },
  {
    path: 'login',
    component: LoginPage
  },

  // {
  //   path: 'forms',
  //   component: FormsPage,
  // },

  // {
  //   path: 'add-sub-vendor-form',
  //   component: AddSubVendorFormPage,
  // },

  // {
  //   path: 'add-premium-user',
  //   component: AddPremiumUserPage,
  // },

  {
    path: '',
    component: MasterlayoutPage,
    children:[
      {
        path: 'dashboard',
        component: DashboardPage,
      },
      {
        path: 'forms',
        component: FormsPage,
      },
      {
        path: 'add-sub-vendor-form',
        component: AddSubVendorFormPage,
      },
      {
        path: 'add-premium-user',
        component: AddPremiumUserPage,
      },
      {
        path: 'withdraw-form',
        component: WithdrawFormPage,
      },
      {
        path:'remove-sub-vendor-form',
        component:RemoveSubVendorFormPage
      },
      {
        path:'subvendor/:id',
        component:ViewsubvendordashboardComponent
      },
      {
        path:'prevendor/:id',
        component:ViewprevendordashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorPageRoutingModule {}
