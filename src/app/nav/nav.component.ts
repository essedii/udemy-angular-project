import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../classes/User';
import { IUser } from '../interfaces/user';

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

  newUser() {
    this.onNewUser.emit();
  }
}
