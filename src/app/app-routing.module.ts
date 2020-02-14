import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {FashionPageComponent} from "./fashion-page/fashion-page.component";
import {MoviePageComponent} from "./movie-page/movie-page.component";
import {SweetsPageComponent} from "./sweets-page/sweets-page.component";
import {ToysPageComponent} from "./toys-page/toys-page.component";
import {CreatePageComponent} from "./create-page/create-page.component";


const routes: Routes = [
      {path:'', component: HomePageComponent},
      {path:'fashion', component: FashionPageComponent},
      {path:'movie', component: MoviePageComponent},
      {path:'sweets', component: SweetsPageComponent},
      {path:'toys', component:ToysPageComponent},
      {path:'create', component: CreatePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
