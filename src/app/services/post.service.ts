import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
    new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
    new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
    new Post('Un autre post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
  ];
  postSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postSubject.next(this.posts.slice());
  }

  getPosts() {
    return this.posts;
  }

  createPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(post: Post) {
    const postToRemove = this.posts.findIndex(
      (postEl) => {
        if (post === postEl) {
          return true;
        }
      }
    );
    this.posts.splice(postToRemove, 1);
    this.emitPosts();
  }

  updateLoveItPost(post: Post, nbLoveIts: number) {
    const postToUpdate = this.posts.findIndex(
      (postEl) => {
        if (post === postEl) {
          return true;
        }
      }
    );
    this.posts[postToUpdate].loveIts = nbLoveIts;
    this.emitPosts();
  }
}
