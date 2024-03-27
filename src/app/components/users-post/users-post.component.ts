import {Component, Input} from '@angular/core';
import {IPost} from "../../interfaces/post.interface";


@Component({
  selector: 'app-users-post',
  standalone: true,
  imports: [],
  templateUrl: './users-post.component.html',
  styleUrl: './users-post.component.css'
})
export class UsersPostComponent {
@Input()
  userPost:IPost
}
