import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { List } from './list.model';

@Injectable()
export class ListService {
  listChanged = new Subject<List[]>();
public id:number;
  private lists: List[] = [
    new List('First List',
    'this is just a dummy text to prove the concept',
    [
      'task 1',
      'task 2 is longer',
      'task 3 has another line',
      'task 1',
      'task 2 is longer',
      'task 3 has another line'
    ]),
    new List('second List',
    'this is just a dummy text to prove the concept',
    [
      'task 1',
      'task 2 is longer',
      'task 3 has another line',
      'this list has task 4 '
    ]),
    new List('First List',
    'this is just a dummy text to prove the concept',
    [
      'task 1',
      'task 2 is longer',
      'task 1',
      'task 2 is longer',
      'task 3 has another line'
    ]),
    new List('First List',
    'this is just a dummy text to prove the concept',
    [
      'task 1',
      'task 2 is longer',
      'task 3 has another line'
    ]),
    new List('second List',
    'this is just a dummy text to prove the concept',
    [
      'task 1',
      'task 2 is longer',
      'task 3 has another line',
      'this list has task 4 '
    ]),
    new List('First List',
    'this is just a dummy text to prove the concept',
    [
      'task 1',
      'task 2 is longer',
      'task 3 has another line'
    ]),
    new List('second List',
    'this is just a dummy text to prove the concept',
    [
      'task 1',
      'task 2 is longer',
      'task 3 has another line',
      'this list has task 4 '
    ]),
  ];
  constructor() { }
  
  setList(lists: List[]){
    this.lists= lists;
    this.listChanged.next(this.lists.slice());
  }
  
  getLists(){ return this.lists.slice(); }

  getList(index: number){ 
    this.id= index;
    return this.lists[index]; }

  addList(list: List){
    this.lists.push(list);
    this.listChanged.next(this.lists.slice());    
  }

  updateList(index:number, list: List){
    this.lists[index] = list;
    this.listChanged.next(this.lists.slice());    
  }

  deleteList(index: number){
    this.lists.splice(index,1);
      this.listChanged.next(this.lists.slice());
  }
}
