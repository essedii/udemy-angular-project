import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { IUser } from '../interfaces/user';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  public user: IUser | undefined;

  constructor(private route: ActivatedRoute, private service: UserService) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( (param)=> {
      const id = Number(param.get('id'));
      const user = this.service.getUser(id)
      return this.user = user;
    })
  }
}
