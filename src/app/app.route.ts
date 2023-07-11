
import { Routes } from "@angular/router";

import { BikeCardGroupComponent } from "./components/bike-card-group/bike-card-group.component";
import { HomeComponent } from "./views/home/home.component";
import { HomeScreenComponent } from "./components/home-screen/home-screen.component";

export const APP_ROUTE: Routes = [

    {path: "", component: HomeComponent},
    {path: "home", redirectTo:"", pathMatch:"full"},
    {path:"catalog", loadChildren: () => import('./views/catalog/catalog.routes').then((x) => x.CATALOG_ROUTES)},
    {path: "news",  component: HomeScreenComponent},


];