import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonPageRoutingModule } from './common-routing.module';

import { CommonPage } from './common.component';
import { UserProfileSettingPage } from './user-profile-setting/user-profile-setting.page';
import { MessagePage } from './message/message.page';
import { GoLivePage } from './go-live/go-live.page';
import { LayoutModule } from '../layout/layout.module';
import { MasterlayoutPage } from '../layout/masterlayout/masterlayout.page';
import { MasterheaderPage } from '../layout/masterheader/masterheader.page';
import { MasterfooterPage } from '../layout/masterfooter/masterfooter.page';
import { MasterasidePage } from '../layout/masteraside/masteraside.page';
import {TimeAgoPipe} from 'time-ago-pipe';


import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonPageRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y'}),
    GooglePlaceModule
  ],
  declarations: [
    CommonPage,
    MasterlayoutPage,
    MasterheaderPage,
    MasterfooterPage,
    MasterasidePage,
    UserProfileSettingPage,
    MessagePage,
    GoLivePage,
    LoaderComponent,
    TimeAgoPipe
  ]
})
export class CommonPageModule {}
