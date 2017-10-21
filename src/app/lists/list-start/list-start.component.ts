import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
@Component({
  selector: 'app-list-start',
  templateUrl: './list-start.component.html',
  styleUrls: ['./list-start.component.css']
})
export class ListStartComponent implements OnInit {

  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
  @ViewChild('childModal') public childModal: ModalDirective;

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }

  ngOnInit() {
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }



}
