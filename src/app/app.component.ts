import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  config = {
    apiKey: 'AIzaSyA_4oIIYYxV_h-NqLxoeJNeV30SxiI2Sgw',
    authDomain: 'listapp25.firebaseapp.com',
    databaseURL: 'https://listapp25.firebaseio.com',
    projectId: 'listapp25',
    storageBucket: 'listapp25.appspot.com',
    messagingSenderId: '134240419821'
  };
  ngOnInit() {
    firebase.initializeApp(this.config);
    console.log('FireBase BackEnd is connected As : ' + this.config.projectId);

  }
}
