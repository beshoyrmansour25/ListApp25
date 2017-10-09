import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { List } from './../list.model';
import { ListService } from './../list.service';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-list-edit',
  moduleId: module.id,
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css'],

})
export class ListEditComponent implements OnInit {
  id: number = null;
  list: List;
  listTitle = '';
  listDescription = '';
  listTasks = new FormArray([]);
  listForm: FormGroup;
  constructor
    (private bsModalRef: BsModalRef,
    private listService: ListService,
  ) { }


  ngOnInit() {
    this.id = this.listService.id;
    if (this.id != null) {
      this.list = this.listService.getList(this.id);
      this.listTitle = this.list.title;
      this.listDescription = this.list.description;
      // tslint:disable-next-line:prefer-const
      for ( let task of this.list.tasks){
        this.listTasks.push(new FormGroup({'task': new FormControl(task) }));
        // this.listTasks.push(new FormControl(task));
      }
    }
    this.initForm();
    console.log(this.listForm.value);
    console.log(this.listTasks.value);
  }
  private initForm() {
    this.listForm = new FormGroup({
      'title': new FormControl(this.listTitle),
      'discription': new FormControl(this.listDescription),
      'tasks': this.listTasks
    } );
  }
  save() {
    this.listService.updateList(this.id, this.list);
    this.hide();
    console.log(this.listForm.value);
  }
  delete() {

  }
  addTask() {
    (<FormArray>this.listForm.get('tasks')).push(
      new FormControl()
    );
  }
  hide() {
    this.bsModalRef.hide();
    this.id = null;
    this.listService.id = null;
  }

}
