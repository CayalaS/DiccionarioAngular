import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuModule } from './menu/menu.module';
import { InicioModule } from './inicio/inicio.module';
import { ListaPalabrasModule } from './listaPalabras/lista-palabras.module';
import { PalabraModule } from './palabra/palabra.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MenuModule,
    InicioModule,
    HttpClientModule,
    ListaPalabrasModule,
    PalabraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
