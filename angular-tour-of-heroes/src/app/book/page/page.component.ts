import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    ModalWindowComponent,
  ],
})
export class PageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
