import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { Result } from '../models/result.model';
import { catchError } from 'rxjs/operators';

const VIDEO_URL = RemoteConfig.BASE_URL + '/videos';
@Injectable({
    providedIn: 'root'
})
export class VideoService {

    constructor(
        private http: HttpClient,
        private httpUtils: HttpUtilService) { }

    list(_userId: number,): Observable<Result> {
        var _params = new HttpParams({ fromObject:{}});
        return this.http.get<Result>(VIDEO_URL + `/${_userId}`, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
    }

    all(_userId: number,): Observable<Result> {
        var _params = new HttpParams({ fromObject:{}});
        return this.http.get<Result>(VIDEO_URL + `/all`, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
    }

    // create(_docVideo: File, _data: any): Observable<any> {
    //     const formData = new FormData();
    //     formData.append('doc_video', _docVideo);
    //     formData.append('user_id', _data.user_id);
    //     formData.append('type', _data.type);
    //     formData.append('note', _data.note);
    //     return this.http.post<any>(VIDEO_URL, formData, { headers: this.httpUtils.mp4HTTPHeaders()}).pipe(catchError(this.httpUtils.errorHandler));
    // }


    create(_docVideo: File, _data: any): Observable<any> {
        console.log(_docVideo);
        const formData = new FormData();
        formData.append('doc_video', _docVideo);
        formData.append('user_id', _data.user_id);
        formData.append('type', _data.type);
        formData.append('note', _data.note);
        return this.http.post<any>(VIDEO_URL, formData).pipe(catchError(this.httpUtils.errorHandler));
    }



    delete(_video_id: number): Observable<any> {
        return this.http.delete<any>(VIDEO_URL + `/${_video_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
      }

}