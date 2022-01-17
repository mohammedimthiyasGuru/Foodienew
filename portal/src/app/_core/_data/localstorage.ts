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


    get lang_setting() {
        let lang_setting = localStorage.getItem('lang_setting');
        return (lang_setting ? JSON.parse(lang_setting) : undefined);
    }

    set lang_setting(lang_setting) {
        if (lang_setting) {
            localStorage.setItem('lang_setting', JSON.stringify(lang_setting));
        }
    }


    get merchant_detail() {
        let merchant_detail = localStorage.getItem('merchant_detail');
        return (merchant_detail ? JSON.parse(merchant_detail) : undefined);
    }

    set merchant_detail(merchant_detail) {
        if (merchant_detail) {
            localStorage.setItem('merchant_detail', JSON.stringify(merchant_detail));
        }
    }



    get product_detail() {
        let product_detail = localStorage.getItem('product_detail');
        return (product_detail ? JSON.parse(product_detail) : undefined);
    }

    set product_detail(product_detail) {
        if (product_detail) {
            localStorage.setItem('product_detail', JSON.stringify(product_detail));
        }
    }

    get cat_id() {
        let cat_id = localStorage.getItem('cat_id');
        return (cat_id ? JSON.parse(cat_id) : undefined);
    }

    set cat_id(cat_id) {
        if (cat_id) {
            localStorage.setItem('cat_id', JSON.stringify(cat_id));
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


    get menu_setting() {
        let menu_setting = localStorage.getItem('menu_setting');
        return (menu_setting ? JSON.parse(menu_setting) : undefined);
    }

    set menu_setting(menu_setting) {
        if (menu_setting) {
            localStorage.setItem('menu_setting', JSON.stringify(menu_setting));
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