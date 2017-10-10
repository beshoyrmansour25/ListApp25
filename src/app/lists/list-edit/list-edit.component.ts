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
  newTask='';
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

  }
  private initForm() {
    this.listForm = new FormGroup({
      'title': new FormControl(this.listTitle),
      'discription': new FormControl(this.listDescription),
      'newTask':new FormControl(this.newTask),      
      'tasks': this.listTasks
    } );
  }
  save() {
    const savedTask =[];
    for (var task of this.listForm.get('tasks').value) {
      savedTask.push(task['task'])
    }
    
    const newList = new List(
      this.listForm.value['title'],
      this.listForm.value['discription'],
      savedTask,

    )
    if (this.id != null) {
    this.listService.updateList(this.id, newList);}
    else{
      this.listService.addList(newList);}
    this.hide();
  }
  delete() {

  }
  addTask() {
    this.newTask = this.listForm.value['newTask'];
    (<FormArray>this.listForm.get('tasks')).push(
      new FormGroup({
        'task': new FormControl(this.newTask) 
    }));
  }
  hide() {
    this.bsModalRef.hide();
    this.id = null;
    this.listService.id = null;
  }

}
