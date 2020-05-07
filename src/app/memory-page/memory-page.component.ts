import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../shared/interfaces";
import {PostsService} from "../shared/posts.service";

@Component({
  selector: 'app-memory-page',
  templateUrl: './memory-page.component.html',
  styleUrls: ['./memory-page.component.scss']
})
export class MemoryPageComponent implements OnInit {
  posts$: Observable<Post[]>
  searchStr = ''
  constructor(private postsService: PostsService) { }

  ngOnInit(){
    this.posts$ = this.postsService.getAll()
  }

}
