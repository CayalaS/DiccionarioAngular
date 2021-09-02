import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { PalabraEsp, PalabraEspSimple } from '../interfaces/palabraEsp.interface';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspanolService {

  constructor(private http: HttpClient) { }

  cargarPalabrasEsp(){
    const url = environment.apiUrl + "espanol";
    
    return this.http.get<PalabraEsp>(url);
  }

  cargarPalabraEsp(palabra: string) {
    const url = environment.apiUrl + "espanol/" + palabra;

    return this.http.get<PalabraEsp>(url);
  }

  anadirPalabraEsp(palabra: PalabraEspSimple){
    const url = environment.apiUrl + "espanol";

    return this.http.post<PalabraEspSimple>(url, palabra)
                    .pipe(
                      catchError(this.gestionErrores)
                    );
  }

  actualizarPalabraEsp(palabraObj: PalabraEspSimple, palabra: string){
    const url = environment.apiUrl + "espanol/" + palabra;

    return this.http.put<PalabraEspSimple>(url, palabraObj);
  }

  borrarPalabraEsp(palabra: string){
    const url = environment.apiUrl + "espanol/" + palabra;

    return this.http.delete<PalabraEsp>(url);
  }

  gestionErrores(error: HttpErrorResponse){
    return throwError(error);
  }
}
