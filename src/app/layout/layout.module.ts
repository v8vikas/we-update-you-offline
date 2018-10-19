import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material/material.module';
import { FeedModule } from './feed/feed.module';
import { SettingsComponent } from './settings/settings.component';
import { NotificationComponent } from './settings/notification/notification.component';
import { KeywordsAndSourcesModule } from './keywords-and-sources/keywords-and-sources.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    RouterModule,
    MaterialModule,
    FeedModule,
    KeywordsAndSourcesModule
  ],
  declarations: [
    SettingsComponent,
    NotificationComponent
  ],
  exports: [
    KeywordsAndSourcesModule,


    SettingsComponent,
    NotificationComponent
  ]
})
export class LayoutModule { }
