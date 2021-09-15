import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompruebaLoginGuard implements CanActivate {

  constructor(private authService: AuthService, 
    private router: Router){}

  canActivate(): Observable<boolean> {
    return this.authService.isLogged.pipe(
      take(1),
      map((loggedIn: boolean) => {

        if (loggedIn === false) {
          this.router.navigate(['/login']);
        }

        return loggedIn;
      })
    );
  }
  
}
