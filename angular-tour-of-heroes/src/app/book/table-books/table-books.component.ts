import { Component, OnInit } from '@angular/core';
import { FirstRequest } from './table-books';
import { TableBooksService } from './table-books.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableBooksComponent implements OnInit {
  constructor(private tableBooksService: TableBooksService) {}

  table: FirstRequest[] = [];
  total: number = 0;
  displayedColumns: string[] = ['id', 'title', 'qtyRelease'];
  description: string | null = null;
  expandedElement: FirstRequest | null | undefined ;

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

  ngOnInit(): void {
    this.getSetOne();
  }

  ngDoCheck(): void {
    this.total = 0;
    this.calculateTotal();
  }
}
