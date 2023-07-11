import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BikeCardGroupComponent } from 'src/app/components/bike-card-group/bike-card-group.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, BikeCardGroupComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title:string = "LANZAMIENTOS DEL MES";
  showlast: boolean = true;

}
