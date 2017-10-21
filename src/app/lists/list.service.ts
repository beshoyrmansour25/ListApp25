import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


import { List } from './list.model';

@Injectable()
export class ListService {
  listChanged = new Subject<List[]>();
  public id: number;
  private lists: List[] = [];

  constructor(
    private authService: AuthService
  ) { }
  setList(lists: List[]) {
    this.lists = lists;
    this.listChanged.next(this.lists.slice());
  }
  getLists() {
    return this.lists.slice();
  }

  getList(index: number) {
    this.id = index;
    return this.lists[index];
  }

  addList(list: List) {
    this.lists.push(list);
    this.listChanged.next(this.lists.slice());
  }

  updateList(index: number, list: List) {
    this.lists[index] = list;
    this.listChanged.next(this.lists.slice());
  }

  deleteList(index: number) {
    this.lists.splice(index, 1);
    this.listChanged.next(this.lists.slice());
  }

}
