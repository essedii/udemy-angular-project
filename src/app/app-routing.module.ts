import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  {
    path: 'users',
    pathMatch: 'full',
    component: UsersComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users/new',
    component: UserDetailComponent
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent
  },
  {
    path: 'users/:id',
    component: UserDataComponent
  },
  {
    path: 'users/new',
    component: UserDataComponent
  },
];

@NgModule({
  declarations: [UsersComponent, UserComponent, UserDetailComponent],
  imports: [RouterModule.forRoot(routes),CommonModule,
    FormsModule,
    FontAwesomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
