import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  email = null;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.email = localStorage.getItem('email');
  }

}
