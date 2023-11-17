import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ILoginResponse } from '../interfaces/loginResponse';
import { User } from '../classes/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private auth: AuthService, private router: Router) {

  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  login() {
    console.log('LOGIN:', this.loginForm.value)
    const {email, password} = this.loginForm.value;
    this.auth.login(email, password).subscribe((data: User) => {
      if(data) {
        this.router.navigate(['/users'])
      } else {
        return
      }
    })  
  }

}
