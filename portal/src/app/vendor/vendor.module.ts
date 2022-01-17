import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MasterheaderPage } from '../layout/masterheader/masterheader.page';
import { MasterfooterPage } from '../layout/masterfooter/masterfooter.page';
import { MasterasidePage } from '../layout/masteraside/masteraside.page';
import { MasterlayoutPage } from '../layout/masterlayout/masterlayout.page';

import { VendorPageRoutingModule } from './vendor-routing.module';

import { VendorPage } from './vendor.component';
import { LayoutModule } from '../layout/layout.module';
import { DashboardPage } from './dashboard/dashboard.page';
import { AddPremiumUserPage } from './add-premium-user/add-premium-user.page';
import { AddSubVendorFormPage } from './add-sub-vendor-form/add-sub-vendor-form.page';
import { FormsPage } from './forms/forms.page';
import { RemoveSubVendorFormPage } from './remove-sub-vendor-form/remove-sub-vendor-form.page';
import { WithdrawFormPage } from './withdraw-form/withdraw-form.page';
import { LoginPage } from './login/login.page';
import { ViewsubvendordashboardComponent } from './viewsubvendordashboard/viewsubvendordashboard.component';
import { ViewprevendordashboardComponent } from './viewprevendordashboard/viewprevendordashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VendorPageRoutingModule
  ],
  declarations: [
    VendorPage,
    MasterlayoutPage,
    MasterheaderPage,
    MasterfooterPage,
    MasterasidePage,
    LoginPage,
    DashboardPage,
    AddPremiumUserPage,
    AddSubVendorFormPage,
    FormsPage,
    RemoveSubVendorFormPage,
    WithdrawFormPage,
    ViewsubvendordashboardComponent,
    ViewprevendordashboardComponent
  ]
})
export class VendorPageModule { }
