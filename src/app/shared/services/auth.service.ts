import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public isUserLogged: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('auth'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public authenticate(username: any, password: any): boolean {

    /** Backend get status 200 */
    if (username === 'mmaster' && password === 'nemanja') {
      const auth = {
        username,
        pass: new Date(),
      };
      localStorage.setItem('auth', JSON.stringify(auth));
      /** Ne mora nijedan redirekt , nek ostane na istoj strani */
      // this.router.navigate(['/matches']);
      this.currentUserSubject.next(auth);
      // If user is logged then remove login components
      this.isUserLogged.emit(true);
      return true;
    }
    /** Backend get error */
    // this.currentUserSubject.next('Greska auth.service => currentUserSubject.error');
    // this.currentUserSubject.next(null);
    alert('Bad login');
    return false;
  }

  public logout() {
    localStorage.removeItem('auth');
    this.currentUserSubject.next(null);
    // Logged out user , show login components
    this.isUserLogged.emit(null);
  }
}
