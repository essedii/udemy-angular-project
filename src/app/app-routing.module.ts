import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserDataComponent } from './user-data/user-data.component';
// import { RouteGuardService } from './route-guard.service';
import { activateUserFn } from './route-guard.service';

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
    component: UserDetailComponent,
    // canActivate: [RouteGuardService]
    canActivate: [activateUserFn]
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
  exports: [RouterModule],
  // providers: [RouteGuardService]
})
export class AppRoutingModule { }
