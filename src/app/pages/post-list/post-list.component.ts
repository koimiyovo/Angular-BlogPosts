import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from 'src/app/services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input() blogPosts;
  postsSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postsSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.blogPosts = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
