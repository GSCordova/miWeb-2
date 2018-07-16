
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { GianmarcoComponent } from './components/gianmarco/gianmarco.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent, data: { animation: 'main' } },
    { path: 'gianmarco', component: GianmarcoComponent, data: { animation: 'gianmarco' } },
    { path: 'aptitudes', component: AptitudesComponent, data: { animation: 'aptitudes' } },
    { path: 'portfolio', component: PortfolioComponent, data: { animation: 'portfolio' } },
    { path: '**', component: MainComponent}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}