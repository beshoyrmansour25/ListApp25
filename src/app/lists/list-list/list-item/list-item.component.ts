import { DataStorageService } from './../../../shared/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { List } from './../../list.model';
import { ListService } from './../../list.service';
import { Component, OnInit, Input, ViewChild, ViewContainerRef} from '@angular/core';
import { ListEditComponent } from '../../list-edit/list-edit.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Response } from '@angular/http';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() list: List;
  @Input() index: number;

  closeResult: string;

  constructor(
    private listService: ListService,
    private modalService: BsModalService,
    private viewContainerRef: ViewContainerRef,
    private router: Router,
    private bsModalRef: BsModalRef,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) { }

  onEdit(index: number) {
    this.listService.id = index;
    this.bsModalRef = this.modalService.show(ListEditComponent);
  }

  onNew() {
    this.listService.id = null;
    this.bsModalRef = this.modalService.show(ListEditComponent);
  }
  
  ngOnInit() {}
  
  onDelete(index: number) {
    this.listService.deleteList(index);
    this.dataStorageService.storeList();
    this.onSaveData();
  }
  onSaveData() {
    this.dataStorageService.storeList()
    }
}
