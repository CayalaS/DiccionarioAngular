import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { PalabraEng, PalabraEngSimple } from '../interfaces/palabraEng.interface';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InglesService {

  constructor(private http: HttpClient) { }

  cargarPalabrasEng(){
    const url = environment.apiUrl + "ingles";
    
    return this.http.get<PalabraEng>(url);
  }

  cargarPalabraEng(palabra: string) {
    const url = environment.apiUrl + "ingles/" + palabra;

    return this.http.get<PalabraEng>(url);
  }

  anadirPalabraEng(palabra: PalabraEngSimple){
    const url = environment.apiUrl + "ingles";

    return this.http.post<PalabraEngSimple>(url, palabra)
                    .pipe(
                      catchError(this.gestionErrores)
                    );
  }

  actualizarPalabraEng(palabraObj: PalabraEngSimple, palabra: string){
    const url = environment.apiUrl + "ingles/" + palabra;
    console.log(url);
    return this.http.put<PalabraEngSimple>(url, palabraObj)
                    .pipe(
                      catchError(this.gestionErrores)
                    );
  }

  borrarPalabraEng(palabra: string){
    const url = environment.apiUrl + "ingles/" + palabra;

    return this.http.delete<PalabraEng>(url);
  }

  gestionErrores(error: HttpErrorResponse){
    return throwError(error);
  }
}
