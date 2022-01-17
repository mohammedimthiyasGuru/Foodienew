import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { RegisterPage } from './register/register.page';
import { LoginPage } from './login/login.page';
import { EmailVerificationPage } from './email-verification/email-verification.page';
import { ForgetPasswordPage } from './forget-password/forget-password.page';
import { ForgotverificationPage } from './forgotverification/forgotverification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AuthPage,RegisterPage,LoginPage,EmailVerificationPage,ForgetPasswordPage,ForgotverificationPage]
})
export class AuthPageModule {}
