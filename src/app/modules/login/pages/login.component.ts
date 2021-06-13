import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  forgotPasswordForm;
  loginError;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService) {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  toggleForgotPassword() {
    this.forgotPasswordForm = !this.forgotPasswordForm;
  }

  submitLogin() {
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    console.log(this.authService.authenticate(username, password));
    // TODO: When the login result is obtained, display if there is an error
    if (!this.authService.authenticate(username, password)) {
      this.loginError = 'Username or password is incorrect';
    }
  }

  submitForgotPassword() {
    console.log('forgotten password');
  }

}
