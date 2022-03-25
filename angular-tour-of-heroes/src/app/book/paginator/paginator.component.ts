import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      disableClose: true
    });
    dialogRef
      .afterClosed()
      .subscribe((result) => console.log('The dialog was closed'));
  }

  ngOnInit(): void {
    let url = window.location.href
    console.log(url.slice(url.length - 1))
  }

  onActive(page: number): string {
    let url = window.location.href
    return Number(url.slice(url.length - 1)) == page ? 'active' : 'notactive'
  }
}
