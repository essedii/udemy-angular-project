import { IUser } from './../interfaces/user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styles:  ['']
})

export class UsersComponent implements OnInit {
    title = 'Users';
    public users: IUser[] = [];
    @Output()updateUser = new EventEmitter<IUser>;
    constructor(
        private service: UserService
    ) {}

    ngOnInit(): void {
        this.users = this.service.getUsers();
    }

    onDeleteUser(user: IUser) {
        this.service.deleteUser(user)
    }

    onSelectUser(user: IUser) {
        const userCopy = Object.assign({}, user)
        this.updateUser.emit(userCopy)
    }
}