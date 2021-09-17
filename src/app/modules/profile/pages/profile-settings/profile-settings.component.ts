import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SingleRegistratedUser} from '../../../../shared/models/user';

@Component({
  selector: 'app-profile-settings-component',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  loggedUserLocalStorage: SingleRegistratedUser;
  settingsForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
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
}
