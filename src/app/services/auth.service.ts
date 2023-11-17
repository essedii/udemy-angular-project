import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {ILoginResponse} from 'src/app/interfaces/loginResponse'
import { Router } from '@angular/router';
import { User } from '../classes/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject: BehaviorSubject<any>;
  public isLoggedIn$: Observable<boolean>;
  private API_AUTH = environment.AUTH_API;
  constructor(
    private http: HttpClient, 
    private router: Router,
   
    ){
      this.isLoggedInSubject = new BehaviorSubject<any>(this.hasToken());
      this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
    }
  
  // login(email: string, password: string):Observable<any> {
  //   return this.http.post<ILoginResponse>(`${environment.AUTH_API}login?email=${email}&password=${password}`, null).pipe(
  //     tap(response => {
  //       localStorage.setItem('jwt', response.access_token);
  //     })
  //   )
  // }

  login(email: string, password: string):Observable<User> {
    return this.http.post<ILoginResponse>(`${environment.AUTH_API}login?email=${email}&password=${password}`, null).pipe(
      switchMap((response:ILoginResponse) => {
        localStorage.setItem('jwt', response.access_token);
        const user = new User();
        user.name = response.user_name;
        user.email = response.email;
        this.isLoggedInSubject.next(user);
        localStorage.setItem('user', JSON.stringify(user));
        return of(user)
      })
    )
  }

  signUp(userName: string, email: string, password: string):Observable<User> {
    const user = new User();
    user.name = userName;
    user.email = email;
    return this.http.post<ILoginResponse>(`${environment.AUTH_API}signup`, {email, password, userName}).pipe(
      switchMap((response:ILoginResponse) => {
        localStorage.setItem('jwt', response.access_token);
   
        this.isLoggedInSubject.next(user);
        localStorage.setItem('user', JSON.stringify(user));
        return of(user)
      })
    )
  }
  // BOLEANO SE UTENTE È LOGGATO (JWT)
  isUserLogin(): boolean {
    return true
  }

  //ELIMINARE TOKEN LOCALE STORAGE
  logOut(): void {
    return localStorage.removeItem('jwt')
  }

  private hasToken():boolean {
    return localStorage.getItem('jwt')? true : false;
  }

  public getToken() {
    return localStorage.getItem('jwt')
  }
}
