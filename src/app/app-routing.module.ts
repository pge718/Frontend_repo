import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import{ProfileComponent} from './profile/profile.component';
import { CompletedprofileComponent } from './completedprofile/completedprofile.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';
//import { MyProfileComponent } from './my-profile/my-profile.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  { path: 'profile', component: ProfileComponent},
  {path:'completed', component:CompletedprofileComponent},
  {path: 'show-profile', component: ShowProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
