import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainHeaderLayoutComponent} from "./shared/component/main-header-layout/main-header-layout.component";


const routes: Routes = [
  {
    path:'', component:MainHeaderLayoutComponent, children:[

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
