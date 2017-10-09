import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ListEditComponent } from './../../lists/list-edit/list-edit.component';
import { BsModalService } from 'ngx-bootstrap/modal';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
  ) { }

  ngOnInit() {
  }
  newList() {
    this.bsModalRef = this.modalService.show(ListEditComponent);
  }

}
