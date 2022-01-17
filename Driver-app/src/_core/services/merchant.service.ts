import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { catchError } from 'rxjs/operators';

const MERCHANT_URL = RemoteConfig.BASE_URL + '/merchants';

@Injectable({
    providedIn: 'root'
})
export class MerchantService {

    constructor(
        private http: HttpClient,
        private httpUtils: HttpUtilService
    ) { }

    nearby(): Observable<any> {
        return this.http.get<any>(MERCHANT_URL + '/nearby', { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }
}