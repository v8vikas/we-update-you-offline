import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { SplashComponent } from './layout/auth/splash/splash.component';
import { LoginComponent } from './layout/auth/login/login.component';
import { StartComponent } from './layout/feed/start/start.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { NotificationComponent } from './layout/settings/notification/notification.component';
import { RegisterComponent } from './layout/auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/un-auth.guard';
import { KeywordsAndSourcesComponent } from './layout/keywords-and-sources/keywords-and-sources.component';
import {
  AddKeywordsAndSourcesComponent
} from './layout/keywords-and-sources/add-keywords-and-sources/add-keywords-and-sources.component';


export const routes: Routes = [
  { path: '', component: SplashComponent, pathMatch: 'full', canActivate: [UnAuthGuard] },
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [UnAuthGuard] },
  { path: 'register', component: RegisterComponent, pathMatch: 'full', canActivate: [UnAuthGuard] },
  { path: 'feed/start', component: StartComponent, pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent, pathMatch: 'full' },
  { path: 'settings/notification', component: NotificationComponent, pathMatch: 'full' },
  { path: 'keywords-and-sources', component: KeywordsAndSourcesComponent, pathMatch: 'full' },
  { path: 'keywords-and-sources/add', component: AddKeywordsAndSourcesComponent, pathMatch: 'full' },
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
