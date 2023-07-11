
import { importProvidersFrom } from '@angular/core';

import { provideRouter, PreloadAllModules, withPreloading } from "@angular/router"
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { APP_ROUTE } from './app/app.route';


bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserModule),
      provideRouter(APP_ROUTE, withPreloading(PreloadAllModules))
    ]
})
  .catch(err => console.error(err));
