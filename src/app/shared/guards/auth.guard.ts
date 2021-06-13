import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  /*  canActivateRoute(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.authService.authenticate()) {
        return true;
      } else {
        this.router.navigate(['login']);
        console.log('Niste ulgovani molimo ulogujte se');
        return false;
      }
    }*/

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isUserLogedIn = localStorage.getItem('auth');

    if (isUserLogedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
