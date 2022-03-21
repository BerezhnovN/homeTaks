import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from '../../message.service';
import { FirstRequest } from './table-books';

@Injectable({
  providedIn: 'root'
})
export class TableBooksService {

  firstUrl: string = 'api/firstRequest';
  secondUrl: string = 'api/secondRequest';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getSetOne(): Observable<FirstRequest[]> {
    return this.http.get<FirstRequest[]>(this.firstUrl).pipe(
        tap(_ => this.log('fetched first set data of books')),
        catchError(this.handleError<FirstRequest[]>('getSetOne', []))
    )
  }

  getSetTwo(): Observable<FirstRequest[]> {
    return this.http.get<FirstRequest[]>(this.secondUrl).pipe(
        tap(_ => this.log('fetched second set data of books')),
        catchError(this.handleError<FirstRequest[]>('getSetTwo', []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`Table-books: ${message}`);
  }
}
