import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AxiosAPIService } from '../../axios-api.service';
import { CompanyData } from 'src/app/models/company-card.model';
import { CompanyCardComponent } from '../company-card/company-card.component';

@Component({
  selector: 'app-company-card-group',
  standalone: true,
  imports: [CommonModule, CompanyCardComponent],
  templateUrl: './company-card-group.component.html',
  styleUrls: ['./company-card-group.component.css']
})
export class CompanyCardGroupComponent implements OnInit{

  api:AxiosAPIService;
  requestError:boolean = false;
  isLoading:boolean = true;


  @Input() title:string;
  companiesData: Array<CompanyData>;

  constructor(api: AxiosAPIService){
    this.api = api;
  }

  ngOnInit():void{
    this.getCompaniesInfo(this.api);
  }

  getCompaniesInfo(api: AxiosAPIService){
    let vm = this;
    this.getCompanies("/companies", api);
  }

  getCompanies(url: string, api){
    let vm = this;
    api.axiosInstance.get(url)
    .then(function(response){
      console.log(response);
      vm.companiesData = response.data;
      vm.requestError = false;
    })
    .catch(function(error){
      console.log(error)
      vm.requestError = true;
    })
    .finally(function(){
      vm.isLoading = false;
    });
  }


}
