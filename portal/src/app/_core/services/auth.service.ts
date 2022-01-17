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

const API_AUTH_URL_REGISTER_PROFILE = RemoteConfig.BASE_URL + '/auth/profile/register';
const API_AUTH_URL_REGISTER_BANK = RemoteConfig.BASE_URL + '/auth/bank/register';
const API_AUTH_URL_REGISTER_SUMMARY = RemoteConfig.BASE_URL + '/auth/summary/register';


const API_AUTH_URL_FRGETPASS = RemoteConfig.BASE_URL + '/auth/forgetpassword';
const API_AUTH_URL_VERIFY = RemoteConfig.BASE_URL + '/auth/verification';
const API_AUTH_URL_PSWD_VERIFY = RemoteConfig.BASE_URL + '/auth/passwordverification';
const API_AUTH_URL_RESETPASS = RemoteConfig.BASE_URL + '/auth/resetpassword';
const API_AUTH_URL_RESENDOTP = RemoteConfig.BASE_URL + '/auth/resendotp';
const OTP_RESENT = RemoteConfig.BASE_URL + '/auth/resendotp';

const PROFILE_URL = RemoteConfig.BASE_URL + '/profile';


const PROFILE_NO_URL = RemoteConfig.BASE_URL + '/profile_no';


const CHECK_MAIL = RemoteConfig.BASE_URL + '/auth/email_check';

const Country_insert = RemoteConfig.BASE_URL + '/country';

const State_insert = RemoteConfig.BASE_URL + '/state';

const City_insert = RemoteConfig.BASE_URL + '/city';

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
    return this.http.post<any>(API_AUTH_URL_SIGNUP, user, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  verifyotp(user: any): Observable<any> {
    return this.http.post<any>(API_AUTH_URL_VERIFY, user, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  register(_data: any): Observable<any> {
    const formData = new FormData();
    // formData.append('menucard', _menuCard);
    formData.append('profile_biz_name', _data.business_name);
    formData.append('business_proof_type', _data.business_proof_type);
    formData.append('profile_biz_type', _data.business_type);
    formData.append('profile_meal_cost', _data.avg_meal_cost);
    formData.append('profile_address', _data.address);
    formData.append('address_postal', _data.address_postal);
    formData.append('city', _data.city);
    formData.append('state', _data.state);
    formData.append('postal', _data.postal);
    formData.append('country', _data.country);
    formData.append('address_landmark', _data.address_landmark);
    formData.append('ref_email', _data.ref_email);
    formData.append('cuisine', _data.cuisine);
    formData.append('categorys', _data.categorys);
    formData.append('location_lat', _data.location_lat);
    formData.append('location_lng', _data.location_lng);
    formData.append('profile_id', _data.profile_id);
    formData.append('p_country_name', _data.p_country_name);
    formData.append('p_state_name', _data.p_state_name);
    formData.append('p_city_name', _data.p_city_name);
    const _params = new HttpParams({ fromString: 'content=media' })
    return this.http.put<any>(API_AUTH_URL_REGISTER, formData, { params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }


  register_profile(_data: any): Observable<any> {
    const formData = new FormData();
    // formData.append('menucard', _menuCard);
    formData.append('profile_id', _data.profile_id);
    formData.append('profile_first_name', _data.profile_first_name);
    formData.append('profile_last_name', _data.profile_last_name);
    const _params = new HttpParams({ fromString: 'content=media' })
    return this.http.put<any>(API_AUTH_URL_REGISTER_PROFILE, formData, { params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }


  register_bank(_data: any): Observable<any> {
    const formData = new FormData();
    // formData.append('menucard', _menuCard);
    formData.append('profile_id', _data.profile_id);
    formData.append('bank_name', _data.bank_name);
    formData.append('bank_branch', _data.bank_branch);
    formData.append('bank_ifsc_no', _data.bank_ifsc_no);
    formData.append('bank_acc_no', _data.bank_acc_no);
    const _params = new HttpParams({ fromString: 'content=media' })
    return this.http.put<any>(API_AUTH_URL_REGISTER_BANK, formData, { params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }


  register_summary(_data: any): Observable<any> {
    const formData = new FormData();
    // formData.append('menucard', _menuCard);
    formData.append('profile_id', _data.profile_id);
    formData.append('profile_summary', _data.profile_summary);
    const _params = new HttpParams({ fromString: 'content=media' })
    return this.http.put<any>(API_AUTH_URL_REGISTER_SUMMARY, formData, { params: _params }).pipe(catchError(this.httpUtils.errorHandler));
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


  resend_otp(_authData: any): Observable<any> {
    return this.http.post<any>(OTP_RESENT, _authData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }




  checkmobile(_profileId: any): Observable<any> {
    return this.http.get<any>(PROFILE_NO_URL + `/${_profileId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }





  checkemail(_authData: any): Observable<any> {
    return this.http.post<any>(CHECK_MAIL, _authData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }


  country_insert(_authData: any): Observable<any> {
    return this.http.post<any>(Country_insert, _authData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  start_insert(_authData: any): Observable<any> {
    return this.http.post<any>(State_insert, _authData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  city_insert(_authData: any): Observable<any> {
    return this.http.post<any>(City_insert, _authData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  }

  list_county(): Observable<any> {
    return this.http.get<any>(Country_insert, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  list_state(): Observable<any> {
    return this.http.get<any>(State_insert, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  list_city(): Observable<any> {
    return this.http.get<any>(City_insert, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  list_by_country_state(data : string): Observable<any> {
    return this.http.get<any>(State_insert + `/${data}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  list_by_state_city(data : string): Observable<any> {
    return this.http.get<any>(City_insert + `/${data}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

}