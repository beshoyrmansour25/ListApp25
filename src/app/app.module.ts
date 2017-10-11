import { ReactiveFormsModule } from '@angular/forms';
import { ListEditComponent } from './lists/list-edit/list-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@NgModule({
  declarations: [
    AppComponent,
    ListEditComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    CoreModule,
    ModalModule.forRoot(),
  ],
  providers: [BsModalRef, ],
  entryComponents: [ListEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
