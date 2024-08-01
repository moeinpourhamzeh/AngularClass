import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../_models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  apiLink: string = 'https://todoapi.farinkavoshan.ir/api/Todo/'

  constructor(private http: HttpClient) { }

  public getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiLink + 'list')
  }

  public add(todoForSave: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiLink + 'Add', todoForSave)
  }

  public delete(id: number | null | undefined): Observable<number> {
    return this.http.get<number>(this.apiLink + 'remove/' + id)
  }

  public edit(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiLink + 'update', todo)
  }
}
