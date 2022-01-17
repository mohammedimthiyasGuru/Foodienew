import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { catchError } from 'rxjs/operators';
import { Result } from '../models/result.model';

const ARTICLE_URL = RemoteConfig.BASE_URL + '/posts';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  listArticle(_filter): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(ARTICLE_URL, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  /*  listComment(_filter): Observable<Result> {
     var _params = new HttpParams({ fromObject: _filter })
     return this.http.get<Result>(COMMENT_URL, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
   } */

  /*   createLinkArticle(jobaddtlps: any): Observable<any> {
      return this.http.post<any>(ARTICLE_URL + `/${jobaddtlps.job_id}/applicants/${jobaddtlps.resume_id}/addtlpsquestions`, jobaddtlps, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    } */

  createPost(_data: any): Observable<any> {
    return this.http.post<any>(ARTICLE_URL, _data, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  createMediaPost(_docPost: File, _data) {
    const formData = new FormData();
    formData.append('doc_post', _docPost);
    formData.append('user_id', _data.user_id);
    formData.append('post_content', _data.post_content);
    formData.append('post_type', _data.post_type);
    const _params = new HttpParams({ fromString: 'content=media' })
    return this.http.post<any>(ARTICLE_URL, formData, { params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  createComment(_postId: number, _data: any): Observable<any> {
    return this.http.post<any>(ARTICLE_URL + `/${_postId}/comments`, _data, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

}
