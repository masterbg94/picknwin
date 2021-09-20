import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SingleRegistratedUser} from '../../../../shared/models/user';
import {UserService} from '../../../../shared/services/user.service';

@Component({
  selector: 'app-profile-settings-component',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  loggedUserLocalStorage: SingleRegistratedUser;
  settingsForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.initSettingsForm();
  }

  initSettingsForm() {
    this.settingsForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      steam_link: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loggedUserLocalStorage = JSON.parse(localStorage.getItem('loggedUserData'));
    console.log('loggedUserLocalStorage', this.loggedUserLocalStorage);
    this.settingsForm.patchValue(this.loggedUserLocalStorage);
    // subscribe to changes to track is allow toi save
    this.settingsForm.valueChanges.subscribe(
      value => {
        console.log('promenjena forma', value);
      }
    );
  }

  updateUserInfo() {
    const updateUserData = this.settingsForm.getRawValue();
    console.log('updateUserData', updateUserData);
    this.userService.updateUser(updateUserData).subscribe(
      (res: any) => {
        console.log('update res', res);
        // TODO: Update local storage user data
      }, (err: any) => {
        console.log('update error', err);
      }
    );
  }
}
