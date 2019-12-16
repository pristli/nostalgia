import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FashionPageComponent } from './fashion-page/fashion-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { ToysPageComponent } from './toys-page/toys-page.component';
import { SweetsPageComponent } from './sweets-page/sweets-page.component';
import { MainLayoutComponent } from './shared/component/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FashionPageComponent,
    MoviePageComponent,
    ToysPageComponent,
    SweetsPageComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
