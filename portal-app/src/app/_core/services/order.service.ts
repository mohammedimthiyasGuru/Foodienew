import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { Result } from '../models/result.model';
import { catchError } from 'rxjs/operators';

const ORDER_URL = RemoteConfig.BASE_URL + '/orders';
const ORDER_URL_MER = RemoteConfig.BASE_URL + '/orders/merchants';
const ORDER_URL_MER_WALLET = RemoteConfig.BASE_URL + '/orders_merchantwallet';
const ORDER_URL_MER_STATUS = RemoteConfig.BASE_URL + '/orders_merchant/status';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  list(_filter): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(ORDER_URL, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  list_merchant(_filter): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(ORDER_URL_MER, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  list_merchant_wallet(_filter, _page): Observable<Result> {
    var _params = new HttpParams({ fromObject: _page })
    return this.http.post<Result>(ORDER_URL_MER_WALLET, _filter, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  list_merchant_status(_filter): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(ORDER_URL_MER + "/status", { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  view(_catId: number): Observable<any> {
    return this.http.get<any>(ORDER_URL + `/${_catId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  update(_category: any): Observable<any> {
    return this.http.put<any>(ORDER_URL + `/${_category.cat_id}`, _category, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  update_status(_order: any): Observable<any> {
    return this.http.put<any>(ORDER_URL + `/${_order.order_id}/status1`, _order, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  delete(_catId: number): Observable<any> {
    return this.http.delete<any>(ORDER_URL + `/${_catId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

}
