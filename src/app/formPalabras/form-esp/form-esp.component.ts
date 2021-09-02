import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EspanolService } from '../../services/espanol.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-form-esp',
  templateUrl: './form-esp.component.html',
  styleUrls: ['./form-esp.component.scss']
})
export class FormEspComponent implements OnInit {

  //Relleno los valores dependiendo si es el boton editar o anadir
  palabraRellenar: string = this.data.palabra === undefined ? "" : this.data.palabra;
  descripcionRellenar: string = this.data.descripcion === undefined ? "" : this.data.descripcion;
  fechaAltaRellenar: Date = this.data.fechaAlta === undefined ? new Date() : this.data.fechaAlta;
  fechaModificacionRellenar: Date = this.data.fechaAlta === undefined ? this.data.fechaModificacion: new Date();

  private checkAnadir: Boolean = false;

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FormEspComponent>,
    private espanolService: EspanolService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,) { }

  formEsp = this.formBuilder.group({
    id: [''],
    palabra: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    fechaAlta: [''],
    fechaModificacion: ['']
  })

  ngOnInit(): void {
    //Cargo los valores en el formulario
    this.formEsp.get('palabra')!.patchValue(this.palabraRellenar);
    this.formEsp.get('descripcion')!.patchValue(this.descripcionRellenar);
    this.formEsp.get('fechaAlta')!.patchValue(this.fechaAltaRellenar);
    this.formEsp.get('fechaModificacion')!.patchValue(this.fechaModificacionRellenar);
  }

  anadirPalabraEsp(){
    if (this.formEsp.valid) {
      console.log(this.formEsp.value);
      this.espanolService.anadirPalabraEsp(this.formEsp.value)
      .subscribe(palabra => 
        console.log(palabra),
        error => {console.log(error)
          if (error) {
            this.checkAnadir = true;
            console.log(this.checkAnadir);
          }

        this.snackBar.open (error.status + " - " + error.statusText, "", {
          verticalPosition: 'top',
          duration: 5000,
          panelClass: ['snackbar']
        });
        });       
        
        this.refrescar();
    }
    console.log(this.checkAnadir);
        
  }
  
  actualizarPalabraEsp(){
    if (this.formEsp.valid) {
      console.log(this.formEsp.value);
      this.espanolService.actualizarPalabraEsp(this.formEsp.value, this.data.palabra)
      .subscribe(palabra => 
        console.log(palabra));

        window.location.reload();
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
