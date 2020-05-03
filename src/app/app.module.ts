import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {CreatePageComponent} from "./create-page/create-page.component";

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertService} from './shared/alert.service';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SearchPipe} from "./search.pipe";
import { PostPageComponent } from './post-page/post-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MemoryPageComponent} from "./memory-page/memory-page.component";


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        CreatePageComponent,
        MemoryPageComponent,
        SearchPipe,
        PostPageComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule

  ],
    providers: [AlertService],
  exports: [
    CreatePageComponent,
    SearchPipe
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
