import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BikeCardComponent } from './components/bike-card/bike-card.component';
import { BikeCardGroupComponent } from './components/bike-card-group/bike-card-group.component';
import { MenuNavbarComponent } from './components/menu-navbar/menu-navbar.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeCardComponent,
    BikeCardGroupComponent,
    MenuNavbarComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
