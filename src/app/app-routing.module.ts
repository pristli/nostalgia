import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {CreatePageComponent} from "./create-page/create-page.component";
import {MemoryPageComponent} from "./memory-page/memory-page.component";
import {PostPageComponent} from "./post-page/post-page.component";



const routes: Routes = [
      {path:'', component: HomePageComponent},
      {path:'create', component: CreatePageComponent},
      {path:'memory', component: MemoryPageComponent},
      {path: 'post/:id', component: PostPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
