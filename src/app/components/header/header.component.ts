
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })

export class HeaderComponent implements OnInit {

  en_lang: string;

  constructor() { 
    this.en_lang = 'English';
  }

  ngOnInit() { }

  changeLanguage(param: string) {
    console.log(param);
  }

}