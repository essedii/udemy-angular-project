// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';



// @Injectable({
//   providedIn: 'root'
// })
// export class RouteGuardService implements CanActivate{

//   constructor(private router: Router) { }
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     this.router.navigate(['users'])
//     return true
//   }
// }

// CAN ACTIVATE FUNCTION

import { CanActivateFn } from "@angular/router";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";


export const activateUserFn: CanActivateFn = function (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const auth: AuthService = inject(AuthService);
  if (auth.isUserLogin()){
    return true;
  } else {
    const router = inject(Router);
    router.navigate(['login']);
    return false
  }
}
