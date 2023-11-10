import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy: IUser;
  private _user: IUser;
  @Input() set user(user: IUser) {
    this._user = user;
    this.userCopy = Object.assign({}, user)
  }
  
  get user() {
    return this._user;
  }

  constructor(private service: UserService) {
  }

  ngOnInit(): void{

  }

  saveUser() {
    if (this.user.id > 0) {
      this.service.updateUser(this.user)
    } else {
      this.service.createUser(this.user);
    }
  }

  resetForm(form: any){
    console.log(this.user.id)
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }
}
