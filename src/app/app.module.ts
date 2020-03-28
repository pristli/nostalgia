import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {CreatePageComponent} from "./create-page/create-page.component";

import {ReactiveFormsModule} from '@angular/forms';
import {AlertService} from './shared/alert.service';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { AboutPageComponent } from './about-page/about-page.component';




@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        CreatePageComponent,
        AboutPageComponent,


    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule,
        MatRadioModule
    ],
    providers: [AlertService],
    exports: [
        CreatePageComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
