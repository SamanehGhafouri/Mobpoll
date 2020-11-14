import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatePollComponent} from "./create-poll/create-poll.component";
import {AboutComponent} from "./about/about.component";
import {MoreComponent} from "./more/more.component";
import {PublicPollsComponent} from "./public-polls/public-polls.component";


const routes: Routes = [
  {path: '', component: CreatePollComponent},
  {path: 'about', component: AboutComponent},
  {path: 'learn_more', component: MoreComponent},
  {path: 'public_polls', component: PublicPollsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
