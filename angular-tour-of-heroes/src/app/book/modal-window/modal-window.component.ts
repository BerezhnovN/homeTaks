import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalWindowComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
