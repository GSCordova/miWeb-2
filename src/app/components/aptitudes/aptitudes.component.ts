import { Component } from '@angular/core';

@Component({
    selector: 'aptitudes-component',
    templateUrl: './aptitudes.component.html',
    styleUrls: ['./aptitudes.component.css']
})

export class AptitudesComponent {

    goBack() {
        window.history.back();
    }

}