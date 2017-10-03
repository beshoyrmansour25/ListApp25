import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lists', loadChildren: './lists/list.module'},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
