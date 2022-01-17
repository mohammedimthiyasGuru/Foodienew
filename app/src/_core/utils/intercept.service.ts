// Angular
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
// RxJS
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router, RouterStateSnapshot } from '@angular/router';
// import { debug } from 'util';

/**
 * More information there => https://medium.com/@MetonymyQT/angular-http-interceptors-what-are-they-and-how-to-use-them-52e060321088
 */
@Injectable({
	providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {

	constructor(
		private router: Router
	) { }

	// intercept request and add token
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			tap(
				event => {
					if (event instanceof HttpResponse) {
						// console.log('all looks good');
						// http response status code
						// console.log(event.status);
					}
				},
				error => {
					if (error.status === 401) {
						// auto logout if 401 response returned from api
						// this.authenticationService.logout();
						// location.reload(true);
						localStorage.clear();
						this.router.navigate(['/account/login'], { queryParams: { returnUrl: window.location.pathname } });
						return;
					}
					// http response status code
					// console.log('----response----');
					// console.error('status code:');
					// tslint:disable-next-line:no-debugger
					// this.notification.showError(error.message, 'Server Error');
					console.error('Error Status -> ', error.status);
					console.error('Error Message -> ', error.message);
					// console.log('--- end of response---');
				}
			)
		);
	}
}
