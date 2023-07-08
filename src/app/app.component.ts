import { Component } from '@angular/core';
import { BikeCardGroupComponent } from './components/bike-card-group/bike-card-group.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HomeScreenComponent, BikeCardGroupComponent]
})
export class AppComponent {
  title = 'MotosApp';
  

}
