import { Component } from '@angular/core';

@Component ({
    selector: 'portfolio-component',
    templateUrl: 'portfolio.component.html'
})

export class PortfolioComponent {

    goBack() {
        window.history.back();
    }

}