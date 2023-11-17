import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../classes/User';
import { IUser } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  userSelected: IUser;
  showForm: boolean = false;
  @Output() 
  onNewUser = new EventEmitter();
  //OBS publico per verificare isLogged
  public isLoggedIn$: Observable<boolean>;

  constructor(
    private auth: AuthService,
    private router: Router
    ) {
    this.isLoggedIn$ = this.auth.isLoggedIn$;
  }

  newUser() {
    this.onNewUser.emit();
  }

  login():void {
    this.router.navigate(['/login']);
  }
  
  signup() {
    this.router.navigate(['/signup']);
  }
  
  logout() {
    this.auth.logOut();
    this.router.navigate(['/']);
  }
}
