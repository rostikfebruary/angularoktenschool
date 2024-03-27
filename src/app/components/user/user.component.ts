import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";
import {IPost} from "../../interfaces/post.interface";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input()
  user:IUser;
  post:IPost





@Output()
catcher=new EventEmitter<IUser>()

@Output()
harder = new EventEmitter<IPost>()

getDetails():void{
  this.catcher.emit(this.user)
}

  getPost():void{
    this.harder.emit(this.post)
  }
}

