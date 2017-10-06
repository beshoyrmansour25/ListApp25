import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { List } from './../../list.model';
import { ListService } from './../../list.service';
import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ListEditComponent } from '../../list-edit/list-edit.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

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
    private modalService: BsModalService,
    private listService:ListService,
    private router: Router,
    private viewContainerRef: ViewContainerRef,
    private route: ActivatedRoute,
    private bsModalRef: BsModalRef
  ) { }

  onEdit(index:number){
    //this.userService.dataTobeEdit = { userId: user.id, firstName: user.first_name, lastName: user.last_name };
    this.listService.id=index;
    this.bsModalRef = this.modalService.show(ListEditComponent);
    // console.log(index);
    // this.router.navigate([index],{relativeTo: this.route}); 
   }
  ngOnInit() {
  }
}
