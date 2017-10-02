import { SignupComponent } from './../auth/signup/signup.component';
import { SigninComponent } from './../auth/signin/signin.component';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { ListService } from '../lists/list.service';

@NgModule({
  declarations:[
    HomeComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    AppRoutingModule,
    HeaderComponent,
    HomeComponent
  ],
  providers:[
    AuthService,
    DataStorageService,
    ListService
  ]
})
export class CoreModule { }
