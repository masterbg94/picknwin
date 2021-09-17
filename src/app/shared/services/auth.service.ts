import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {API_HOME} from '../../api.config';
import {UserService} from './user.service';
import {take} from 'rxjs/operators';
import {AllUsers} from '../models/user';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public isUserLogged: EventEmitter<any> = new EventEmitter<any>();

  // Setting headers for this service endpoints
  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  protected options = {headers: this.httpHeaders};

  // Is user logged to show or hide small login component

  constructor(
    private http: HttpClient, private router: Router,
    private userService: UserService
  ) {
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

  public authUser(loginData) {
    /** Backend get status 200 */
    return this.http.post(API_HOME + '/login', loginData, this.options).subscribe(
      (response: any) => {
        console.log('1', response);

        if (response.status === 200) {
          const auth2 = loginData;
          localStorage.setItem('auth', JSON.stringify(response.data));
          /** Ne mora nijedan redirekt , nek ostane na istoj strani */
          // this.router.navigate(['/matches']);
          this.setLoggedUserToLS(loginData);
          this.currentUserSubject.next(auth2);
          // If user is logged then remove login components
          // this.isUserLogged.emit(true);
          alert(`Backend say its OK: ${response.status}`);
          // this.userService.setLoggedUserToLS(loginData);


        } else {
          alert(`Backend ok but error: ${response.status} with message ${response.message}`);
        }
      }, (error: any) => {
        console.log('2', error);
        alert(`AUTH.SERVICE: backend error ${error.status}`);
        // return false;
      }
    );
  }

  public setLoggedUserToLS(loginData): void {
    this.http.get(API_HOME + '/register', this.options)
      .pipe(take(1))
      .subscribe(
        (response: any) => {
          const userForLocalStorage = response.data.find((x) => x.username === JSON.parse(loginData).username);
          console.log('setLoggedUserToLS SUCCESS:', userForLocalStorage);
          localStorage.setItem('loggedUserData', JSON.stringify(userForLocalStorage));
          // Emit value to get localstorage in main-toolbar-dropdown
          this.isUserLogged.emit(true);
        }, (error: any) => console.log('setLoggedUserToLS ERROR:', error)
      );
  }

  public logout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('loggedUserData');
    this.currentUserSubject.next(null);
    // Logged out user , show login components
    this.isUserLogged.emit(null);
    this.router.navigate(['/']);
  }
}
