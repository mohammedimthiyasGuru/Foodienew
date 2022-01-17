import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { Result } from '../models/result.model';
import { catchError } from 'rxjs/operators';

const Merchant_URL = RemoteConfig.BASE_URL + '/merchant';
const Register_URL = RemoteConfig.BASE_URL + '/auth/signup';
const PROFILE_URL = RemoteConfig.BASE_URL + '/profile';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }


  merchant_register(_vendor_detail: any): Observable<any> {
        return this.http.post<any>(Register_URL, _vendor_detail, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  location_details(lat, lng) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y');
  }


  list(_filter): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(Merchant_URL, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  view(_vendorId: number): Observable<any> {
    return this.http.get<any>(Merchant_URL + `/${_vendorId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  create(_vendor_detail: any): Observable<any> {
    return this.http.post<any>(Merchant_URL, _vendor_detail, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  update(_vendor_detail: any): Observable<any> {
    return this.http.put<any>(Merchant_URL + `/${_vendor_detail.cat_id}`, _vendor_detail, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  update_status(_vendor_detail: any): Observable<any> {
    return this.http.put<any>(Merchant_URL + `/${_vendor_detail.cat_id}/status`, _vendor_detail, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  delete(_vendorId: number): Observable<any> {
    return this.http.delete<any>(Merchant_URL + `/${_vendorId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  uploadimage(_profileId: number, _profileImg: File): Observable<any> {
    const formData = new FormData();
    formData.append('profileimg', _profileImg);
    return this.http.put<any>(PROFILE_URL + `/${_profileId}/picture`, formData, { headers: this.httpUtils.httpHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}

}
