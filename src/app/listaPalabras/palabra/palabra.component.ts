import { Component, Input, OnInit } from '@angular/core';
import { PalabraEsp } from '../../interfaces/palabraEsp.interface';
import { PalabraEng } from '../../interfaces/palabraEng.interface';
import { MatDialog } from '@angular/material/dialog';
import { FormEspComponent } from 'src/app/formPalabras/form-esp/form-esp.component';
import { DialogBorrarComponent } from '../../formPalabras/dialog-borrar/dialog-borrar.component';
import { EspanolService } from 'src/app/services/espanol.service';
import { InglesService } from 'src/app/services/ingles.service';
import { FormEngComponent } from 'src/app/formPalabras/form-eng/form-eng.component';

@Component({
  selector: 'app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.scss']
})
export class PalabraComponent implements OnInit {

  @Input() palabraEsp: PalabraEsp = {
    id: 0,
    palabra: "",
    descripcion: "",
    fechaAlta: new Date(),
    fechaModificacion: new Date(),
    palabrasIngles: {
      id: 0,
      palabra: "",
      palabraEspanol: "",
      fechaAlta: new Date(),
      fechaModificacion: new Date()
    }
  }

  @Input() palabraEng: PalabraEng = {
    id: 0,
    palabra: "",
    palabraEspanol: "",
    fechaAlta: new Date(),
    fechaModificacion: new Date(),
    espanolSimpleOutputDto: {
      id: 0,
      palabra: "",
      descripcion: "",
      fechaAlta: new Date(),
      fechaModificacion: new Date()
    }
  }

  constructor(public dialog: MatDialog,
    private espanolService: EspanolService,
    private inglesService: InglesService,) { }

  ngOnInit(): void {
  }

  openDialogActualizarEsp() {
    this.dialog.open(FormEspComponent, {data: this.palabraEsp});
  }

  openDialogBorrarEsp() {
    let dialogRef = this.dialog.open(DialogBorrarComponent, {data: this.palabraEsp});
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === "true") {
        this.espanolService.borrarPalabraEsp(this.palabraEsp.palabra)
        .subscribe()

        window.location.reload();
      }
    });
  }

  openDialogActualizarEng() {
    this.dialog.open(FormEngComponent, {data: this.palabraEng});
  }

  openDialogBorrarEng() {
    let dialogRef = this.dialog.open(DialogBorrarComponent, {data: this.palabraEng});
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === "true") {
        this.inglesService.borrarPalabraEng(this.palabraEng.palabra)
        .subscribe()

        window.location.reload();
      }
    });
  }

}
