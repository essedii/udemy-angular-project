import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject(false) = new BehaviorSubject<boolean>(false)
  signIn(email: string, password: string): void {
    console.log(email, password)
  }
  signUp(userName: string, email: string, password: string): void {
    
  }

  isUserLogin(): boolean {
    return false
  }

  logOut(): void {
  }
}
