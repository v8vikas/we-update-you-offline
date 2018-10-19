import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../services/storage/storage.service';
import { AuthService } from '../layout/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ){
    // init auth guard.
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;

    // // const redirectTo = this.route.snapshot.queryParams.redirectTo;
    // console.log('route--', this.route);
    // console.log('router--', this.router.url);
    // if(this.auth.isLoggedIn) {
    //   return false;
    // } else {
    //   this.router.navigate(['login', {queryParams: {redirectTo : this.router.url}}])
    // }
  }
}
