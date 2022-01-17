import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterlayoutPage } from '../layout/masterlayout/masterlayout.page';

import { CommonPage } from './common.component';
import { GoLivePage } from './go-live/go-live.page';
import { MessagePage } from './message/message.page';
import { UserProfileSettingPage } from './user-profile-setting/user-profile-setting.page';

const routes: Routes = [
  {
    path: '',
    component: CommonPage
  },
  {
    path: '',
    component: MasterlayoutPage,
    children: [
      {
        path: 'message',
        component: MessagePage
      },
      {
        path: 'message/:receiver',
        component: MessagePage
      },
      {
        path: 'go-live',
        component: GoLivePage
      },
      {
        path: 'user-profile',
        component: UserProfileSettingPage
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonPageRoutingModule { }
