import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { RemoteConfig } from "../configs/remote.config";
import { Result } from "../models/result.model";
import { HttpUtilService } from "../utils/http-util.service";

const CHATS_URL = RemoteConfig.BASE_URL + '/chats/msgs';
const CHATER_URL = RemoteConfig.BASE_URL + '/users/chats';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(
        private http: HttpClient,
        private httpUtils: HttpUtilService
    ) { }

    listChaters(profile_id, _filter: any): Observable<Result> {
        var _params = new HttpParams({ fromObject: _filter });
        return this.http.get<Result>(CHATER_URL + `/${profile_id}`, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
    }

    listContents(sender, receiver): Observable<any> {
        return this.http.get<any>(CHATS_URL + `/${sender}/${receiver}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }

    sendMsg(_msg: any): Observable<any> {
        return this.http.post<any>(CHATS_URL, _msg, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }
}