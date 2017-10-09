import { List } from './../list.model';
import { ListService } from './../list.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.css']
})
export class ListListComponent implements OnInit {
  lists: List[];
  subscription: Subscription;

  constructor(
    private listService: ListService,
  ) { }

  ngOnInit() {
    this.subscription = this.listService.listChanged
      .subscribe(
      (lists: List[]) => {
        this.lists = lists;
      }
      );
    this.lists = this.listService.getLists();
  }

}
