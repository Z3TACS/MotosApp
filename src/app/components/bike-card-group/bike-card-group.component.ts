import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AxiosAPIService } from 'src/app/axios-api.service';
import { BikeData } from 'src/app/models/bike-card.model';
import { BikeCardComponent } from '../bike-card/bike-card.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-bike-card-group',
    templateUrl: './bike-card-group.component.html',
    styleUrls: ['./bike-card-group.component.css'],
    standalone: true,
    imports: [NgIf, NgFor, BikeCardComponent]
})
export class BikeCardGroupComponent implements OnInit{

  api: AxiosAPIService

  bikesData: Array<BikeData>;
  isLoading: boolean = true;
  requestError: boolean = false;

  @Input() title: string;
  @Input() showlast: boolean;

  constructor(api: AxiosAPIService){
    this.api = api;
  } 

  ngOnInit(): void {
    this.getBikeInfo(this.api);
  }

  getBikeInfo(api: AxiosAPIService){
    let vm = this;

    if(this.showlast){
      this.getBikes("/bikesLast", api);
      return
    }

    this.getBikes("/bikes", api);

  
  }

  getBikes(url:string, api: AxiosAPIService){
    let vm = this;
    api.axiosInstance.get(url)
    .then(function(response){
      console.log(response);
      vm.bikesData = response.data;
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
