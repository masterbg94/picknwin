import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../shared/services/auth.service';
import {FormValidationService} from '../../../shared/services/form-validation.service';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showResetPassword;
  loginError;
  loginForm: FormGroup;
  resetPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    // public formService: FormValidationService,
    // private userService: UserService
  ) {
    this.initForm();
    this.initResetPassword();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  initResetPassword() {
    this.resetPasswordForm = this.formBuilder.group({
      resetPasswordEmail: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  toggleForgotPassword() {
    this.showResetPassword = !this.showResetPassword;
  }
  submitLogin() {
    const loginData = JSON.stringify(this.loginForm.getRawValue());
    this.authService.authUser(loginData);
  }
  /*submitLogin() {
    /!*New test*!/
    const loginData = JSON.stringify(this.loginForm.getRawValue());
    this.userService.loginUser(loginData).subscribe(
      (response: any) => {
        console.log('response', response);
        // alert(response.message);
        if (response.status == 404) {
          alert(`Error ${response.message}`);
        } else if (response.status == 401) {
          alert(`Error ${response.message}`);
        } else if (response.status == 200) {
          alert(`successfully created: ${response.message}`);
          // this.authService.authenticate(this.loginForm.get('username').value,this.loginForm.get('password').value)
          const auth = {
            username: this.loginForm.get('username').value,
            password: this.loginForm.get('password').value
          };
          localStorage.setItem('auth', JSON.stringify(auth));
        }
      }, (error: any) => {
        console.log('error');
        console.log(error);
      }
    );
    /!*end New test*!/
    /!*
    const username = this.loginForm.get('username').value;
     const password = this.loginForm.get('password').value;
     console.log(this.authService.authenticate(username, password));
     // TODO: When the login result is obtained, display if there is an error
     if (!this.authService.authenticate(username, password)) {
       this.loginError = 'Username or password is incorrect';
     }
     *!/
  }*/

  submitForgotPassword() {
    alert(`Email sent to: ${this.resetPasswordForm.get('resetPasswordEmail').value}`);
  }

  /* Form validation */
  // manageInputValidation(formElement: any) {
  //   return this.formService.manageInputValidation(formElement);
  // }

}
