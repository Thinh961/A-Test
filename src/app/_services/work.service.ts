import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  list: string[] = [];

  constructor() { }

  findAll(): any {
    if(localStorage.getItem('todoList') != null) {
      return JSON.parse(localStorage.getItem('todoList'));
    }
    return null;
  }

  add(title: string): void {
    if(localStorage.getItem('todoList') == null){
      this.list.push(title);
      localStorage.setItem('todoList', JSON.stringify(this.list));
    } else {
      let list: string[] = JSON.parse(localStorage.getItem('todoList'));
      list.push(title);
      localStorage.setItem('todoList', JSON.stringify(list));
    }
  }

  update(list: string[]): void {
    localStorage.setItem('todoList', JSON.stringify(list));
  }

  delete(index: number): void {
    let list: string[] = JSON.parse(localStorage.getItem('todoList'));
    list.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(list));
  }

}
