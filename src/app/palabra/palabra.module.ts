import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalabraIndividualComponent } from './palabra-individual/palabra-individual.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { PalabraEspResolver } from '../resolvers/palabra-esp.resolver';
import { PalabraEngResolver } from '../resolvers/palabra-eng.resolver';

const routes: Routes = [
  {path: 'esp/:palabra', component: PalabraIndividualComponent, resolve: { palabra: PalabraEspResolver }},
  {path: 'eng/:palabra', component: PalabraIndividualComponent, resolve: { palabra: PalabraEngResolver }},
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
