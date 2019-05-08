
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    selector: 'footer-component',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
  })

export class FooterComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FooterModal, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
    selector: 'footer.component-dialog',
    templateUrl: 'footer.component-dialog.html',
    styleUrls: ['./footer.component-dialog.css']
  })

export class FooterModal {

    constructor(
        public dialogRef: MatDialogRef<FooterModal>) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

}

