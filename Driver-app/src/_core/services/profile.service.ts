import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { Result } from '../models/result.model';
import { catchError } from 'rxjs/operators';

const PROFILE_URL = RemoteConfig.BASE_URL + '/profile';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(
        private http: HttpClient,
        private httpUtils: HttpUtilService
    ) { }

    view(_profileId: number): Observable<any> {
        return this.http.get<any>(PROFILE_URL + `/${_profileId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }

    update(_profile: any): Observable<any> {
        return this.http.put<any>(PROFILE_URL + `/${_profile.profile_id}`, _profile, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }

    uploadimage(_profileId: number, _profileImg: File): Observable<any> {
        const formData = new FormData();
        formData.append('profileimg', _profileImg);
        return this.http.put<any>(PROFILE_URL + `/${_profileId}/picture`, formData, { headers: this.httpUtils.httpHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }
}