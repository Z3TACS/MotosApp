import { Component, Input, OnInit } from '@angular/core';
import { Bike, BikeData, BikeDictionary, Company, CompanyDictionary, Engine } from 'src/app/models/bike-card.model';
import { AxiosAPIService } from '../../axios-api.service';
import { EngineDictionary, DimensionsDictionary, Chassis, Dimensions, ChassisDictionary } from '../../models/bike-card.model';
import { NgIf, NgFor } from '@angular/common';


@Component({
    selector: 'app-bike-card',
    templateUrl: './bike-card.component.html',
    styleUrls: ['./bike-card.component.css'],
    standalone: true,
    imports: [NgIf, NgFor]
})
export class BikeCardComponent implements OnInit{


@Input() bikeData: BikeData;

bike: Bike;
engine: Engine;
chassis: Chassis;
dimensions: Dimensions;
company: Company;

showMoreInfo:boolean = false;
showLessInfo:boolean = false;

moreInfoText:string = "";
lessInfoText:string = "";

BikeDictionary = BikeDictionary;
EngineDictionary = EngineDictionary;
DimensionsDictionary = DimensionsDictionary;
CompanyDictionary = CompanyDictionary;
ChassisDictionary = ChassisDictionary;

BikeKeys;
EngineKeys;
DimensionsKeys;
ChassisKeys;
CompanyKeys;


constructor(api: AxiosAPIService){
  
}

ngOnInit(){

  this.bike = this.bikeData.bike;
  this.engine = this.bikeData.engine;
  this.chassis = this.bikeData.chassis;
  this.dimensions = this.bikeData.dimensions;
  this.company = this.bikeData.company;

  this.BikeKeys = Object.keys(this.bike);
  this.EngineKeys = Object.keys(this.engine);
  this.ChassisKeys = Object.keys(this.chassis);
  this.CompanyKeys = Object.keys(this.company);
  this.DimensionsKeys = Object.keys(this.dimensions);
  
  
  const bikeDataDescriptionLength = this.bikeData.bike.description.length;
  const MAX_CHARACTERS = 320;


  if (bikeDataDescriptionLength > MAX_CHARACTERS){
    this.showMoreInfo = true;

    this.lessInfoText = this.bikeData.bike.description.substring(MAX_CHARACTERS, bikeDataDescriptionLength);
    this.moreInfoText = this.bikeData.bike.description.substring(0, MAX_CHARACTERS);

    this.bikeData.bike.description = this.moreInfoText;

  }

  console.log("input", this.bikeData);
}

onShowMoreInfo(event){
  if(event){
    this.bikeData.bike.description = this.moreInfoText + this.lessInfoText;
    this.showLessInfo = true;
    this.showMoreInfo = false;
  }

}

onShowLessInfo(event){
  if(event){
    this.bikeData.bike.description = this.moreInfoText;
    this.showLessInfo = false;
    this.showMoreInfo = true;
  }
}







}
