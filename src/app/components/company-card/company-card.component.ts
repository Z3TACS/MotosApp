import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyData } from 'src/app/models/company-card.model';

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.css']
})
export class CompanyCardComponent {

  @Input() companydata: CompanyData;

  redirectToCompany(event){
    alert("Id de la compañia " + this.companydata.companyName);
  }

}
