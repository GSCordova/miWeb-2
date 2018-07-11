
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Prueba } from './components/pruebamain/prueba';
import { Prueba2 } from './components/pruebamain2/prueba2';

const routes: Routes = [
    { path: '', redirectTo: '/prueba', pathMatch: 'full' },
    { path: 'prueba', component: Prueba, data: { animation: 'prueba' } },
    { path: 'prueba2', component: Prueba2, data: { animation: 'prueba2' } }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}