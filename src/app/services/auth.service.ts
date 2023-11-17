import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean>;
  private token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbmlzdHJhdG9yIiwiYXV0aCI6IlJPTEVfQURNSU4sUk9MRV9VU0VSIiwiZXhwIjoxNzAwMjI5MjI2fQ.KLLKkJLZRX1jFDRfxYbcj8CCzdBX3g65_f6YG9KEt-AmbUeSNSxu1f223WAXeo8xZkXAMDh2vlCuI-ylWJmpog';
  public isLoggedIn$: Observable<boolean>;
  
  constructor(private router: Router) {
    this.isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken())
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
  }

  signIn(email: string, password: string): void {
    localStorage.setItem('jwt', this.token)
    console.log(email, password)
    this.router.navigateByUrl('users')
  }

  // signUp(userName: string, email: string, password: string): void {
    
  // }

  isUserLogin(): boolean {
    return this.hasToken()
  }

  logOut(): void {
  }

  private hasToken():boolean {
    return Boolean(localStorage.getItem('jwt'))
  }

  getToken() {
    return localStorage.getItem('jwt')
  }
}
