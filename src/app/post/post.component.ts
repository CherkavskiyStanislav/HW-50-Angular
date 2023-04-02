import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() name = '';
  @Input() status = '';
  @Input() avatar = '';
  @Input() index = 0;

  removeUser(){
    this.name = '';
    this.status = '';
    this.avatar = '';
  }
  @Output() delete = new EventEmitter<number>();
  deleteUser(){
    this.delete.emit(this.index);
  }
}

