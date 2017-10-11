import { ListItemComponent } from './list-list/list-item/list-item.component';
import { ListStartComponent } from './list-start/list-start.component';
import { ListsComponent } from './lists.component';
import { SharedModule } from './../shared/shared.module';
import { ListRoutingModule } from './list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListListComponent } from './list-list/list-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ 
    ListListComponent,
    ListsComponent,
    ListStartComponent,
    ListItemComponent
  ],
})
export class ListModule { }
