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

}
