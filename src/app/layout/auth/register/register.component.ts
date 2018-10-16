import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Log } from 'ng2-logger';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  loginForm: FormGroup;
  log = Log.create('login.component');

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      cPassword: ['', Validators.required],
      cc: ['', Validators.required]
    })
  }

  login(): void {
    if (this.loginForm.valid) {
      // call api for login.
      this.authService.login(this.loginForm.value).subscribe((response) => {
        this.log.d('response', response)
      })
    }
  }
}
