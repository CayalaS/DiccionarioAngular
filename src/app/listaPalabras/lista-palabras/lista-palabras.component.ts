import { Component, OnInit } from '@angular/core';
import { PalabraEng } from 'src/app/interfaces/palabraEng.interface';
import { PalabraEsp } from 'src/app/interfaces/palabraEsp.interface';
import { EspanolService } from 'src/app/services/espanol.service';
import { InglesService } from 'src/app/services/ingles.service';
import { MatDialog } from '@angular/material/dialog';
import { FormEspComponent } from 'src/app/formPalabras/form-esp/form-esp.component';
import { FormEngComponent } from 'src/app/formPalabras/form-eng/form-eng.component';

@Component({
  selector: 'app-lista-palabras',
  templateUrl: './lista-palabras.component.html',
  styleUrls: ['./lista-palabras.component.scss']
})
export class ListaPalabrasComponent implements OnInit {

  public palabrasEsp: any = [];
  public palabrasEng: any = [];


  constructor(private espanolService: EspanolService,
    private inglesService: InglesService,
    public dialog: MatDialog,) { }

  ngOnInit(): void {

    this.espanolService.cargarPalabrasEsp()
    .subscribe( resp => {

      this.palabrasEsp = resp;

    })

    this.inglesService.cargarPalabrasEng()
    .subscribe( resp => {
      
      this.palabrasEng = resp;

    })    

    setTimeout(() => {
      this.ordenar();
    }
    , 50);
  }

  ordenar(){
  this.palabrasEsp.sort((obj1: PalabraEsp, obj2: PalabraEsp) => {
      if (obj1.palabra > obj2.palabra) return 1;
      if (obj1.palabra < obj2.palabra) return -1;
      return 0;
  });

  this.palabrasEng.sort((obj1: PalabraEng, obj2: PalabraEng) => {
    if (obj1.palabra > obj2.palabra) return 1;
    if (obj1.palabra < obj2.palabra) return -1;
    return 0;
});
  }

  openDialogAnadirEsp() {
    this.dialog.open(FormEspComponent, {data: {valor: ""}});
  }

  openDialogAnadirEng() {
    this.dialog.open(FormEngComponent, {data: {valor: ""}});
  }

}
