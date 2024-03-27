import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";
import {UserService} from "../../services/user.service";
import {UserComponent} from "../user/user.component";
import {NgFor, NgIf} from "@angular/common";
import {UserDetailsComponent} from "../user-details/user-details.component";
import {IPost} from "../../interfaces/post.interface";
import {UsersPostComponent} from "../users-post/users-post.component";


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgFor,
    UserDetailsComponent,
    NgIf,
    UsersPostComponent,

  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {
  users: IUser[]
  usersDetails: IUser
  userPost: IPost

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getUserDetails(user: IUser) {
    this.usersDetails = user
  }
}
