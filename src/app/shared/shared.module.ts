import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {QuillModule} from "ngx-quill";
import { AlertComponent } from './component/alert/alert.component';
import {CommonModule} from "@angular/common";
import { PostComponent } from './component/post/post.component';

@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot(),
    CommonModule
  ],
  exports: [
    HttpClientModule,
    QuillModule,
    AlertComponent
  ],
  declarations: [AlertComponent, PostComponent]
})

export class SharedModule {

}
