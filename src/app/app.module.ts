import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainLayoutComponent } from './shared/component/main-layout/main-layout.component';
import { MainHeaderLayoutComponent } from './shared/component/main-header-layout/main-header-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FashionPageComponent } from './fashion-page/fashion-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { ToysPageComponent } from './toys-page/toys-page.component';
import { SweetsPageComponent } from './sweets-page/sweets-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainLayoutComponent,
    MainHeaderLayoutComponent,
    HomePageComponent,
    FashionPageComponent,
    MoviePageComponent,
    ToysPageComponent,
    SweetsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
