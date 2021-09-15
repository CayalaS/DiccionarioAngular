import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PalabraEng } from 'src/app/interfaces/palabraEng.interface';
import { PalabraEsp } from 'src/app/interfaces/palabraEsp.interface';
import { EspanolService } from '../../services/espanol.service';
import { InglesService } from '../../services/ingles.service';
import { PalabraEngSimple } from '../../interfaces/palabraEng.interface';
import { MatDialog } from '@angular/material/dialog';
import { FormEspComponent } from 'src/app/formPalabras/form-esp/form-esp.component';
import { DialogBorrarComponent } from 'src/app/formPalabras/dialog-borrar/dialog-borrar.component';
import { FormEngComponent } from 'src/app/formPalabras/form-eng/form-eng.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-palabra-individual',
  templateUrl: './palabra-individual.component.html',
  styleUrls: ['./palabra-individual.component.scss']
})
export class PalabraIndividualComponent implements OnInit {

  palabraEsp: PalabraEsp = {
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

  palabraEng: PalabraEng = {
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

  traduccionEng: any = {
      id: 0,
      palabra: "",
      palabraEspanol: "",
      fechaAlta: new Date(),
      fechaModificacion: new Date()
    }

    prueba: any;
  

  palabra = String(this.route.snapshot.paramMap.get('palabra'));

  constructor(private espanolService: EspanolService,
    private inglesService: InglesService,
    private route: ActivatedRoute,
    public router: Router,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //Compruebo que parametro de idioma se esta pasando y cargo la palabra
    const selectorIdioma = this.route.url;
    selectorIdioma.subscribe(data => {

      if (data[0].path === "esp") {
        this.cargarPalabraEsp();
      }
      if (data[0].path === "eng") {
        this.cargarPalabraEng();
      }

    })
    
    
  }

  //Creo los metodos que llaman al servicio y cargan la palabra
  cargarPalabraEsp(): void {

    this.palabraEsp = this.activatedRoute.snapshot.data.palabra;
    this.traduccionEng =  this.palabraEsp.palabrasIngles;
    console.log(this.palabraEsp);
    console.log(this.traduccionEng);
    if (this.traduccionEng === undefined) {
      this.palabraEsp.id = 0;
    }
    /*if (this.palabra != null) {
      this.espanolService.cargarPalabraEsp(this.palabra)
      .subscribe(valor =>{  

      this.palabraEsp = valor;
      this.traduccionEng = valor.palabrasIngles;
      console.log(this.traduccionEng);

      });
    }   */ 
  }

  cargarPalabraEng(): void {
    this.traduccionEng = 0;
    console.log("entra")
    this.palabraEng = this.activatedRoute.snapshot.data.palabra;
    if (this.palabraEng.id === undefined) {
      this.palabraEng.id = 0;
    }
    /*if (this.palabra != null) {
      this.inglesService.cargarPalabraEng(this.palabra)
      .subscribe(valor =>{  
      
      this.palabraEng = valor;
      console.log(valor);

      });
    } */ 
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
