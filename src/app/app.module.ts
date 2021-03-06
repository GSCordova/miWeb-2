import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MyMaterialComponents } from './material.design-componentes';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { GianmarcoComponent } from './components/gianmarco/gianmarco.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

// ModalFooter
import { FooterModal } from './components/footer/footer.component';
import { modalDialog } from './app.component';

// Router
import { AppRoutingModule } from './app-routing.module';

// Pipe

// Hammer.js
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    FooterModal,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GianmarcoComponent,
    AptitudesComponent,
    PortfolioComponent,
    modalDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MyMaterialComponents,
    AppRoutingModule
  ],
  entryComponents: [AppComponent, FooterModal, modalDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*

Colorear la página actual en el paginador.
Poner los 2 idiomas Header.
Añadir diseños Header.
Responsive.
Imagenes para responsive.
Separar los linkes de Contacto / Curriculum
Añadir los 2 CV con sus funcionalidades
Minijuego SimonDice



*/ 