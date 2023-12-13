import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserBeheerComponent} from "./user-beheer/user-beheer.component";
import {ChatAppComponent} from "./chat-app/chat-app.component";

const routes: Routes = [
  {path: '', component: ChatAppComponent},
  {path: 'users', component: UserBeheerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
