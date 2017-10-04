import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEditComponent } from './list-edit/list-edit.component';
import { ListStartComponent } from './list-start/list-start.component';
import { ListsComponent } from './lists.component';
import { AuthGardService } from '../auth/auth-gard.service';

const listsRoutes: Routes = [
  {
    path: '', component: ListsComponent, children: [
      { path: '', component: ListStartComponent },
      { path: 'new', component: ListEditComponent, canActivate:[AuthGardService] },
      { path: 'id', component: ListsComponent },
      { path: 'id/edit', component: ListEditComponent, canActivate:[AuthGardService] },
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
