import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PalabraEsp } from '../interfaces/palabraEsp.interface';
import { EspanolService } from '../services/espanol.service';

@Injectable({
  providedIn: 'root'
})
export class PalabraEspResolver implements Resolve<Observable<PalabraEsp>> {

  constructor(
    private espanolService: EspanolService,
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.espanolService.cargarPalabraEsp(route.paramMap.get('palabra')!).pipe(
      catchError(e => {
        return of(e);
      }
    ))
  }
}
