import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AnadirComponent } from './anadir/anadir.component';
import { FormEngComponent } from './form-eng/form-eng.component';
import { FormEspComponent } from './form-esp/form-esp.component';
import { ReactiveFormsModule,  } from '@angular/forms';
import { DialogBorrarComponent } from './dialog-borrar/dialog-borrar.component';

const routes: Routes = [

];


@NgModule({
  declarations: [
    AnadirComponent,
    FormEspComponent,
    FormEngComponent,
    DialogBorrarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class FormPalabrasModule { }
