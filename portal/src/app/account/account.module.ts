import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.component';
import { LoginPage } from './login/login.page';
import { ForgotPasswordPage } from './forgot-password/forgot-password.page';
import { RegisterPage } from './register/register.page';
import { OtpPage } from './otp/otp.page';
import { OtpFpPage } from './otp-fp/otp-fp.page';
import { ResetPasswordPage } from './reset-password/reset-password.page';


import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { LoaderComponent } from '../common/loader/loader.component';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { RegistereditComponent } from './registeredit/registeredit.component';
import { BankdetailseditComponent } from './bankdetailsedit/bankdetailsedit.component';
import { HomeeditComponent } from './homeedit/homeedit.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { VerifcationotpComponent } from './verifcationotp/verifcationotp.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AutocompleteLibModule,
    AccountPageRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y'}),
    GooglePlaceModule
  ],
  declarations: [AccountPage, LoginPage, ForgotPasswordPage, RegisterPage, OtpPage, OtpFpPage, ResetPasswordPage,LoaderComponent, RegistereditComponent,BankdetailseditComponent,HomeeditComponent,ChangepasswordComponent,VerifcationotpComponent]
})
export class AccountPageModule {}
