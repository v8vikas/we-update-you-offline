import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    SplashComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    SplashComponent,    
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthService
  ],
})

export class AuthModule { }
