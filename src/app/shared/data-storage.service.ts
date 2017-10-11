import { List } from './../lists/list.model';
import { AuthService } from './../auth/auth.service';
import { ListService } from './../lists/list.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private listService: ListService,
    private authService: AuthService
  ) { }
  storeList(){
    const token = this.authService.getToken();

    if (this.listService.getLists().length > 0) {
      this.http.put('https://listapp25.firebaseio.com/lists.json?auth=' + token, this.listService.getLists())
      .subscribe(
          (Response) => {
              console.log(Response);
          }
      ); } else {alert('No Data to save !'); }
  }
  getList() {
    const token = this.authService.getToken();
    this.http.get('https://listapp25.firebaseio.com/lists.json?auth='+ token)
    .map(
      (response: Response)=>{
        const lists: List[]= response.json();
        return lists;
      }
    ).subscribe(
      (list: List[]) => {
        this.listService.setList(list);
      }
    );
  }

}
