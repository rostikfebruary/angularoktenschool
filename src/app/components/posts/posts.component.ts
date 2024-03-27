import {Component, OnInit} from '@angular/core';
import {PostComponent} from "../post/post.component";
import {IPost} from "../../interfaces/post.interface";
import {PostService} from "../../services/post.service";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostComponent,
    NgFor
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: IPost[]

  constructor(private postServices: PostService) {
  }

  ngOnInit() {
    this.postServices.getAll().subscribe(value => this.posts = value)
  }

}
