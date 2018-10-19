import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UICarouselModule } from 'ui-carousel';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpService } from './services/http.service';
import { CountryListService } from './services/country-list.service';
import { CommonService } from './services/common.service';
import { UnAuthGuard } from './guards/un-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { StorageService } from './services/storage/storage.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UICarouselModule
  ],
  providers: [
    HttpService,
    CountryListService,
    CommonService,
    StorageService,


    AuthGuard,
    UnAuthGuard
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
