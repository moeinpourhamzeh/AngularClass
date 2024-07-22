import { TodoListService } from './../../_services/todo-list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  constructor(private todoService: TodoListService) {
    this.todoService.getAllTodos().subscribe(todos => {
      console.log(todos)
    })
  }
}
