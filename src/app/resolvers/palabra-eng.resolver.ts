import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { PalabraEng } from '../interfaces/palabraEng.interface';
import { InglesService } from '../services/ingles.service';

@Injectable({
  providedIn: 'root'
})
export class PalabraEngResolver implements Resolve<Observable<PalabraEng>> {

  constructor(private inglesService: InglesService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.inglesService.cargarPalabraEng(route.paramMap.get('palabra')!).pipe(
      catchError( e => {
        return of(e);
      }),
      delay(2000)
    )
  }
}
