import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: LoginComponent},

];

@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class LoginModule { }
