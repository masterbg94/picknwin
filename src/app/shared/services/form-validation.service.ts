import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class FormValidationService {
  public manageInputValidation(formElement: any) {
    if (formElement.touched && formElement.valid) {
      return 'touched-valid';
    }
    if (formElement.touched && formElement.invalid) {
      return 'touched-invalid';
    }
    if (formElement.pristine && formElement.valid) {
      return 'untouched-valid';
    }
    if (formElement.pristine && formElement.invalid) {
      return 'untouched-invalid';
    }
  }
}
