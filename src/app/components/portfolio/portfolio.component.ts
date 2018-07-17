import { Component } from '@angular/core';

export interface Projectos {
  proyect: string;
  tecnologias: string;
  tipo: string;
}
/**
 * @title Table with sorting
 */
@Component ({
    selector: 'portfolio-component',
    templateUrl: 'portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {

  works: Projectos[] = [
    {proyect: 'BBVA Net Cash', tipo: 'Laboral', tecnologias: 'JS' },
    {proyect: 'BBVA Net Cash', tipo: 'Personal', tecnologias: 'JS'},
    {proyect: 'BBVA Net Cash', tipo: 'Laboral', tecnologias: 'JS'},
    {proyect: 'BBVA Net Cash', tipo: 'Laboral', tecnologias: 'JS' },
    {proyect: 'BBVA Net Cash', tipo: 'Personal', tecnologias: 'JS'}
  ]

  goBack() {
    window.history.back();
  }

  pulsandoPaginacion() {
      if(event.target.innerHTML == 1) {
            this.works = [
                {proyect: 'BBVA Net Cash', tipo: 'Laboral', tecnologias: 'JS' },
                {proyect: 'BBVA Net Cash', tipo: 'Personal', tecnologias: 'JS'},
                {proyect: 'BBVA Net Cash', tipo: 'Laboral', tecnologias: 'JS'},
                {proyect: 'BBVA Net Cash', tipo: 'Laboral', tecnologias: 'JS' },
                {proyect: 'BBVA Net Cash', tipo: 'Personal', tecnologias: 'JS'}
            ]
      } else if (event.target.innerHTML == 2) {
            this.works = [
                {proyect: 'Bankinter SA', tipo: 'Laboral', tecnologias: 'JS' },
                {proyect: 'Bankinter SA', tipo: 'Personal', tecnologias: 'JS'},
                {proyect: 'Bankinter SA', tipo: 'Laboral', tecnologias: 'JS'},
                {proyect: 'Bankinter SA', tipo: 'Laboral', tecnologias: 'JS' },
                {proyect: 'Bankinter SA', tipo: 'Personal', tecnologias: 'JS'}
            ]
      } else {
            this.works = [
                {proyect: 'GNC', tipo: 'Laboral', tecnologias: 'JS' },
                {proyect: 'GNC', tipo: 'Personal', tecnologias: 'JS'},
                {proyect: 'GNC', tipo: 'Laboral', tecnologias: 'JS'},
                {proyect: 'GNC', tipo: 'Laboral', tecnologias: 'JS' },
                {proyect: 'GNC', tipo: 'Personal', tecnologias: 'JS'}
            ]
      }
  }

}