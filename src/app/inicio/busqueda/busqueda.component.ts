import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { EspanolService } from 'src/app/services/espanol.service';
import { InglesService } from 'src/app/services/ingles.service';
import { PalabraEsp } from '../../interfaces/palabraEsp.interface';
import { PalabraEng } from '../../interfaces/palabraEng.interface';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  //Inicializo Arrays para el autocompletar
  public palabrasEsp: any = [];
  public palabrasEng: any = [];

  //Formulario Autocompletar
  formAutocompletar = new FormControl();
  filteredPalabras: Observable<any[]> | undefined;
  
  //Formulario selector idiomas
  formIdioma: FormGroup;
  idiomas: any[] = [
    {
      name: "Español/Spanish",
      nav: "esp"
    }, 
    {
      name: "Inglés/English",
      nav: "eng"
    }];
  idiomaControl = new FormControl(this.idiomas[0]);

  constructor(private espanolService: EspanolService,
    private inglesService: InglesService) {

      //Cargo el formulario autocompletar al iniciar la pagina
      this.cargaAutocompletarEsp();

      //Inicio el formulario que coge el idioma
      this.formIdioma = new FormGroup({
        idioma: this.idiomaControl
      });
   }

  ngOnInit(): void {
    this.onChanges();

    //Relleno los Arrays con las palabras
    this.espanolService.cargarPalabrasEsp()
    .subscribe( resp => {

      this.palabrasEsp = resp;

    })

    this.inglesService.cargarPalabrasEng()
    .subscribe( resp => {
      
      this.palabrasEng = resp;

    })   
  }

  //Cargo el Autocompletar en Esp
  cargaAutocompletarEsp(){
    this.filteredPalabras = this.formAutocompletar.valueChanges
    .pipe(
      startWith(''),
      map(palabra => palabra ? this._filterStatesEsp(palabra) : this.palabrasEsp.slice())
    );
  }

  //Cargo el Autocompletar en Esp
  cargaAutocompletarEng(){
    this.filteredPalabras = this.formAutocompletar.valueChanges
    .pipe(
      startWith(''),
      map(palabra => palabra ? this._filterStatesEng(palabra) : this.palabrasEng.slice())
    );
  }

  //Detecta los cambios de idioma y llama a un autocompletar u otro
  onChanges(){
    this.idiomaControl.valueChanges.subscribe(data => {
      if (data.nav === "esp") {
        this.cargaAutocompletarEsp();
      }
      else if (data.nav === "eng") {
        this.cargaAutocompletarEng();
      } 
    })
  }


  //Filtros por idioma
  private _filterStatesEsp(value: string): PalabraEsp[] {
    const filterValue = value.toLowerCase();

    return this.palabrasEsp.filter((palabra: { palabra: string; }) => palabra.palabra.toLowerCase().includes(filterValue));
  }

  private _filterStatesEng(value: string): PalabraEng[] {
    const filterValue = value.toLowerCase();

    return this.palabrasEng.filter((palabra: { palabra: string; }) => palabra.palabra.toLowerCase().includes(filterValue));
  }

}
