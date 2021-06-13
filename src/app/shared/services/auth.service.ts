import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AbstractControl} from '@angular/forms';


@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {
  }

  public authenticate(username: any, password: any): boolean {

    if (username === 'mmaster' && password === 'nemanja') {
      const auth = {
        username: username,
        pass: new Date(),
      };
      localStorage.setItem('auth', JSON.stringify(auth));
      this.router.navigate(['/matches']);
      return true;
    }

    return false;
  }
}
