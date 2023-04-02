import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: any[] = [];
  user = {
    name: "",
    status: "",
    avatar: "",
  }
  addUser(newUser: any){
    const newUserObj = {
      name: newUser.name,
      status: newUser.status,
      avatar: newUser.avatar,
    };
    this.users.push(newUserObj);
  }
  deleteUser(index: number){
    this.users.splice(index, 1);
  }
}
