import { Component, Input, OnInit} from '@angular/core';
import { AxiosAPIService } from 'src/app/axios-api.service';
import { Links } from 'src/app/models/menu-navbar.model';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-menu-navbar',
    templateUrl: './menu-navbar.component.html',
    styleUrls: ['./menu-navbar.component.css'],
    standalone: true,
    imports: [NgIf, NgFor]
})

export class MenuNavbarComponent {

  @Input() links: Array<Links>
  
  requestError: boolean = false;
  isLoading: boolean = true;

  constructor(api: AxiosAPIService){
    this.getLinks(api);
  }

  getLinks(api: AxiosAPIService){
    let vm = this;
  
    api.axiosInstance.get("/links")
      .then(function(response){
        console.log(response);
        vm.links = response.data;
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
