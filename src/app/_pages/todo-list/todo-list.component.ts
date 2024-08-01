import { Observable } from 'rxjs';
import { Todo } from '../../_models/todo.model';
import { TodoListService } from '../../_services/todo-list.service';
import { Component } from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todos: Todo[] = []
  todoForSave: Todo = new Todo()
  addLoading = false

  constructor(private todoService: TodoListService) {
    this.todoService.getAllTodos().subscribe(x => {
      this.todos = x
    })
  }

  save() {
    this.addLoading = true
    this.todoService.add(this.todoForSave).subscribe(x => {
      this.todos.push(x)
      this.addLoading = false
      this.todoForSave = new Todo()
    })
  }

  delete(id: number | null | undefined) {
    this.todoService.delete(id).subscribe(x => {
      const index = this.todos.findIndex(x => x.id === id)
      this.todos.splice(index, 1)
    })
  }
}
