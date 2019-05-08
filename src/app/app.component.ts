
import {Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { trigger, style, animate, transition, query } from '@angular/animations';

// TODO: i18n
// TODO: elegir icono redes sociales
// TODO: estilos botones main
// TODO: modal de app.component.ts dale bordes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(-100%)'
          }),
          {optional:true}),
        // ¡move page off screen right on leave
        query(':leave',
          animate('500ms ease',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(100%)'
            })
          ),
        {optional:true}),
        // move page in screen from left to right
        query(':enter',
          animate('500ms ease',
            style({
              /*opacity: 1,*/
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
      ])
    ])
  ]
})

export class AppComponent implements OnInit {

  escritura: string = '';
  animal: string;
  name: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(modalDialog, {
      width: '35%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

    document.addEventListener('keyup', (ev) => {

      this.escritura += ev.key;

      if(this.escritura.includes('cv.esp')) {
        alert('Download CV Español');
        this.escritura = '';
      } else if (this.escritura.includes('cv.eng')) {
        alert('Download CV Ingles');
        this.escritura = '';
      }

    });
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

}


@Component({
  selector: 'modalDialog',
  templateUrl: 'modalDialog.html',
  styleUrls: ['./modalDialog.css'],
})

export class modalDialog {

  constructor(
    public dialogRef: MatDialogRef<modalDialog>){}

  onNoClick(): void {
    this.dialogRef.close();
  }

}