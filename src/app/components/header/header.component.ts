
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })

export class HeaderComponent implements OnInit {

  valor: string = 'esp';
  oficialIdioma = {};

  constructor() {
    sessionStorage.setItem('language', this.valor);
  }

  ngOnInit() {
    this.oficialIdioma = JSON.parse(sessionStorage.getItem('lenguageElegido'));
    console.log(this.oficialIdioma);
  }

  changeIdioma() {
    if(this.valor == 'esp') {
      this.valor = 'eng';
      sessionStorage.setItem('language', this.valor);
    } else {
      this.valor = 'esp';
      sessionStorage.setItem('language', this.valor);
    }
  }

}