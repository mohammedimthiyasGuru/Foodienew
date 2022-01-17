import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { Result } from '../models/result.model';
import { catchError } from 'rxjs/operators';

const PROMOCODE_URL = RemoteConfig.BASE_URL + '/promocode';

@Injectable({
  providedIn: 'root'
})
export class PromocodeService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  list(_filter): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(PROMOCODE_URL, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  view(_catId: number): Observable<any> {
    return this.http.get<any>(PROMOCODE_URL + `/${_catId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  create(_category: any): Observable<any> {
    return this.http.post<any>(PROMOCODE_URL, _category, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  update(_category: any): Observable<any> {
    return this.http.put<any>(PROMOCODE_URL + `/${_category.promocode_id}`, _category, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  update_status(_category: any): Observable<any> {
    return this.http.put<any>(PROMOCODE_URL + `/${_category.promocode_id}/status`, _category, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  update_date(_category: any): Observable<any> {
    return this.http.put<any>(PROMOCODE_URL + `/${_category.promocode_id}/date`, _category, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }



  delete(_catId: number): Observable<any> {
    return this.http.delete<any>(PROMOCODE_URL + `/${_catId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }
}
