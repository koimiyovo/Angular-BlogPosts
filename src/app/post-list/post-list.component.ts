import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/models/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() blogPosts: Post[];

  constructor() { }

  ngOnInit(): void {
  }

}
