import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { Result } from '../models/result.model';
import { catchError } from 'rxjs/operators';

const USER_URL = RemoteConfig.BASE_URL + '/users';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient,
        private httpUtils: HttpUtilService) { }

    list(_filter: any): Observable<Result> {
        var _params = new HttpParams({ fromObject: _filter });
        return this.http.get<Result>(USER_URL, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
    }

    listMerchants(_filter: any): Observable<Result> {
        var _params = new HttpParams({ fromObject: _filter });
        return this.http.get<Result>(USER_URL + '/merchants', { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
    }

    listVendors(_filter: any): Observable<Result> {
        var _params = new HttpParams({ fromObject: _filter });
        return this.http.get<Result>(USER_URL + '/vendors', { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
    }

    listSubVendors(_filter: any): Observable<Result> {
        var _params = new HttpParams({ fromObject: _filter });
        return this.http.get<Result>(USER_URL + '/subvendors', { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
    }

    // listSubVendors_byid(_filter: any): Observable<Result> {
    //     var _params = new HttpParams({ fromObject: _filter });
    //     return this.http.get<Result>(USER_URL + '/subvendors', { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
    // }

}