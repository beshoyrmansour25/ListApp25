import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        this.signinUser(email, password);
      })
      .catch(
      error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
      response => {
        this.router.navigate(['/lists']);
        firebase.auth().currentUser.getToken()
          .then(
          (token: string) => {
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
          }
          );
      }
      )
      .catch(
      error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    localStorage.clear();
    this.router.navigate(['/']);
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then((token: string) => localStorage.setItem('token', token));
    return localStorage.getItem('token');
  }
  isAuthenticated() {
    return localStorage.getItem('token') != null;
  }

  // authUser: {
  //   "uid": "3XY5AuYamHQnnNeZtvNAvwCRscD2",
  //   "displayName": null,
  //   "photoURL": null,
  //   "email": "beshoy.refky.mansour22@gmail.com",
  //   "emailVerified": false,
  //   "phoneNumber": null,
  //   "isAnonymous": false,
  //   "providerData": [{
  //     "uid": "beshoy.refky.mansour22@gmail.com",
  //     "displayName": null,
  //     "photoURL": null,
  //     "email": "beshoy.refky.mansour22@gmail.com",
  //     "phoneNumber": null,
  //     "providerId": "password"
  //   }],
  //   "apiKey": "AIzaSyA_4oIIYYxV_h-NqLxoeJNeV30SxiI2Sgw",
  //   "appName": "[DEFAULT]", "authDomain": "listapp25.firebaseapp.com",
  //   "stsTokenManager": {
  //     "apiKey": "AIzaSyA_4oIIYYxV_h-NqLxoeJNeV30SxiI2Sgw",
  // tslint:disable-next-line:max-line-length
  //     "refreshToken": "APWA_kqQigTSxw5EFHgab-KK4GGCT6U16nksu_d_WKh-Gv8yR6rWO2Kffu45LBOhyxBsPvCxxYHxOFvYntGsWuy4GTLeFSMhz4Msz9B4wEPmAXjdS0YeI4XJcdeabyINnZLI43O5kWKBJ5FiQaJhXWkY8MBNAk4cgXoXK6-e9YfpdIb0cA7QBaNobPYVkF-F6Q9I0hwkt237KjWLmpoCcPMbMlNcNrmcAQ", "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJkNzFjNDEyNmYwMTYzZGQ1NGNiOWFmOWExNDY1YmU5ZGYyNjQxZTcifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbGlzdGFwcDI1IiwiYXVkIjoibGlzdGFwcDI1IiwiYXV0aF90aW1lIjoxNTA4MTE0MDM5LCJ1c2VyX2lkIjoiM1hZNUF1WWFtSFFubk5lWnR2TkF2d0NSc2NEMiIsInN1YiI6IjNYWTVBdVlhbUhRbm5OZVp0dk5BdndDUnNjRDIiLCJpYXQiOjE1MDgxMTQwMzksImV4cCI6MTUwODExNzYzOSwiZW1haWwiOiJiZXNob3kucmVma3kubWFuc291cjIyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJiZXNob3kucmVma3kubWFuc291cjIyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ffySNTv9RZxJ5y3r6XqZTtl9SzKA9VrUoTG_vbxUjsUWKv3KkRmZPCkQ5Pm7Ygc6BiG8fE0hqqh7hEpRxlDdqseNJeC3kr7eJYZCnhLwpL6JbLVJdfQ4mUWOLHhiuTG8QddoJP4cxOUn_BSKW6WEvyYtycSGPSspybZEl3RxoqnEdF4X96q2qOnLFq6jVfVlY1ngjPNek46AMk0ilbEPLjet0mLMlGGXW4tsgN4dnGMm__Abni2gTKrfJ6jM4eFacnXGrRmUslDjitkV37Ygo8x0w8RVRbH1-N0ZXCFvDRVNYIm2z4IVmRj8zY510XecPTyfhRVQbqhTR1jlfc-O7A",
  //     "expirationTime": 1508117637565
  //   },
  //   "redirectEventId": null
  // }


}
