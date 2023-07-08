import { Injectable } from '@angular/core';
import axios, { Axios, AxiosInstance, CreateAxiosDefaults } from 'axios';


@Injectable({
  providedIn: 'root'
})

export class AxiosAPIService {

  public axiosInstance: AxiosInstance;
  private axiosConfiguration: CreateAxiosDefaults;

  constructor() { 
    this.axiosConfiguration = this.getAxiosConfiguration();
    this.axiosInstance = axios.create(this.axiosConfiguration);
  }


  private getAxiosConfiguration():CreateAxiosDefaults{
    return {
      baseURL: "http://localhost:5000",
      headers:{
        post: {
          "Content-Type":"application/json"
        }
      }
    }
    
  }





}

