import {Injectable} from '@angular/core';
import {API_HOME} from '../../api.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserService {

  // Setting headers for this service endpoints
  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  protected options = {headers: this.httpHeaders};

  constructor(private httpClient: HttpClient) {
  }

  public loginUser(loginData) {
    return this.httpClient.post(API_HOME + '/login', loginData , this.options);
  }

  public registerUser(registerData) {
    return this.httpClient.post(API_HOME + '/register', registerData, this.options);
  }
}
