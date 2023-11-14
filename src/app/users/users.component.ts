import { IUser } from './../interfaces/user';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { UserService, UsersResponse } from '../services/user.service';
import { Observable } from 'rxjs';
import { UserComponent } from '../user/user.component';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styles:  ['']
})

export class UsersComponent implements OnInit, AfterViewInit {
    title = 'Users';
    public users$: Observable<UsersResponse> = this.service.getUsers()
    @Output()updateUser = new EventEmitter<IUser>;
    
    // @ViewChildren(UserComponent) trs:QueryList<UserComponent>;
    @ViewChildren(UserComponent, {read: ElementRef}) trs:QueryList<ElementRef>;

    constructor(
        private service: UserService
    ) {}

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        console.log('after view init', this.trs);
        this.trs.forEach(ele => console.log(ele));
    }

    onDeleteUser(user: IUser) {
        this.service.deleteUser(user).subscribe( res => {
            this.trs.forEach(ele => {
                const el = ele.nativeElement;
                if (Number(el.id) === user.id) {
                    el.parentNode.removeChild(el);
                }
            })
        });

    }

    onSelectUser(user: IUser) {
        const userCopy = Object.assign({}, user)
        this.updateUser.emit(userCopy)
    }
}