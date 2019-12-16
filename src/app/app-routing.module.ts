import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainHeaderLayoutComponent} from "./shared/component/main-header-layout/main-header-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {FashionPageComponent} from "./fashion-page/fashion-page.component";
import {MoviePageComponent} from "./movie-page/movie-page.component";
import {SweetsPageComponent} from "./sweets-page/sweets-page.component";
import {ToysPageComponent} from "./toys-page/toys-page.component";


const routes: Routes = [
  {
    path:'', component:MainHeaderLayoutComponent, children:[
      {path:'', redirectTo:'/', pathMatch:'full'},
      {path:'', component: HomePageComponent},
      {path:'fashion/:id', component: FashionPageComponent},
      {path:'movie/:id', component: MoviePageComponent},
      {path:'sweets/:id', component: SweetsPageComponent},
      {path:'toys/:id', component:ToysPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
