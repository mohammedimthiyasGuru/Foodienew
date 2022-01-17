import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { Result } from '../models/result.model';
import { catchError } from 'rxjs/operators';

const PRODUCTS_URL = RemoteConfig.BASE_URL + '/products';
const ORDER_URL = RemoteConfig.BASE_URL + '/orders';
// const MERCHANT_URL = RemoteConfig.BASE_URL + '/products';
const USER_URL = RemoteConfig.BASE_URL + '/users';

const LOCATION = RemoteConfig.BASE_URL + '/location';

const FAV = RemoteConfig.BASE_URL + '/favourites';

const Yummysaver = RemoteConfig.BASE_URL + '/yummysaver';

const notification = RemoteConfig.BASE_URL + '/notifications';

const Transction = RemoteConfig.BASE_URL + '/transcation';

const Orderdetail = RemoteConfig.BASE_URL + '/neworder';

const Chatprocess = RemoteConfig.BASE_URL + '/newchat';


const PROFILE_URL = RemoteConfig.BASE_URL + '/profile';


const SELLPROD = RemoteConfig.BASE_URL + '/sellproduct';


const Videochat = RemoteConfig.BASE_URL + '/video_chat';

const Like_value = RemoteConfig.BASE_URL + '/like_detail';


const Follow_value = RemoteConfig.BASE_URL + '/follow_detail';


const Share_value = RemoteConfig.BASE_URL + '/share_detail';


