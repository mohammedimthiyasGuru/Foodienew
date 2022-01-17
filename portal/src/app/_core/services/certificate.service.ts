import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { catchError } from 'rxjs/operators';
import { Result } from '../models/result.model';

const CERTIFICATE_URL = RemoteConfig.BASE_URL + '/certificates';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  list(_userId: number, _filter: any): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(CERTIFICATE_URL + `/${_userId}`, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  upload(_docCert: File, _userId) {
    const formData = new FormData();
    formData.append('doc_certificate', _docCert);
    formData.append('user_id', _userId);
    return this.http.post<any>(CERTIFICATE_URL, formData).pipe(catchError(this.httpUtils.errorHandler));
  }

}
