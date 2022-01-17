import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { Result } from '../models/result.model';
import { catchError } from 'rxjs/operators';

const PRODUCTS_URL = RemoteConfig.BASE_URL + '/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  list(_filter): Observable<Result> {
    // console.log(_filter);
    // var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(RemoteConfig.BASE_URL + '/merchants/' + _filter.profile_id + '/products', { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  list_product(_filter): Observable<Result> {
    // console.log(_filter);
    // var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<any>(PRODUCTS_URL,{ headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  view(_prodId: number): Observable<any> {
    return this.http.get<any>(PRODUCTS_URL + `/${_prodId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  create(_product: any): Observable<any> {
    return this.http.post<any>(PRODUCTS_URL, _product, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  update(_product: any): Observable<any> {
    return this.http.put<any>(PRODUCTS_URL + `/${_product.prod_id}`, _product, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  update_status(_product: any): Observable<any> {
    return this.http.put<any>(PRODUCTS_URL +`/${_product.prod_id}/status`, _product, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  delete(_prodId: number): Observable<any> {
    return this.http.delete<any>(PRODUCTS_URL + `/${_prodId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  uploadimage(_prodId: number, _productImg: File): Observable<any> {
    const formData = new FormData();
    formData.append('prodimg', _productImg);
    return this.http.put<any>(PRODUCTS_URL + `/${_prodId}/images`, formData, { headers: this.httpUtils.httpHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}
}
