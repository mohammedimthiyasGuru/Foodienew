import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthPageRoutingModule } from './auth-routing.module';
import { AuthPage } from './auth.page';
import { MerchantLandingPage } from './merchant-landing/merchant-landing.page';
import { LoginPage } from './login/login.page';
import { ForgetPasswordPage } from './forget-password/forget-password.page';
import { PasswordResetPage } from './password-reset/password-reset.page';
import { PasswordOtpPage } from './password-otp/password-otp.page';
import { OtpFpPage } from './otp-fp/otp-fp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AuthPageRoutingModule
  ],
  declarations: [AuthPage, MerchantLandingPage, LoginPage, ForgetPasswordPage, PasswordOtpPage, PasswordResetPage, OtpFpPage]
})
export class AuthPageModule {}
