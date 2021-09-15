import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      // role: ['user'],
      // points: [''],
      // all_time_points: [''],
      // avatar_id: [''],
      // steam_link: ['']
    });
  }

  submitRegister() {
    const regData = JSON.stringify(this.registerForm.getRawValue());
    console.log(regData);
    this.userService.registerUser(regData).subscribe(
      (response: any) => {
        console.log('response', response);
        if (response.status === 201) {
          alert('successfully created accounts');
          this.registerForm.reset();
          // this.router.navigate(['/']);
        }
      }, error => {
        console.log('error', error);
        alert(error);
      }
    );
  }
}
