import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  forgotPasswordForm;
  loginError;

  toggleForgotPassword() {
    this.forgotPasswordForm = !this.forgotPasswordForm;
  }

  submitLogin(){
  // TODO: When the login result is obtained, display if there is an error
    this.loginError = 'Username or password is incorrect';
  }

  submitForgotPassword(){
    console.log('forgoten password');
  }
}
