import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {


  @Input()
  todo!: Todo;
  @Input()i!:number;

  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckbox:EventEmitter<Todo>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todo){
      this.todoDelete.emit(todo);
  }

  onCheckboxClick(todo:Todo){
    this.todoCheckbox.emit(todo);
}

}
