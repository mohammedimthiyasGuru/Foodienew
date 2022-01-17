import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { catchError } from 'rxjs/operators';

const API_AUTH_URL_LOGIN = RemoteConfig.BASE_URL + '/auth/login';
const API_LINKEDIN_URL_SIGNUP = RemoteConfig.BASE_URL + '/auth/linkedin';

const API_AUTH_URL_SIGNUP = RemoteConfig.BASE_URL + '/auth/signup';
const API_AUTH_URL_REGISTER = RemoteConfig.BASE_URL + '/auth/register';
const API_AUTH_URL_FRGETPASS = RemoteConfig.BASE_URL + '/auth/forgetpassword';
const API_AUTH_URL_VERIFY = RemoteConfig.BASE_URL + '/auth/verification';
const API_AUTH_URL_PSWD_VERIFY = RemoteConfig.BASE_URL + '/auth/passwordverification';
const API_AUTH_URL_RESETPASS = RemoteConfig.BASE_URL + '/auth/resetpassword';
const API_AUTH_URL_RESENDOTP = RemoteConfig.BASE_URL + '/auth/resendotp';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  login(_authData: any): Observable<any> {
    return this.http.post<any>(API_AUTH_URL_LOGIN, _authData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  signup(user: any): Observable<any> {
    console.log('Register',user);
    return this.http.post<any>(API_AUTH_URL_SIGNUP, user, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  verifyotp(user: any): Observable<any> {
    return this.http.post<any>(API_AUTH_URL_VERIFY, user, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  register(_data: any, _menuCard: File): Observable<any> {
    const formData = new FormData();
    formData.append('menucard', _menuCard);
    formData.append('profile_biz_name', _data.business_name);
    formData.append('profile_biz_type', _data.business_type);
    formData.append('profile_meal_cost', _data.avg_meal_cost);
    formData.append('profile_address', _data.address);
    formData.append('profile_id', _data.profile_id);
    const _params = new HttpParams({ fromString: 'content=media' })
    return this.http.put<any>(API_AUTH_URL_REGISTER, formData, { params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  forgetpassword(_email: any): Observable<any> {
    return this.http.post<any>(API_AUTH_URL_FRGETPASS, {email: _email}, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  verifypassword(_user: any): Observable<any> {
    return this.http.post<any>(API_AUTH_URL_PSWD_VERIFY, {user_id: _user.user_id, otp: _user.otp}, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  resetpassword(_password: any): Observable<any> {
    return this.http.post<any>(API_AUTH_URL_RESETPASS, _password, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  resendotp(_email: string, _type): Observable<any> {
    return this.http.post<any>(API_AUTH_URL_RESENDOTP, {email: _email, type: _type}, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  linkedin(): Observable<any> {
    return this.http.get(API_LINKEDIN_URL_SIGNUP, { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) }).pipe(catchError(this.httpUtils.errorHandler));
    // var LINKEDIN = 'https://www.linkedin.com/oauth/v2/accessToken?grant_type=client_credentials&client_id=81ipigom0ew1jn&client_secret=Vxi3z1EG4HGCzxOV'
    // return this.http.post<User>(LINKEDIN, { headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}) });
    // var LINKEDIN = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81ipigom0ew1jn&redirect_uri=https://localhost:4200/auth/login&state=trtrtrtrtr&scope=r_liteprofile%20r_emailaddress%20w_member_social';
    // return this.http.get<any>(LINKEDIN, { headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'}) });
  }

}
