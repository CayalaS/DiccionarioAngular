import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalabraIndividualComponent } from './palabra-individual/palabra-individual.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'esp/:palabra', component: PalabraIndividualComponent},
  {path: 'eng/:palabra', component: PalabraIndividualComponent},
];

@NgModule({
  declarations: [
    PalabraIndividualComponent
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class PalabraModule { }
