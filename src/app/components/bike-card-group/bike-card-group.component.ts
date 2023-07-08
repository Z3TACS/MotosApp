import { Component, Input } from '@angular/core';
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
export class BikeCardGroupComponent{

  bikesData: Array<BikeData>;
  
  isLoading: boolean = true;
  requestError: boolean = false;



  constructor(api: AxiosAPIService){
    this.getBikes(api);
  } 

  getBikes(api: AxiosAPIService){
    let vm = this;
  
    api.axiosInstance.get("/bikes")
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
