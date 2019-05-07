import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component ({
    selector: 'portfolio-component',
    templateUrl: 'portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  displayedColumns: string[] = ['proyecto', 'info', 'visible', 'git'];
  dataSource = new MatTableDataSource<ProjectElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }

  goBack() {
    window.history.back();
  }
}

export interface ProjectElement {
  proyecto: string;
  info: boolean;
  visible: boolean;
  git: boolean;
  colored?: boolean
}

const ELEMENT_DATA: ProjectElement[] = [
  {proyecto: 'BBVA Global Net Cash', info: true, visible: false, git: false, colored: false},
  {proyecto: 'BBVA Net Cash', info: true, visible: false, git: false, colored: true},
  {proyecto: 'Bankinter - Onboarding Web', info: true, visible: false, git: false, colored: false},
  {proyecto: 'IBM App Web Interna', info: true, visible: false, git: false, colored: true},
  {proyecto: 'convertMe', info: true, visible: true, git: true, colored: false},
  {proyecto: 'Layout Redbility', info: true, visible: false, git: true, colored: true},
  {proyecto: 'Web-Dictionary', info: true, visible: false, git: true, colored: false},
  {proyecto: 'MusicaDelSigloXX', info: true, visible: false, git: true, colored: true},
  {proyecto: 'Calculator', info: true, visible: false, git: true, colored: false},
  {proyecto: '4Juniors', info: true, visible: false, git: true, colored: true},
  {proyecto: 'Personal Web', info: true, visible: false, git: true, colored: false},
  {proyecto: '3enRaya', info: true, visible: false, git: true, colored: true}
];