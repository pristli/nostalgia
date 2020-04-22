import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {QuillModule} from "ngx-quill";
import { AlertComponent } from './component/alert/alert.component';
import {CommonModule} from "@angular/common";
import { PostComponent } from './component/post/post.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";





@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot(),
    CommonModule,
    RouterModule,
    FormsModule



  ],
  exports: [
    HttpClientModule,
    QuillModule,
    AlertComponent,
    PostComponent
  ],
  declarations: [AlertComponent, PostComponent]
})

export class SharedModule {

}
