import { IUser } from '../interfaces/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { faPencil, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons';


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
  faInfo = faInfo;

  constructor(private route: Router) {
  }

  ngOnInit(): void {}

  deleteUser() {
    this.userDeleted.emit(this.user);
  }
}
