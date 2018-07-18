import { Component } from '@angular/core';

export interface Projectos {
  proyect: string;
  tecnologias: string;
  tipo: string;
  visible: boolean;
}


@Component ({
    selector: 'portfolio-component',
    templateUrl: 'portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {

  works: Projectos[] = [
    {proyect: 'BBVA Global Net Cash (Actualmente)', tipo: 'Laboral', tecnologias: 'JS', visible: true},
    {proyect: 'BBVA Net Cash', tipo: 'Laboral', tecnologias: 'JS', visible: true},
    {proyect: 'IBM App Web Interna', tipo: 'Laboral', tecnologias: 'JS', visible: false},
    {proyect: 'Bankinter - Onboarding Web', tipo: 'Laboral', tecnologias: 'JS', visible: false},
    {proyect: 'ConvertMe', tipo: 'Personal', tecnologias: 'JS', visible: true}
  ]

  goBack() {
    window.history.back();
  }

  pulsandoPaginacion() {

      if(event.target.innerHTML == 1) {
            this.works = [
                {proyect: 'BBVA Global Net Cash (Actualmente)', tipo: 'Laboral', tecnologias: 'JS', visible: true},
                {proyect: 'BBVA Net Cash', tipo: 'Laboral', tecnologias: 'JS', visible: true},
                {proyect: 'IBM App Web Interna', tipo: 'Laboral', tecnologias: 'JS', visible: false},
                {proyect: 'Bankinter - Onboarding Web', tipo: 'Laboral', tecnologias: 'JS', visible: false},
                {proyect: 'ConvertMe', tipo: 'Personal', tecnologias: 'JS', visible: true}
            ]
      } else if (event.target.innerHTML == 2) {
            this.works = [
                {proyect: 'Tres en Raya', tipo: 'Personal', tecnologias: 'JS', visible: true},
                {proyect: 'Calculadora', tipo: 'Personal', tecnologias: 'JS', visible: true},
                {proyect: 'Web-Dictonary', tipo: 'Personal', tecnologias: 'JS', visible: true},
                {proyect: '4Juniors', tipo: 'Personal', tecnologias: 'JS', visible: true},
                {proyect: 'pokemonBattle', tipo: 'Personal', tecnologias: 'JS', visible: true}
            ]

      } else {
            this.works = [
                {proyect: 'miWeb One', tipo: 'Personal', tecnologias: 'JS', visible: true},
                {proyect: 'miWeb Two', tipo: 'Personal', tecnologias: 'JS', visible: true}
            ]
      }
  }

}