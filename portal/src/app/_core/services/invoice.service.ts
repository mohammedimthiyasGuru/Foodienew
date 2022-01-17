import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { Result } from '../models/result.model';
import { catchError } from 'rxjs/operators';

const INVOICE_URL = RemoteConfig.BASE_URL + '/invoices';
@Injectable({
    providedIn: 'root'
})
export class InvoiceService {

    constructor(
        private http: HttpClient,
        private httpUtils: HttpUtilService) { }

    listSents(_profileId: string, _filter: any): Observable<Result> {
        return this.http.get<Result>(INVOICE_URL + `/${_profileId}/sent`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }

    listReceiveds(_profileId: string, _filter: any): Observable<Result> {
        return this.http.get<Result>(INVOICE_URL + `/${_profileId}/received`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
    }

    create(_docInvoice: File, _data: any): Observable<any> {
        const formData = new FormData();
        formData.append('doc_invoice', _docInvoice);
        formData.append('sender', _data.sender);
        formData.append('receiver', _data.receiver);
        formData.append('subject', _data.subject);
        formData.append('note', _data.note);
        return this.http.post<string>(INVOICE_URL, formData).pipe(catchError(this.httpUtils.errorHandler));
    }
}