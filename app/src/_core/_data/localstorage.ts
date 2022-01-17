import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs';
import { authConfig } from '../configs/property.config';

@Injectable({
    providedIn: 'root'
})
export class LocalStorage {

    get user() {
        let profile = localStorage.getItem(authConfig.CURRENT_USER_PROFILE);
        return (profile ? JSON.parse(profile) : undefined);
    }

    set user(profile) {
        if (profile) {
            localStorage.setItem(authConfig.CURRENT_USER_PROFILE, JSON.stringify(profile));
        }
    }


    get temp_user_info() {
      let temp_user_info = localStorage.getItem('temp_user_info');
      return (temp_user_info ? JSON.parse(temp_user_info) : undefined);
  }

  set temp_user_info(temp_user_info) {
      if (temp_user_info) {
          localStorage.setItem('temp_user_info',JSON.stringify(temp_user_info));
      }
    }



  get user_info() {
      let user_info = localStorage.getItem('user_info');
      return (user_info ? JSON.parse(user_info) : undefined);
  }

  set user_info(user_info) {
      if (user_info) {
          localStorage.setItem('user_info',JSON.stringify(user_info));
      }
    }


    get user_location() {
      let user_info = localStorage.getItem('user_location');
      return (user_info ? JSON.parse(user_info) : undefined);
  }

  set user_location(user_info) {
      if (user_info) {
          localStorage.setItem('user_location',JSON.stringify(user_info));
      }
    }


    get tracking_detail() {
      let tracking_detail = localStorage.getItem('tracking_detail');
      return (tracking_detail ? JSON.parse(tracking_detail) : undefined);
  }

  set tracking_detail(tracking_detail) {
      if (tracking_detail) {
          localStorage.setItem('tracking_detail',JSON.stringify(tracking_detail));
      }
    }


  get chat_detail() {
      let chat_detail = localStorage.getItem('chat_detail');
      return (chat_detail ? JSON.parse(chat_detail) : undefined);
  }

  set chat_detail(chat_detail) {
      if (chat_detail) {
          localStorage.setItem('chat_detail',JSON.stringify(chat_detail));
      }
    }





    get user_id() {
      let user_id = localStorage.getItem('user_id');
      return (user_id ? JSON.parse(user_id) : undefined);
  }

  set user_id(user_id) {
      if (user_id) {
          localStorage.setItem('user_id',JSON.stringify(user_id));
      }
    }


    get product_detail() {
      let product_detail = localStorage.getItem('product_detail');
      return (product_detail ? JSON.parse(product_detail) : undefined);
  }

  set product_detail(product_detail) {
      if (product_detail) {
          localStorage.setItem('product_detail',JSON.stringify(product_detail));
      }
    }




    get shop_detail() {
      let shop_detail = localStorage.getItem('shop_detail');
      return (shop_detail ? JSON.parse(shop_detail) : undefined);
  }

  set shop_detail(shop_detail) {
      if (shop_detail) {
          localStorage.setItem('shop_detail',JSON.stringify(shop_detail));
      }
    }

    get coupon_detail() {
      let coupon_detail = localStorage.getItem('coupon_detail');
      return (coupon_detail ? JSON.parse(coupon_detail) : undefined);
  }

  set coupon_detail(coupon_detail) {
      if (coupon_detail) {
          localStorage.setItem('coupon_detail',JSON.stringify(coupon_detail));
      }
    }





  get footer_text() {
      let footer_text = localStorage.getItem('footer_text');
      return (footer_text ? JSON.parse(footer_text) : undefined);
  }

  set footer_text(footer_text) {
      if (footer_text) {
          localStorage.setItem('footer_text',JSON.stringify(footer_text));
      }
    }


    get routes_text() {
      let routes_text = localStorage.getItem('routes_text');
      return (routes_text ? JSON.parse(routes_text) : undefined);
  }

  set routes_text(routes_text) {
      if (routes_text) {
          localStorage.setItem('routes_text',JSON.stringify(routes_text));
      }
    }




    //////////New code added/////


    get cart_detail() {
      let cart_detail = localStorage.getItem('cart_detail');
      return (cart_detail ? JSON.parse(cart_detail) : undefined);
  }

  set cart_detail(cart_detail) {
      if (cart_detail) {
          localStorage.setItem('cart_detail',JSON.stringify(cart_detail));
      }
    }




    get cat_detail() {
      let cat_detail = localStorage.getItem('cat_detail');
      return (cat_detail ? JSON.parse(cat_detail) : undefined);
  }

  set cat_detail(cat_detail) {
      if (cat_detail) {
          localStorage.setItem('cat_detail',JSON.stringify(cat_detail));
      }
    }





    get conta_text() {
      let conta_text = localStorage.getItem('conta_text');
      return (conta_text ? JSON.parse(conta_text) : undefined);
  }

  set conta_text(conta_text) {
      if (conta_text) {
          localStorage.setItem('conta_text',JSON.stringify(conta_text));
      }
    }



    get datas() {
      let profile = localStorage.getItem('datas');
      return (profile ? JSON.parse(profile) : undefined);
  }

  set datas(datas) {
      if (datas) {
          localStorage.setItem('datas', JSON.stringify(datas));
      }
  }



  get reload() {
    let reload = localStorage.getItem('reload');
    return (reload ? JSON.parse(reload) : undefined);
}

set reload(reload) {
    if (reload) {
        localStorage.setItem('reload', JSON.stringify(reload));
    }
}






    get authToken() {
        return localStorage.getItem(authConfig.AUTH_TOKEN);
    }

    set authToken(token: string) {
        localStorage.setItem(authConfig.AUTH_TOKEN, token);
    }

    get isAdministrator() {
        if (this.userRole && this.userRole == 1) {
            return true;
        } else {
            return false;
        }
    }

    get isMerchant() {
        if (this.userRole && this.userRole == 2) {
            return true;
        } else {
            return false;
        }
    }

    get isVendor() {
        if (this.userRole && this.userRole == 3) {
            return true;
        } else {
            return false;
        }
    }

    get isCustomer() {
        if (this.userRole && this.userRole == 5) {
            return true;
        } else {
            return false;
        }
    }

    get userRole() {
        let currentUser = JSON.parse(localStorage.getItem(authConfig.CURRENT_USER_PROFILE));
        if (currentUser.role_id) {
            return currentUser.role_id;
        } else {
            return undefined;
        }
    }

    set cart(items) {
        if (items) {
            console.log(items);
            localStorage.setItem(authConfig.CART_ITEMS, JSON.stringify(items));
        }
    }

    get cart() {
        let items = JSON.parse(localStorage.getItem(authConfig.CART_ITEMS));
        if (items) {
            return items;
        } else {
            return undefined;
        }
    }

    clear() {
        window.localStorage.clear();
    }

    private profileupdated = new BehaviorSubject<boolean>(false);
    getProfileupdated(): Observable<boolean> {
        return this.profileupdated.asObservable();
    }
    setProfileupdated(flag: boolean) {
        this.profileupdated.next(flag);
    }
    set profiledit(flag) {
        this.setProfileupdated(flag);
    }

    private subMenuName = new BehaviorSubject<string>(this.submenu);
    getSubMenuName(): Observable<string> {
        return this.subMenuName.asObservable();
    }
    setSubMenuName(name: string) {
        this.subMenuName.next(name);
    }
    set submenu(name) {
        this.setSubMenuName(name);
        localStorage.setItem(authConfig.SUB_MENU, name);
    }
    get submenu() {
        let name = localStorage.getItem(authConfig.SUB_MENU)
        if (name) {
            return name;
        }
        return '';
    }
}
