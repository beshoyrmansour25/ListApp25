import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListStartComponent } from './list-start/list-start.component';
import { ListsComponent } from './lists.component';
import { AuthGardService } from '../auth/auth-gard.service';

const listsRoutes: Routes = [
  {
    path: '', component: ListsComponent, children: [
      { path: '', component: ListStartComponent }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(listsRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGardService]
})
export class ListRoutingModule { }
