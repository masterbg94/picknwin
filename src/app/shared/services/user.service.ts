import {Injectable} from '@angular/core';
import {API_HOME} from '../../api.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Register, UpdateUser} from '../models/user';

@Injectable({providedIn: 'root'})
export class UserService {

  // Setting headers for this service endpoints
  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  protected options = {headers: this.httpHeaders};

  constructor(private httpClient: HttpClient) {
  }

  public loginUser(loginData) {
    return this.httpClient.post(API_HOME + '/login', loginData, this.options);
  }

  public registerUser(registerData): Observable<Register> {
    return this.httpClient.post<Register>(API_HOME + '/register', registerData, this.options);
  }

  public updateUser(userUpdateData): Observable<UpdateUser> {
    return this.httpClient.post<UpdateUser>(API_HOME + '/update-user', userUpdateData);
  }

  /**
   * SET USER DATA TO LOCAL STORAGE AFTER SUCCESSFUL LOGIN TO HANDLE IN MENU AND PROFILE SETTINGS
   */
  /*  public setLoggedUserToLS(loginData): void {
      this.httpClient.get(API_HOME + '/register', this.options)
        .pipe(take(1))
        .subscribe(
          (response: AllUsers) => {
            const userForLocalStorage = response.data.find((x) => x.username === JSON.parse(loginData).username);
            console.log('userForLocalStorage SUCCESS:', userForLocalStorage);
            localStorage.setItem('loggedUserData', JSON.stringify(userForLocalStorage));
          }, error => console.log('userForLocalStorage ERROR:', error)
        );
    }*/
}
