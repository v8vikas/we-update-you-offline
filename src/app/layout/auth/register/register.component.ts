import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Log } from 'ng2-logger';
import { AuthService } from '../auth.service';
import { CountryListService } from '../../../services/country-list.service';
import { Country } from '../../../models/country';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  log = Log.create('register.component');
  countries: Country[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    // private countryListService: CountryListService
  ) {

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  register(): void {
    console.log('----------this.registerForm.value---', this.registerForm.value)
    if (this.registerForm.valid) {
      // call api for register.
      this.authService.register(this.registerForm.value).subscribe((response) => {
        this.log.d('response', response)
      })
    }
  }
}
