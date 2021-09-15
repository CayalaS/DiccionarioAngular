import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompruebaLoginGuard } from './guards/comprueba-login.guard';


const routes: Routes = [
  {
    path: 'inicio', 
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'listaPalabras', 
    loadChildren: () => import('./listaPalabras/lista-palabras.module').then(m => m.ListaPalabrasModule),
    canActivate: [CompruebaLoginGuard]
  },
  {
    path: 'palabra', 
    loadChildren: () => import('./palabra/palabra.module').then(m => m.PalabraModule)
  }
  ,
  {
    path: 'anadir', 
    loadChildren: () => import('./formPalabras/form-palabras.module').then(m => m.FormPalabrasModule)
  }
  ,
  {
    path: 'editar', 
    loadChildren: () => import('./formPalabras/form-palabras.module').then(m => m.FormPalabrasModule)
  }
  ,
  {
    path: 'login', 
    loadChildren: () => import('./auth/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
