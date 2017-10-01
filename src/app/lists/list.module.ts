import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TistListComponent } from './tist-list/tist-list.component';
import { ListListComponent } from './list-list/list-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TistListComponent, ListListComponent]
})
export class ListModule { }
