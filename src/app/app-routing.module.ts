import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { SplashComponent } from './layout/auth/splash/splash.component';
import { LoginComponent } from './layout/auth/login/login.component';
import { StartComponent } from './layout/feed/start/start.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { NotificationComponent } from './layout/settings/notification/notification.component';
import { RegisterComponent } from './layout/auth/register/register.component';


export const routes: Routes = [
  { path: '', component: SplashComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'feed/start', component: StartComponent, pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
  { path: 'settings/notification', component: NotificationComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
