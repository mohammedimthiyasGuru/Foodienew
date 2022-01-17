import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { Result } from '../models/result.model';
import { catchError } from 'rxjs/operators';

const CATEGORIES_URL = RemoteConfig.BASE_URL + '/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  list(_filter): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(CATEGORIES_URL, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  view(_catId: number): Observable<any> {
    return this.http.get<any>(CATEGORIES_URL + `/${_catId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }



  list_by_profile_id(_profile_id:number): Observable<any> {
    return this.http.get<any>(CATEGORIES_URL + `/profile_id/${_profile_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  create(_category: any): Observable<any> {
    return this.http.post<any>(CATEGORIES_URL, _category, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  update(_category: any): Observable<any> {
    return this.http.put<any>(CATEGORIES_URL + `/${_category.cat_id}`, _category, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  update_status(_category: any): Observable<any> {
    return this.http.put<any>(CATEGORIES_URL + `/${_category.cat_id}/status`, _category, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }



  delete(_catId: number): Observable<any> {
    return this.http.delete<any>(CATEGORIES_URL + `/${_catId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }
}
