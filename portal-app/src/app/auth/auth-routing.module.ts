import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutPage } from './../layout/main-layout/main-layout.page';
import { AuthPage } from './auth.page';
import { ForgetPasswordPage } from './forget-password/forget-password.page';
import { LoginPage } from './login/login.page';
import { MerchantLandingPage } from './merchant-landing/merchant-landing.page';
import { OtpFpPage } from './otp-fp/otp-fp.page';
import { PasswordOtpPage } from './password-otp/password-otp.page';
import { PasswordResetPage } from './password-reset/password-reset.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: 'forget-password',
        component: ForgetPasswordPage
      },
      {
        path: 'password-otp',
        component: PasswordOtpPage
      },
      {
        path: 'password-reset',
        component: PasswordResetPage
      },
      {
        path: 'merchant-landing',
        component: MerchantLandingPage
      },
      {
        path: 'otp-fp',
        component: OtpFpPage
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule { }
