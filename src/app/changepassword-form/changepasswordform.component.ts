import { PasswordValidators } from './password.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'changepassword-form',
  templateUrl: './changepasswordform.component.html',
  styleUrls: ['./changepasswordform.component.css']
})
export class ChangepasswordformComponent  {
  form : FormGroup;

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      oldPassword: ['', 
        Validators.required, 
        PasswordValidators.validOldPassword
      ],
      newPassword:  ['', Validators.required],
      confirmPassword:  ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    })
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

}
