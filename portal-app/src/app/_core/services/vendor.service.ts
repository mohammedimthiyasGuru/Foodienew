import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { Result } from '../models/result.model';
import { catchError } from 'rxjs/operators';

const Vendor_URL = RemoteConfig.BASE_URL + '/vendor';
const Register_URL = RemoteConfig.BASE_URL + '/auth/signup';
const PROFILE_URL = RemoteConfig.BASE_URL + '/profile';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }


  vendor_register(_vendor_detail: any): Observable<any> {
        return this.http.post<any>(Register_URL, _vendor_detail, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  list(_filter): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(Vendor_URL, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  view(_vendorId: number): Observable<any> {
    return this.http.get<any>(Vendor_URL + `/${_vendorId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  create(_vendor_detail: any): Observable<any> {
    return this.http.post<any>(Vendor_URL, _vendor_detail, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  update(_vendor_detail: any): Observable<any> {
    return this.http.put<any>(Vendor_URL + `/${_vendor_detail.cat_id}`, _vendor_detail, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  update_status(_vendor_detail: any): Observable<any> {
    return this.http.put<any>(Vendor_URL + `/${_vendor_detail.cat_id}/status`, _vendor_detail, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  delete(_vendorId: number): Observable<any> {
    return this.http.delete<any>(Vendor_URL + `/${_vendorId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  uploadimage(_profileId: number, _profileImg: File): Observable<any> {
    const formData = new FormData();
    formData.append('profileimg', _profileImg);
    return this.http.put<any>(PROFILE_URL + `/${_profileId}/picture`, formData, { headers: this.httpUtils.httpHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}

}
