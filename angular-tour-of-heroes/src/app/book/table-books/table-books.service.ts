import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, Observable, of, tap, map } from 'rxjs';
import { MessageService } from '../../message.service';
import { InputData, FirstRequest, SecondRequest } from './table-books';
@Injectable({
  providedIn: 'root',
})
export class TableBooksService {
  firstUrl: string = 'http://localhost:4200/api';
  secondUrl: string = 'http://localhost:4200/api';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getBooks(): Observable<any> {
    return this.http
      .get(`${this.firstUrl}/books.json`)
      .pipe(tap((resp: any) => console.info(resp, 'info')));
  }

  getFirstSet() {
    const data = this.http.get<FirstRequest[]>(`${this.firstUrl}/books.json`, {
      headers: { Get: 'Set 1' },
    });
    return data.pipe(
      map((data: any) => {
        return data.set1.data;
      })
    );
  }

  getSecondSet() {
    const data = this.http.get<SecondRequest[]>(`${this.firstUrl}/books.json`, {
      headers: { Get: 'Set 2' },
    });
    return data.pipe(
      map((data: any) => {
        return data.set2.data;
      })
    );
  }

  getSets(): Observable<InputData[]> {
    return concat(this.getFirstSet(), this.getSecondSet()).pipe(
      tap((_) => this.log('fetched set data of books'))
    );
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
