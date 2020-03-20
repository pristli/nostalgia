import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../shared/posts.service';
import {Post} from '../shared/interfaces';
import {Observable, Subscription} from 'rxjs';
@Component({
  selector: 'app-fashion-page',
  templateUrl: './fashion-page.component.html',
  styleUrls: ['./fashion-page.component.scss']
})
export class FashionPageComponent implements OnInit, OnDestroy {

  posts$: Observable<Post[]>

  posts: Post[]
  pSub: Subscription

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts
    })

    this.posts$ = this.postsService.getAll()
  }


  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

}

