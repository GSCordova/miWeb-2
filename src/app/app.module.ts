import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MyMaterialComponents } from './material.design-componentes';

// Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { Prueba } from './components/pruebamain/prueba';
import { Prueba2 } from './components/pruebamain2/prueba2';

// ModalFooter
import { FooterModal } from './components/footer/footer.component';

// Router
import { AppRoutingModule } from './app-routing.module';

// Hammer.js
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent, 
    FooterModal,
    FooterComponent,
    Prueba,
    Prueba2
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MyMaterialComponents,
    AppRoutingModule
  ],
  entryComponents: [AppComponent, FooterModal],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
