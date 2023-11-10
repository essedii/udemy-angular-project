import { IUser } from '../interfaces/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styles: ['']
})
export class UserComponent implements OnInit {

  @Input('user-data')user: IUser;
  @Output('onDeleteUser')userDeleted = new EventEmitter();
  @Output('onSelectUser')userSelected = new EventEmitter();

  faPen = faPencil;
  faTrash = faTrash;
  constructor() {
  }

  ngOnInit(): void {}

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    this.userSelected.emit(this.user);
  }
}
