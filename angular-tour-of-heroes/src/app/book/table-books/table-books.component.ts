import { Component, OnInit } from '@angular/core';
import { FirstRequest, InputData, SecondRequest } from './table-books';
import { TableBooksService } from './table-books.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})

export class TableBooksComponent implements OnInit {
  constructor(private tableBooksService: TableBooksService) {}

  table: InputData[] = [];
  getData: InputData[] = [];
  total: number = 0;
  displayedColumns: string[] = ['id', 'title', 'qtyRelease'];
  description: string | null = null;
  expandedElement: null | undefined;

  getSets(): void {
    this.tableBooksService.getSets().subscribe((table) => {
      this.getData = table;
      this.addStream();
    });
  }

  addStream(): void {
    if (this.table.length != 0) {
      this.table.map((a) =>
        Object.assign(
          a,
          this.getData.find((b: SecondRequest) => b.id == a.id)
        )
      );
    } else {
      this.table = this.getData;
    }
  }

  calculateTotal(): void {
    for (let i = 0; i < this.table.length; i++) {
      this.total += this.table[i].qtyRelease;
    }
  }

  ngOnInit(): void {
    this.getSets();
  }

  ngDoCheck(): void {
    this.total = 0;
    this.calculateTotal();
  }

  setName(el: string) {
    if (el == 'id') {
      return 'id';
    } else if (el == 'title') {
      return 'Название';
    } else {
      return 'Тираж';
    }
  }
}
