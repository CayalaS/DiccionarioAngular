import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaPalabrasComponent } from './lista-palabras/lista-palabras.component';
import { PalabraComponent } from './palabra/palabra.component';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {path: '', component: ListaPalabrasComponent},

];

@NgModule({
  declarations: [
    ListaPalabrasComponent,
    PalabraComponent
  ],
  exports: [
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ListaPalabrasModule { }
