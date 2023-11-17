import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private service: UserService, 
    private route: ActivatedRoute,
    private router: Router) {
   
  }

  ngOnInit(): void{
    if(!this.user) { 
      this.user = new User();
    }
    this.route.paramMap.subscribe( (param)=> {  
      const id = Number(param.get('id'));
      if (id) {
        this.service.getUser(id).subscribe( user => this.user = user.data)
      };
    })
  }

  saveUser() {
    let obs;
    if (this.user.id > 0) {
      obs = this.service.updateUser(this.user);
    } else {
      obs = this.service.createUser(this.user);
    }
    obs.subscribe(data => {
      this.router.navigate(['users']);
    })
  }

  resetForm(){
    console.log(this.user.id)
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }
}
