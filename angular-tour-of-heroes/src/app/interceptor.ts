import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'X-header': "AAAAAAAAAAAAA"
      }
    })
    return next.handle(req)
    .pipe(
      tap(() => {
        console.log("Success")
      }),
      catchError( (error: HttpErrorResponse) => {
          console.log('Interceptor Error: ', error)
          return throwError(error);
      })
    );
  }
}
