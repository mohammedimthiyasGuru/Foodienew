import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { EmailVerificationPage } from './email-verification/email-verification.page';
import { ForgetPasswordPage } from './forget-password/forget-password.page';
import { LocationPage } from '../location/location.page';
import { LoginPage } from './login/login.page';
import { NewPasswordPage } from './new-password/new-password.page';
import { RegisterPage } from './register/register.page';
import { ForgotverificationPage } from './forgotverification/forgotverification.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
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
    path: 'forget-password',
    component: ForgetPasswordPage
  },
  {
    path:'email-verification',
    component:EmailVerificationPage
  },
  {
    path:'forgot_email_verification',
    component:ForgotverificationPage
  },
  {
    path:'new-password',
    component:NewPasswordPage
  },
  {
    path:'location',
   component: LocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
