import { Component } from '@angular/core';
import { MenuNavbarComponent } from '../menu-navbar/menu-navbar.component';

@Component({
    selector: 'app-home-screen',
    templateUrl: './home-screen.component.html',
    styleUrls: ['./home-screen.component.css'],
    standalone: true,
    imports: [MenuNavbarComponent]
})
export class HomeScreenComponent {

}
