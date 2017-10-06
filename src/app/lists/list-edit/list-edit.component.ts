import { NgForm } from '@angular/forms';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { List } from './../list.model';
import { ListService } from './../list.service';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-list-edit',
  moduleId: module.id,
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css'],

})
export class ListEditComponent implements OnInit {
  id:number;
  list: List;
  
  constructor
  (private bsModalRef:BsModalRef,
    private listService:ListService,
  ) { }

  
  ngOnInit() {
    this.id = this.listService.id;
    this.list=this.listService.getList(this.id);
    console.log(this.listService.id);
    console.log(this.listService.getList(this.id));
  }
  save(){
    
    this.listService.updateList(this.id,this.list);
    this.hide();
  }
  delete(){

  }
  onSubmit(form: NgForm){
    const value = form.value;
    console.log(value);
    
  }
  hide(){
    this.bsModalRef.hide();
  }



}
