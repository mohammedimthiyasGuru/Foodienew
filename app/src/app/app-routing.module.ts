import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/_core/guard';
import { AllOffersPage } from './all-offers/all-offers.page';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ChangeLocationComponent } from './change-location/change-location.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { ChatsingleviewComponent } from './chatsingleview/chatsingleview.component';
import { CheckoutPage } from './checkout/checkout.page';
import { ClientHomePage } from './client-home/client-home.page';
import { EditProfilePage } from './edit-profile/edit-profile.page';
import { FavemptyPage } from './favempty/favempty.page';
import { FavouritePage } from './favourite/favourite.page';
import { FilterPage } from './filter/filter.page';
import { HomePage } from './home/home.page';
import { MainLayoutPage } from './layout/main-layout/main-layout.page';
import { LocationPage } from './location/location.page';
import { MyOrderPage } from './my-order/my-order.page';
import { NearbyPage } from './nearby/nearby.page';
import { NotificationComponent } from './notification/notification.component';
import { OrderEmptyPage } from './order-empty/order-empty.page';
import { OrderhistoryPage } from './orderhistory/orderhistory.page';
import { PaymentHistoryListComponent } from './payment-history-list/payment-history-list.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { ProductListPage } from './product-list/product-list.page';
import { PromocodeListComponent } from './promocode-list/promocode-list.component';
import { SelectLocationPage } from './select-location/select-location.page';
import { SellMyProductComponent } from './sell-my-product/sell-my-product.component';
import { SliderHomePage } from './slider-home/slider-home.page';
import { TrackingScreenComponent } from './tracking-screen/tracking-screen.component';
import { UserProfilePage } from './user-profile/user-profile.page';
import { VideolistComponent } from './videolist/videolist.component';
import { YummypayhistorylistComponent } from './yummypayhistorylist/yummypayhistorylist.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'slider-home',
    component: SliderHomePage
  },
  {
    path: 'videolist',
    component: VideolistComponent
  },

  {
    path: 'chatviewsingle',
    component: ChatsingleviewComponent
  },
  {
    path: 'tracking_screen',
    component: TrackingScreenComponent
  },

  {
    path: 'client-home',
    component: ClientHomePage
  },
  {
    path: 'products',
    component: ProductListPage
  },

  {
    path: 'payment_method/:status',
    component: PaymentMethodComponent
  },
  {
    path: 'cartpage',
    component: CartPageComponent
  },

  {
    path: 'promocode_list',
    component: PromocodeListComponent
  },

  {
    path: 'change_location',
    component: ChangeLocationComponent
  },






  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: '',
    component: MainLayoutPage,
    // canActivate: [AuthGuard],
    children: [

      {
        path: 'all-offers',
        component: AllOffersPage
      },

      {
        path: 'my-cart',
        component: MyOrderPage
      },
      {
        path: 'order-empty',
        component: OrderEmptyPage
      },
      {
        path: 'fav-empty',
        component: FavemptyPage
      },
      {
        path: 'checkout',
        component: CheckoutPage
      },
      {
        path: 'favourites',
        component: FavouritePage
      },
      {
        path: 'filter',
        component: FilterPage
      },
      {
        path: 'select-location',
        component: SelectLocationPage
      },
      {
        path: 'nearby',
        component: NearbyPage
      },
      {
        path: 'location',
        component: LocationPage
      },
      {
        path: 'edit_profile',
        component: EditProfilePage
      },
      {
        path: 'user_profile',
        component: UserProfilePage
      },
      {
        path: 'order_history',
        component: OrderhistoryPage
      },
      {
        path: 'business',
        component: BusinessDetailComponent
      },



      {
        path: 'user_notification_list',
        component: NotificationComponent
      },

      {
        path: 'payment_history',
        component: PaymentHistoryListComponent
      },
      {
        path: 'yummypay_payment_history',
        component: YummypayhistorylistComponent
      },


      {
        path: 'chatlist',
        component: ChatlistComponent
      },



      {
        path: 'sell_by_product',
        component: SellMyProductComponent
      },



    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
