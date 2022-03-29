import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {
  private code = btoa('HelloWb:admin');
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Basic ${this.code}`,
      },
    });
    return next.handle(req).pipe(
      tap((resp) => {
        console.log(resp);
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['registration']);
        }
        console.log('Interceptor Error: ', error);
        return throwError(error);
      })
    );
  }
}
