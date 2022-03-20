import { Component, OnInit } from '@angular/core';
import { FirstRequest } from './table-books';
import { TableBooksService } from './table-books.service';

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.scss'],
})
export class TableBooksComponent implements OnInit {
  constructor(private tableBooksService: TableBooksService) {}

  table: FirstRequest[] = [];
  total: number = 0;
  displayedColumns: string[] = ['id', 'title', 'qtyRelease'];
  description: string | null = null;

  getSetOne() {
    this.tableBooksService
      .getSetOne()
      .subscribe((table) => (this.table = table));
  }

  getSetTwo(id: number) {
    this.tableBooksService
      .getSetTwo()
      .subscribe((resp) => (this.description = resp[id].description));
  }

  calculateTotal(): void {
    for (let i = 0; i < this.table.length; i++) {
      this.total += this.table[i].qtyRelease;
    }
  }

  // getTotalCost() {
  //   return (this.total = this.table
  //     .map((el) => el.qtyRelease)
  //     .reduce((acc, value) => acc + value, 0));
  // }

  rowClick(data: FirstRequest) {
    this.getSetTwo(data.id - 1);
  }

  ngOnInit(): void {
    this.getSetOne();
  }

  ngDoCheck(): void {
    this.total = 0;
    this.calculateTotal();
  }
}
