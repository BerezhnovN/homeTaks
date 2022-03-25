import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { HeaderComponent } from './header/header.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { FifthPageComponent } from './fifth-page/fifth-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { PaginatorComponent } from './paginator/paginator.component';
import { PageComponent } from './page/page.component';
import { MatButtonModule } from '@angular/material/button';
import { TableBooksComponent } from './table-books/table-books.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { BookChartComponent } from './book-chart/book-chart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    PaginatorComponent,
    PageComponent,
    TableBooksComponent,
    ModalWindowComponent,
    BookChartComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
  ],
  exports: [PaginatorComponent, HeaderComponent, PageComponent],
})
export class BookModule {}
