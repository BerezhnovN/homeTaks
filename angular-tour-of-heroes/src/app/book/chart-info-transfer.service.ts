import { Injectable } from '@angular/core';
import { InputData } from './table-books/table-books';

@Injectable({
  providedIn: 'root'
})
export class ChartTransferService {

  data: InputData[] | undefined;

  constructor() { }

  saveData(data: InputData[]) {
    this.data = data
  }

  getData() {
    return this.data
  }
}
