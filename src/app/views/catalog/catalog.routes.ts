import { Routes } from "@angular/router";
import { BikeCardGroupComponent } from "src/app/components/bike-card-group/bike-card-group.component";
import { CatalogComponent } from "./catalog.component";



export const CATALOG_ROUTES: Routes = [

    {path: "bikes", component: BikeCardGroupComponent},
    {path:"", component:BikeCardGroupComponent},
    {path:"brands", component: CatalogComponent}


];