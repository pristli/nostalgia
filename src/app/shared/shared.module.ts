import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {QuillModule} from "ngx-quill";
import { AlertComponent } from './component/alert/alert.component';

@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    QuillModule
  ],
  declarations: [AlertComponent]
})

export class SharedModule {

}
