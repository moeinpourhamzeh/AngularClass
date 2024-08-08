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

  submit() {
    this.addLoading = true

    if (this.todoForSave.id === null) {
      this.todoService.add(this.todoForSave).subscribe(x => {
        this.todos.push(x)
        this.addLoading = false
        this.todoForSave = new Todo()
      })
    } else {
      this.todoService.edit(this.todoForSave).subscribe(x => {
        const index = this.todos.findIndex(x => x.id === this.todoForSave.id)
        this.todos.splice(index, 1)
        this.todos.push(x)
        this.addLoading = false
        this.todoForSave = new Todo()
      })
    }


  }

  delete(id: number | null | undefined) {
    this.todoService.delete(id).subscribe(x => {
      const index = this.todos.findIndex(x => x.id === id)
      this.todos.splice(index, 1)
    })
  }

  selectTodo(todo: Todo) {
    this.todoForSave = todo
    console.log(todo)
  }
}
