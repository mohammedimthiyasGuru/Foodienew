import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { Result } from '../models/result.model';
import { catchError } from 'rxjs/operators';

const PROFILE_URL = RemoteConfig.BASE_URL + '/profile';

const STATE_LIST = RemoteConfig.BASE_URL + '/statelist';

const PROFILE_URL_view = RemoteConfig.BASE_URL + '/profile/view';

const Wallet_list = RemoteConfig.BASE_URL + '/orders_merchantwallet';

const State_insert = RemoteConfig.BASE_URL + '/state';


@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(
        private http: HttpClient,
        private httpUtils: HttpUtilService
    ) { }


    location_details(lat, lng) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=AIzaSyDap8qav1flUsql0VWUYkjgB0noN0o_U1Y');
      }
    
      

    view(_profileId: number): Observable<any> {
        return this.http.get<any>(PROFILE_URL + `/${_profileId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }


    profile_view(_profileId: number): Observable<any> {
        return this.http.get<any>(PROFILE_URL_view + `/${_profileId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }

    update(_profile: any): Observable<any> {
        return this.http.put<any>(PROFILE_URL + `/${_profile.profile_id}`, _profile, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }

    uploadimage(_profileId: number, _profileImg: File): Observable<any> {
        const formData = new FormData();
        formData.append('profileimg', _profileImg);
        return this.http.put<any>(PROFILE_URL + `/${_profileId}/picture`, formData, { headers: this.httpUtils.httpHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }



    idprofileone(_profileId: number, _profileImg: any): Observable<any> {
        const formData = new FormData();
        console.log(_profileImg);
        formData.append('profileimg', _profileImg);
        return this.http.put<any>(PROFILE_URL + `/${_profileId}/idprofileone`, formData, { headers: this.httpUtils.httpHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }


    idprofiletwo(_profileId: number, _profileImg: any): Observable<any> {
        const formData = new FormData();
        console.log(_profileImg);
        formData.append('profileimg', _profileImg);
        return this.http.put<any>(PROFILE_URL + `/${_profileId}/idprofiletwo`, formData, { headers: this.httpUtils.httpHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }


    idprofilethree(_data: any, _profileImg: any): Observable<any> {
        const formData = new FormData();
        console.log(_profileImg);
        formData.append('profileimg', _profileImg);
        formData.append('user_id', _data.user_id);
        formData.append('type', _data.type);
        formData.append('note', _data.note);
        console.log(this.httpUtils.httpHeaders());
        return this.http.put<any>(PROFILE_URL + `/${_data.user_id}/idprofilethree`, formData, { headers: this.httpUtils.httpHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }


    state_list(_profileId: any): Observable<any> {
        return this.http.get<any>(STATE_LIST + `/${_profileId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }



    list_by_country_state(data : string): Observable<any> {
        return this.http.get<any>(State_insert + `/${data}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
      }



  
    wallert_list(_product: any): Observable<any> {
        return this.http.post<any>(Wallet_list, _product, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
      }



    // create(_docVideo: File, _data: any): Observable<any> {
    //     const formData = new FormData();
    //     formData.append('doc_video', _docVideo);
    //     formData.append('user_id', _data.user_id);
    //     formData.append('type', _data.type);
    //     formData.append('note', _data.note);
    //     return this.http.post<any>(VIDEO_URL, formData).pipe(catchError(this.httpUtils.errorHandler));
    // }



}