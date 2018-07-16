import { Component } from '@angular/core';

@Component({
    selector: 'aptitudes-component',
    templateUrl: './aptitudes.component.html'
})

export class AptitudesComponent {

    goBack() {
        window.history.back();
    }

}