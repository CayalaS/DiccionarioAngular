import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [
    InicioComponent,
    BusquedaComponent
  ],
  exports: [
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InicioModule { }