const Video = RemoteConfig.BASE_URL + '/video';



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  list(_filter): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(PRODUCTS_URL, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }


  location_details(lat, lng) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y');
  }



  listMerchants(_filter: any): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter });
    return this.http.get<Result>(USER_URL + '/merchants', { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  merchantProducts(_merchantId): Observable<Result> {
    return this.http.get<Result>(RemoteConfig.BASE_URL + `/merchants/${_merchantId}/products`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  merchantDashboard(_location: any): Observable<any> {
    return this.http.post<any>(RemoteConfig.BASE_URL + `/merchants/appdashboard`, _location, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }



  place_order(_order: any): Observable<any> {
    return this.http.post<any>(ORDER_URL, _order, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  add_location(_order: any): Observable<any> {
    return this.http.post<any>(LOCATION, _order, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  get_location(_user): Observable<Result> {
    return this.http.get<Result>(RemoteConfig.BASE_URL + `/location/${_user.user_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  delete_location(_location): Observable<Result> {
    return this.http.delete<Result>(RemoteConfig.BASE_URL + `/location/${_location.loc_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  // make_default_location(_location): Observable<Result> {
  //   console.log(_location);
  //   return this.http.put<Result>(RemoteConfig.BASE_URL + `/location/${_location.old_id}/${_location.new_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  // }



  make_default_location(_location: any): Observable<any> {
    return this.http.put<any>(RemoteConfig.BASE_URL + `/location/${_location.old_id}/${_location.new_id}`, _location, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }



  get_default_location(_user: any): Observable<any> {
    return this.http.get<Result>(RemoteConfig.BASE_URL + `/location/${_user.user_id}/default`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  listuserhistory(_user: any): Observable<Result> {
    return this.http.get<Result>(ORDER_URL + `/list/${_user.user_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }






  list_fav(_user: any): Observable<Result> {
    return this.http.get<Result>(FAV + `/${_user.customer_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  updateToken(_token: any, _user_id: string): Observable<any> {
    return this.http.put<any>(USER_URL + `/tokens/${_user_id}/mobile`, _token, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }




  /////New Code//////

  new_listMerchants(): Observable<Result> {
    var _params = new HttpParams({});
    return this.http.get<Result>(USER_URL + '/merchants', { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }


  new_merchantCat(_merchantId): Observable<Result> {
    return this.http.get<Result>(RemoteConfig.BASE_URL + `/categories/profile_id/${_merchantId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  new_merchantProducts(_catID): Observable<Result> {
    return this.http.get<Result>(RemoteConfig.BASE_URL + `/categories/${_catID}/products`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  new_merchantProducts_all(_catID): Observable<Result> {
    return this.http.get<Result>(RemoteConfig.BASE_URL + `/merchants/${_catID}/products`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  new_promocode(_merchantId): Observable<Result> {
    return this.http.get<Result>(RemoteConfig.BASE_URL + `/promocode/available/${_merchantId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  new_promocode_list(): Observable<Result> {
    return this.http.get<Result>(RemoteConfig.BASE_URL + `/promocode/availables/user`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  new_notification_list(_profile_id): Observable<Result> {
    return this.http.get<Result>(RemoteConfig.BASE_URL + `/notifications/${_profile_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  mark_notification_read(_profile_id): Observable<any> {
    return this.http.put<any>(RemoteConfig.BASE_URL + `/notifications/${_profile_id}/markasread`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  fetch_merchant_fav(_user: any): Observable<Result> {
    return this.http.get<Result>(FAV + `/${_user.customer_id}/${_user.merchant_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  delete_fav(_location): Observable<Result> {
    return this.http.delete<Result>(RemoteConfig.BASE_URL + `/favourites/${_location.merchant_id}/${_location.customer_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  add_fav(_data: any): Observable<any> {
    return this.http.post<any>(FAV, _data, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  fetch_yummysaver(_user: any): Observable<Result> {
    return this.http.get<Result>(Yummysaver + `/profile_id/${_user.user_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  add_fund(_fund: any): Observable<any> {
    return this.http.post<any>(Transction, _fund, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  fetch_transction(_user: any): Observable<Result> {
    return this.http.get<Result>(Transction + `/profile_id/${_user.user_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  add_yummysaver(_fund: any): Observable<any> {
    return this.http.post<any>(Yummysaver, _fund, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  new_orderdetail(_fund: any): Observable<any> {
    return this.http.post<any>(Orderdetail, _fund, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  fetch_chatdetail(_user: any): Observable<Result> {
    return this.http.get<Result>(Chatprocess + `/profile_id/${_user.user_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  add_chatdetail(_fund: any): Observable<any> {
    return this.http.post<any>(Chatprocess, _fund, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  fetch_chat_both(_user: any): Observable<Result> {
    return this.http.get<Result>(Chatprocess + `/both/${_user.user_id}/${_user.merchant_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  chat_read_status(_user: any): Observable<Result> {
    return this.http.get<Result>(Chatprocess + `/chatreadstatus/${_user.chat_name}/${_user.chat_reciver_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  fetch_chat_by_chatname(_user: any): Observable<Result> {
    return this.http.get<Result>(Chatprocess + `/chatname/${_user.chat_name}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  fetch_chat_by_reciver_id(_user: any): Observable<Result> {
    return this.http.get<Result>(Chatprocess + `/reciver/${_user.chat_reciver_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  fetch_orderdetail(_user: any): Observable<Result> {
    return this.http.get<Result>(Orderdetail + `/${_user.user_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }



  idprofileone(_profileId: number, _profileImg: any): Observable<any> {
    const formData = new FormData();
    console.log(_profileImg);
    formData.append('profileimg', _profileImg);
    return this.http.put<any>(PROFILE_URL + `/${_profileId}/idprofileone`, formData, { headers: this.httpUtils.httpHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}


add_sellproduct(_fund: any): Observable<any> {
  return this.http.post<any>(SELLPROD, _fund, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}


update_sellproduct(_location: any): Observable<any> {
  return this.http.put<any>(RemoteConfig.BASE_URL + `/sellproduct/${_location.otp}`, _location, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}



fetch_video_chat(_user: any): Observable<Result> {
  return this.http.get<Result>(Videochat + `/fetch_chat/${_user.video_id}/${_user.chat_merchat_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}


create_video_chat(_fund: any): Observable<any> {
  return this.http.post<any>(Videochat, _fund, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}


update_video_chat(_fund: any): Observable<any> {
    return this.http.put<any>(RemoteConfig.BASE_URL + `/video_chat/${_fund.video_chat_id}`, _fund, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));

}




create_fetch_like(_fund: any): Observable<any> {
  return this.http.post<any>(Like_value, _fund, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}


create_fetch_share(_fund: any): Observable<any> {
  return this.http.post<any>(Share_value, _fund, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}

create_fetch_follow(_fund: any): Observable<any> {
  return this.http.post<any>(Follow_value, _fund, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}




fetch_like_details(_user: any): Observable<Result> {
  return this.http.get<Result>(Like_value + `/count_status/${_user.user_id}/${_user.merchant_id}/${_user.video_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}

fetch_follow_details(_user: any): Observable<Result> {
  return this.http.get<Result>(Follow_value + `/count_status/${_user.user_id}/${_user.merchant_id}/${_user.video_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}

fetch_chat_details(_user: any): Observable<Result> {
  console.log(_user);
  return this.http.get<Result>(Videochat + `/count_status/${_user.merchant_id}/${_user.video_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}

fetch_share_details(_user: any): Observable<Result> {
  return this.http.get<Result>(Share_value + `/count_status/${_user.user_id}/${_user.merchant_id}/${_user.video_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}


fetch_profile_details(_user: any): Observable<Result> {
  _user.merchant_id = 2;
  return this.http.get<Result>(PROFILE_URL + `/view/${_user.merchant_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}


fetch_product_rating(_user: any): Observable<Result> {
  return this.http.get<Result>(Orderdetail + `/${_user.user_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}





  new_video_list(): Observable<Result> {
    return this.http.get<Result>(RemoteConfig.BASE_URL + `/videos/all`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  merchant_rating_add(_data: any): Observable<any> {
    return this.http.post<any>(Orderdetail+'/update_merchant_rate', _data, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  rider_rating_add(_data: any): Observable<any> {
    return this.http.post<any>(Orderdetail+'/update_rider_rate', _data, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }




}
