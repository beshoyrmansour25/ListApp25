import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { List } from './../list.model';
import { ListService } from './../list.service';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Response } from '@angular/http';

@Component({
  selector: 'app-list-edit',
  moduleId: module.id,
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {
  id: number = null;
  list: List;
  listTitle = '';
  listDescription = '';
  listTasks = new FormArray([]);
  listForm: FormGroup;
  newTask = '';

  constructor
    (
    private bsModalRef: BsModalRef,
    private listService: ListService,
    private dataStorageService: DataStorageService,
    private fb: FormBuilder
    ) { }

  @ViewChild('myInput') input: ElementRef;

  ngOnInit() {
    this.id = this.listService.id;
    if (this.id != null) {
      this.list = this.listService.getList(this.id);
      this.listTitle = this.list.title;
      this.listDescription = this.list.description;
      for (let task of this.list.tasks) {
        this.listTasks.push(new FormGroup({ 'task': new FormControl(task) }));
      }
    }
    this.initForm();
  }

  private initForm() {

    this.listForm = this.fb.group({
      title: this.listTitle,
      discription: this.listDescription,
      newTask: this.newTask,
      tasks: this.listTasks
    })

    // this.listForm = new FormGroup({
    //   'title': new FormControl(this.listTitle),
    //   'discription': new FormControl(this.listDescription),
    //   'newTask': new FormControl(this.newTask),
    //   'tasks': this.listTasks
    // });
  }

  save() {
    const savedTask = [];
    for (var task of this.listForm.get('tasks').value) {
      savedTask.push(task['task']);
    }

    const newList = new List(
      this.listForm.value['title'],
      this.listForm.value['discription'],
      savedTask
    )
    if (this.id != null) {
      this.listService.updateList(this.id, newList);
    }
    else {
      this.listService.addList(newList);
    }
    this.onSaveData();
    this.hide();
  }

  delete() {
    this.listService.deleteList(this.id);
    this.onSaveData();
    this.hide();
  }

  addTask() {
    this.newTask = this.listForm.value['newTask'];

    (<FormArray>this.listForm.get('tasks')).push(
      new FormGroup({
        'task': new FormControl(this.newTask)
      }
      ));
    // this.listForm.patchValue({'newTask':null});
    // (<FormControl>this.listForm.controls['task']).patchValue({'newTask':null}); 

  }

  onDeleteTask(index: number) {
    (<FormArray>this.listForm.get('tasks')).removeAt(index);
  }

  hide() {
    this.bsModalRef.hide();
    this.id = null;
    this.listService.id = null;
  }

  onSaveData() {
    this.dataStorageService.storeList()
  }

}
