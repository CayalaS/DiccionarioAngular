import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { UserResponse, User } from '../interfaces/user.interface';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
 
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient,
    private router: Router) {
    this.compruebaToken();
   }

  get isLogged(): Observable<boolean>{
     return this.loggedIn.asObservable();
   }

  login(authData: User): Observable<UserResponse | void>{
    const url = environment.authApiUrl + "auth/login";
  
    return this.http.post<UserResponse>(url, authData)
    .pipe(
      map((res:UserResponse) => {
        this.guardaToken(res.token);
        this.loggedIn.next(true);
        return res;
      }),
      catchError(error => this.gestionErrores(error))
    )
  }

  logout(){
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  private guardaToken(token: string){
    localStorage.setItem('token', token);
  }

  private compruebaToken(){
    const userToken = localStorage.getItem('token')!;
    const isExpired = helper.isTokenExpired(userToken);

    if (isExpired) {
      this.logout();
    }
    else this.loggedIn.next(true);
  }

  private gestionErrores(error: HttpErrorResponse): Observable<never>{
    let mensajeError = "Ha ocurrido un error obteniendo los datos";
    if (error) {
      console.log(error);
      mensajeError = "Error: " + error.message;
    }
    window.alert(mensajeError);
    return throwError(mensajeError);
  }
}
