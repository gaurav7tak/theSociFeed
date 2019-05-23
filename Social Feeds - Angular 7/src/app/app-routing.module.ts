import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { GuardService } from './service/guard.service';

const routes: Routes = [
  {path: '', component: FeedComponent , canActivate: [GuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'myaccount', component: MyAccountComponent, canActivate: [GuardService]},
  {path: 'feeds', component: FeedComponent, canActivate: [GuardService]}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
