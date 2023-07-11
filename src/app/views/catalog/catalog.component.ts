import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BikeCardGroupComponent } from 'src/app/components/bike-card-group/bike-card-group.component';
import { CompanyCardGroupComponent } from 'src/app/components/company-card-group/company-card-group.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule, BikeCardGroupComponent, CompanyCardGroupComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  title:string = "Catálogo";
  showlast: boolean = false;

}
