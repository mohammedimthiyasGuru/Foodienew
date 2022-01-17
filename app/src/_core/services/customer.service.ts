import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { Result } from '../models/result.model';
import { catchError } from 'rxjs/operators';


const Register_URL = RemoteConfig.BASE_URL + '/auth/signup';
const PROFILE_URL = RemoteConfig.BASE_URL + '/profile';
const API_AUTH_URL_LOGIN = RemoteConfig.BASE_URL + '/auth/login';

const API_AUTH_URL_FORGOT = RemoteConfig.BASE_URL + '/auth/forgetpassword';

const API_AUTH_URL_FORGOT_VER = RemoteConfig.BASE_URL + '/auth/passwordverification';

const API_AUTH_URL_RESET_PASSWORD = RemoteConfig.BASE_URL + '/auth/resetpassword';




const OTP_VERIFY_URL = RemoteConfig.BASE_URL + '/auth/verification';

const OTP_RESENT = RemoteConfig.BASE_URL + '/auth/resendotp';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }


  vendor_register(_vendor_detail: any): Observable<any> {
        return this.http.post<any>(Register_URL, _vendor_detail, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }


  login(_authData: any): Observable<any> {
    return this.http.post<any>(API_AUTH_URL_LOGIN, _authData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }


  forgotpassword(_authData: any): Observable<any> {
    return this.http.post<any>(API_AUTH_URL_FORGOT, _authData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }


  forgotpassword_verify(_authData: any): Observable<any> {
    return this.http.post<any>(API_AUTH_URL_FORGOT_VER, _authData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  reset_password(_authData: any): Observable<any> {
    return this.http.post<any>(API_AUTH_URL_RESET_PASSWORD, _authData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  otp_verify(_authData: any): Observable<any> {
    return this.http.post<any>(OTP_VERIFY_URL, _authData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  resend_otp(_authData: any): Observable<any> {
    return this.http.post<any>(OTP_RESENT, _authData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  uploadimage(_profileId: number, _profileImg: File): Observable<any> {
    const formData = new FormData();
    formData.append('profileimg', _profileImg);
    return this.http.put<any>(PROFILE_URL + `/${_profileId}/picture`, formData, { headers: this.httpUtils.httpHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
}

}
