import { Component } from '@angular/core';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { RouterModule } from '@angular/router';
import { BikeCardGroupComponent } from './components/bike-card-group/bike-card-group.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterModule, HomeScreenComponent]
})
export class AppComponent {
  title = 'MotosApp';
  

}
