import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { catchError } from 'rxjs/operators';

const API_NOTIFI_URL = RemoteConfig.BASE_URL + '/notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  // send_notify(user: any): Observable<any> {
  //   return this.http.post<any>(API_NOTIFI, user, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.httpUtils.errorHandler));
  // }

  markusread(profileId): Observable<any> {
    return this.http.put<any>(API_NOTIFI_URL + `/${profileId}/markasread`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  notification_list(profileId: any): Observable<any> {
    return this.http.get<any>(API_NOTIFI_URL + `/${profileId}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

}