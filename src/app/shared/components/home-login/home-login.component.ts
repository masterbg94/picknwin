import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/auth.service';

@Component({
  selector: 'app-home-login-component',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss'],
})
export class HomeLoginComponent {
  homeLoginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService) {
    this.initForm();
  }

  initForm() {
    this.homeLoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    // const user = this.homeLoginForm.get('username').value;
    // const pass = this.homeLoginForm.get('password').value;
    // this.authService.authenticate(user, pass);
    const loginData = JSON.stringify(this.homeLoginForm.getRawValue());
    this.authService.authUser(loginData);
  }
}
