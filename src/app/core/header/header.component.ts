import { AuthService } from './../../auth/auth.service';
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
  email = null;
  constructor(
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.email = localStorage.getItem('email');
  }
  newList() {
    this.bsModalRef = this.modalService.show(ListEditComponent);
  }

  logout() {
    this.authService.logout();
  }

}
