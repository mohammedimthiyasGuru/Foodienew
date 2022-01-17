import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AccountPage } from './account.component';
import { ForgotPasswordPage } from './forgot-password/forgot-password.page';
import { LoginPage } from './login/login.page';
import { OtpPage } from './otp/otp.page';
import { RegisterPage } from './register/register.page';
import { ResetPasswordPage } from './reset-password/reset-password.page';
import { OtpFpPage } from './otp-fp/otp-fp.page';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { GuideinfoComponent } from './guideinfo/guideinfo.component';
import { RegistereditComponent } from './registeredit/registeredit.component';
import { HomeeditComponent } from './homeedit/homeedit.component';
import { BankdetailseditComponent } from './bankdetailsedit/bankdetailsedit.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { VerifcationotpComponent } from './verifcationotp/verifcationotp.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ExceluploadComponent } from './excelupload/excelupload.component';

const routes: Routes = [
  {
    path: '',
    component: AccountPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'register',
    component: RegisterPage
  },
  {
    path:'otp',
    component:OtpPage
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPage
  },
  {
    path: 'otp-fp',
    component: OtpFpPage
  },
  {
    path: 'guideinfo',
    component: GuideinfoComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordPage
  },
  {
    path: 'privacypolicy',
    component: PrivacypolicyComponent
  },
  {
    path: 'edit_bussiness_info/:id',
    component: RegistereditComponent
  },
  {
    path: 'edit_profile_info/:id',
    component: HomeeditComponent
  },
  {
    path: 'edit_bank_info/:id',
    component: BankdetailseditComponent
  },
  {
    path: 'Change-password/:id',
    component: ChangepasswordComponent
  },
  {
    path: 'otpverification',
    component: VerifcationotpComponent
  },
  {
    path: 'home_page',
    component: HomepageComponent
  },
  {
    path: 'excelupload',
    component: ExceluploadComponent
  },
 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
