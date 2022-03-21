import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, combineLatest, concat, forkJoin, map, merge, Observable, of, tap } from 'rxjs';
import { MessageService } from '../../message.service';
import { InputData } from './table-books';
@Injectable({
  providedIn: 'root'
})
export class TableBooksService {

  firstUrl: string = 'api/firstRequest';
  secondUrl: string = 'api/secondRequest';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getSets(): Observable<InputData[]> {
    return concat(
        this.http.get<InputData[]>(this.firstUrl).pipe(),
        this.http.get<InputData[]>(this.secondUrl).pipe()
      ).pipe(
        tap(_ => this.log('fetched set data of books')),
        catchError(this.handleError<InputData[]>('getSets', []))
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
