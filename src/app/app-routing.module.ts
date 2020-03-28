import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {CreatePageComponent} from "./create-page/create-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";



const routes: Routes = [
      {path:'', component: HomePageComponent},
      {path:'create', component: CreatePageComponent},
      {path:'about', component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
