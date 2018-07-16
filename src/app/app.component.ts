
import { Component } from '@angular/core';
import { trigger, style, animate, transition, query } from '@angular/animations';

import * as dataEspañol from "./idioma/español.json";
import * as dataIngles from "./idioma/ingles.json";

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

export class AppComponent {

  escritura: string = '';
  valor: number = 1;
  idioma = {};

  constructor() {

    if( sessionStorage.getItem('language') == 'esp' ) {
      sessionStorage.setItem('lenguageElegido', dataEspañol); 
    } else {
      sessionStorage.setItem('lenguageElegido', dataIngles); 
    }

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
