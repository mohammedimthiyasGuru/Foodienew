import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpUtilService } from '../utils/http-util.service';
import { RemoteConfig } from '../configs/remote.config';
import { Result } from '../models/result.model';
import { catchError } from 'rxjs/operators';

const CORPORATES_URL = RemoteConfig.BASE_URL + '/corporates';
@Injectable({
  providedIn: 'root'
})
export class CorporateService {

  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilService) { }

  list(_filter: any): Observable<Result> {
    const _params = new HttpParams({ fromObject: _filter });
    return this.http.get<Result>(CORPORATES_URL, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  view(profile_id: string): Observable<any> {
    return this.http.get<any>(CORPORATES_URL + `/${profile_id}`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  update(corporate: any): Observable<any> {
    return this.http.put<any>(CORPORATES_URL + `/${corporate.corp_id}`, corporate, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  uploadExcel(resumes: FileList, corp_id: string, _data: any): Observable<any> {
    const formData = new FormData();

    for (var i = 0; i < resumes.length; i++) {
      formData.append('resumes', resumes[i]);
    }
    if (_data) {
      formData.append('resumecount', _data.resumes);
      formData.append('rewardvalue', _data.value);
      formData.append('rewardpoints', _data.points);
    }
    return this.http.post<string>(`${CORPORATES_URL}/${corp_id}/resumes`, formData).pipe(catchError(this.httpUtils.errorHandler));
  }

  myplan(profile_id: string): Observable<any> {
    return this.http.get<any>(CORPORATES_URL + `/${profile_id}/plan`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  myrewards(profile_id: string): Observable<any> {
    return this.http.get<any>(CORPORATES_URL + `/${profile_id}/rewards`, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  renewplan(cplan: any): Observable<any> {
    return this.http.post<any>(CORPORATES_URL + `/${cplan.corp_id}/renewplan`, cplan, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  /**
   * My Database - My Employers
   */
  listEmployers(_profileId: string, _filter: any): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(CORPORATES_URL + `/${_profileId}/employers`, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  createEmployerCandidate(_profileId: string, _data: any): Observable<any> {
    return this.http.post<any>(CORPORATES_URL + `/${_profileId}/employercandidates`, _data, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  deleteEmployerCandidate(_profileId: string, _data: any): Observable<any> {
    return this.http.put<any>(CORPORATES_URL + `/${_profileId}/removecandidates`, _data, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  deleteEmployer(_profileId: string, _data: any): Observable<any> {
    return this.http.put<any>(CORPORATES_URL + `/${_profileId}/removecorps`, _data, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  update_status(_data: any): Observable<any> {
    return this.http.put<any>(CORPORATES_URL + `/${_data.resume_id}/status`, _data, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  listEmployerCandidates(_profileId: string, _employer: string, _filter: any): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(CORPORATES_URL + `/${_profileId}/employers/${_employer}/candidates`, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  /**
   * My Recruiters
   */
  listRecruiters(_profileId: string, _filter: any): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(CORPORATES_URL + `/${_profileId}/recruiters`, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  listRecruiterCandidates(_profileId: string, _recruiter: string, _filter: any): Observable<Result> {
    var _params = new HttpParams({ fromObject: _filter })
    return this.http.get<Result>(CORPORATES_URL + `/${_profileId}/recruiters/${_recruiter}/candidates`, { headers: this.httpUtils.getHTTPHeaders(), params: _params }).pipe(catchError(this.httpUtils.errorHandler));
  }

  createRecruiterCandidate(_profileId: string, _data: any): Observable<any> {
    return this.http.post<any>(CORPORATES_URL + `/${_profileId}/recruitercandidates`, _data, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  deleteRecruiterCandidate(_profileId: string, _data: any): Observable<any> {
    return this.http.put<any>(CORPORATES_URL + `/${_profileId}/removecandidates`, _data, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }

  deleteRecruiter(_profileId: string, _data: any): Observable<any> {
    return this.http.put<any>(CORPORATES_URL + `/${_profileId}/removecorps`, _data, { headers: this.httpUtils.getHTTPHeaders() }).pipe(catchError(this.httpUtils.errorHandler));
  }
}
