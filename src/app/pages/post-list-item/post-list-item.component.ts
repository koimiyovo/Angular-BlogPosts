import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: Date;
  @Input() postLoveIts: number;
  @Input() singlePost: Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onLoveIt(post: Post) {
    this.postLoveIts++;
    this.postService.updateLoveItPost(post, this.postLoveIts);
  }

  onDontLoveIt(post: Post) {
    this.postLoveIts--;
    this.postService.updateLoveItPost(post, this.postLoveIts);
  }

  onRemovePost(post: Post) {
    this.postService.removePost(post);
    this.postService.emitPosts();
  }

}
