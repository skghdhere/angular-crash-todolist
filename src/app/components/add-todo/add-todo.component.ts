import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;
  constructor() { }

  ngOnInit(): void {
    this.title = '';
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false,
    }

    this.addTodo.emit(todo);

    this.title = "";
  }
  checkEmpty(): boolean {
    return this.title != '';
  }


}
