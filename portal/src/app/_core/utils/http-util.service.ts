import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { LocalStorage } from '../_data/localstorage';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(
    private storage: LocalStorage
  ) { }

  getHTTPHeaders(): HttpHeaders {
    var token = this.storage.authToken
    const result = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': token ? token : ''
    });
    return result;
  }

  httpHeaders(): HttpHeaders {
    var token = this.storage.authToken
    const result = new HttpHeaders({
      'x-access-token': token ? token : ''
    });
    return result;
  }

  mp4HTTPHeaders(): HttpHeaders {
    var token = this.storage.authToken
    const result = new HttpHeaders({
      'Content-Type': 'application/octet-stream',
      'x-access-token': token ? token : ''
    });
    return result;
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error) {
        // Get client-side error
        errorMessage = error.error.message;
    } else {
        // Get server-side error
        errorMessage = error.message;
    }
    return throwError(errorMessage);
}
}
