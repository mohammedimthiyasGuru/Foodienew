import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChatMessagePage } from './chat-message/chat-message.page';
import { ChatUserListPage } from './chat-user-list/chat-user-list.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { FormsPage } from './forms/forms.page';
import { HomePage } from './home/home.page';
import { LayoutfooterPage } from './layout/layoutfooter/layoutfooter.page';
import { MainLayoutPage } from './layout/main-layout/main-layout.page';
import { NotificsPage } from './notifics/notifics.page';
import { OrdersListNewComponent } from './orders-list-new/orders-list-new.component';
import { OrdersListPage } from './orders-list/orders-list.page';
import { VideoListPage } from './video-list/video-list.page';
import { VideoViewPage } from './video-view/video-view.page';
import { VideoaddComponent } from './videoadd/videoadd.component';
import { AuthGuard } from './_core/guard';


import { MobDashboardComponent } from './mobile/mob-dashboard/mob-dashboard.component';
import { MobMessageComponent } from './mobile/mob-message/mob-message.component';
import { MobMessageForgototpComponent } from './mobile/mob-message-forgototp/mob-message-forgototp.component';
import { MobMessageForgotpasswordComponent } from './mobile/mob-message-forgotpassword/mob-message-forgotpassword.component';
import { MobMessageLoginComponent } from './mobile/mob-message-login/mob-message-login.component';
import { MobMessageOtpComponent } from './mobile/mob-message-otp/mob-message-otp.component';
import { MobMessageViewComponent } from './mobile/mob-message-view/mob-message-view.component';
import { MobNotificationComponent } from './mobile/mob-notification/mob-notification.component';
import { MobVideoListComponent } from './mobile/mob-video-list/mob-video-list.component';
import { MobVideoViewComponent } from './mobile/mob-video-view/mob-video-view.component';
import { MobLandingpageComponent } from './mobile/mob-landingpage/mob-landingpage.component';
import { MobResetpasswordComponent } from './mobile/mob-resetpassword/mob-resetpassword.component';

import { MobVideoaddComponent } from './mobile/mob-videoadd/mob-videoadd.component';




const routes: Routes = [
  {
    path: '',
    component: HomePage
  },


  {
    path: 'mob_dashboard',
    component: MobDashboardComponent
  },

  {
    path: 'mob_message',
    component: MobMessageComponent
  },

  {
    path: 'mob_notification',
    component: MobNotificationComponent
  },

  {
    path: 'mob_video_list',
    component: MobVideoListComponent
  },

  {
    path: 'mob_video_view',
    component: MobVideoViewComponent
  },

  {
    path: 'mob_video_add/:id',
    component: MobVideoaddComponent
  },

  {
    path: 'mob_message_view',
    component: MobMessageViewComponent
  },

  {
    path: 'mob_message_login',
    component: MobMessageLoginComponent
  },

  {
    path: 'mob_message_otp',
    component: MobMessageOtpComponent
  },

  {
    path: 'mob_message_forgotpassword',
    component: MobMessageForgotpasswordComponent
  },



  {
    path: 'mob_message_forgototp',
    component: MobMessageForgototpComponent
  },


  {
    path: 'mob_resetpassword',
    component: MobResetpasswordComponent
  },


  {
    path: 'mob_landingpage',
    component: MobLandingpageComponent
  },

  {
    path: 'video-view/:videoid/:type',
    component: VideoViewPage
  },


  {
    path: 'orders-list/:orderstage',
    component: OrdersListPage
  },














  {
    path: 'video-views/:videoid/:type',
    component: VideoViewPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'orders-lists/:orderstage',
    component: OrdersListPage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'chat-message/:receiver',
    component: ChatMessagePage
  },
  {
    path: 'add_video/:userid',
    component: VideoaddComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path:'',
    component:MainLayoutPage,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'dashboard',
        component: DashboardPage
      },

      {
        path: 'new-orders-list/:orderstage',
        component: OrdersListNewComponent
      },
      {
        path: 'forms',
        component: FormsPage
      },

    ]
  },
  {
    path:'',
    component:LayoutfooterPage,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'video-list',
        component: VideoListPage
      },

      {
        path: 'chat-user-list',
        component: ChatUserListPage
      },
      {
        path: 'notifications',
        component: NotificsPage
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
