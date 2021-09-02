import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InglesService } from '../../services/ingles.service';

@Component({
  selector: 'app-form-eng',
  templateUrl: './form-eng.component.html',
  styleUrls: ['./form-eng.component.scss']
})
export class FormEngComponent implements OnInit {

  //Relleno los valores dependiendo si es el boton editar o anadir
  palabraRellenar: string = this.data.palabra === undefined ? "" : this.data.palabra;
  palabraEspanolRellenar: string = this.data.palabraEspanol === undefined ? "" : this.data.palabraEspanol;
  fechaAltaRellenar: Date = this.data.fechaAlta === undefined ? new Date() : this.data.fechaAlta;
  fechaModificacionRellenar: Date = this.data.fechaAlta === undefined ? this.data.fechaModificacion: new Date();

  private checkAnadir: Boolean = false;

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FormEngComponent>,
    private inglesService: InglesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,) { }

  formEng = this.formBuilder.group({
    id: [''],
    palabra: ['', [Validators.required]],
    palabraEspanol: ['', [Validators.required]],
    fechaAlta: [''],
    fechaModificacion: ['']
  })  

  ngOnInit(): void {
    //Cargo los valores en el formulario
    this.formEng.get('palabra')!.patchValue(this.palabraRellenar);
    this.formEng.get('palabraEspanol')!.patchValue(this.palabraEspanolRellenar);
    this.formEng.get('fechaAlta')!.patchValue(this.fechaAltaRellenar);
    this.formEng.get('fechaModificacion')!.patchValue(this.fechaModificacionRellenar);
  }

  anadirPalabraEng(){
    if (this.formEng.valid) {
      console.log(this.formEng.value);
      this.inglesService.anadirPalabraEng(this.formEng.value)
      .subscribe(palabra => 
        console.log(palabra)
        ,
        error => {console.log(error)
          if (error) {
            this.checkAnadir = true;
          }

        this.snackBar.open (error.status + " - " + error.statusText, "", {
          verticalPosition: 'top',
          duration: 5000,
          panelClass: ['snackbar']
        });
        });

        this.refrescar();
    }
  }
  
  actualizarPalabraEng(){
    if (this.formEng.valid) {
      console.log(this.data.palabra);
      this.inglesService.actualizarPalabraEng(this.formEng.value, this.data.palabra)
      .subscribe(palabra => 
        console.log(palabra)
        ,
        error => {console.log(error)
          if (error) {
            this.checkAnadir = true;
          }

        this.snackBar.open (error.status + " - " + error.statusText, "", {
          verticalPosition: 'top',
          duration: 5000,
          panelClass: ['snackbar']
        });
        });

        this.refrescar();
    }
  }

  cerrar(){
    this.dialogRef.close();
  }

  refrescar() {
    setTimeout(() => {
      if (this.checkAnadir === false) {
        window.location.reload();
      }
    }
    , 20);
  }

}
