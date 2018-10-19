import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Log } from 'ng2-logger';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  log = Log.create('login.component');

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    })
  }

  login(): void {
    if (this.loginForm.valid) {
      // call api for login.
      this.authService.login(this.loginForm.value).subscribe((response) => {
        this.log.d('response', response);
      }, (error) =>{
        this.log.er('error', error);
      })
    }
  }
}
