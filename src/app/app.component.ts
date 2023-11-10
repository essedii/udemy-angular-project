import { Component } from '@angular/core';
import { IUser } from './interfaces/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['']
})
export class AppComponent {
  userSelected: IUser;
  showForm: boolean = false;

  
  updateUser(user: IUser) {
    this.userSelected = user
    this.showForm = true;
  }
}
