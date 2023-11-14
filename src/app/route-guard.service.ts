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


export const activateUserFn: CanActivateFn = function (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  return true
}
