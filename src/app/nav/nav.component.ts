import { Component } from '@angular/core';
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

  newUser() {
    this.userSelected = new User();
    this.showForm = true;
  }
}
