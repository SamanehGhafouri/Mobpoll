import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatePollComponent} from "./create-poll/create-poll.component";
import {AboutComponent} from "./about/about.component";
import {MoreComponent} from "./more/more.component";
import {PublicPollsComponent} from "./public-polls/public-polls.component";
import {SuccessPollPageComponent} from "./success-poll-page/success-poll-page.component";
import {TermsOfServiceComponent} from "./terms-of-service/terms-of-service.component";
import {TakeAPollComponent} from "./take-a-poll/take-a-poll.component";


const routes: Routes = [
  {path: '', component: CreatePollComponent},
  {path: 'about', component: AboutComponent},
  {path: 'learn_more', component: MoreComponent},
  {path: 'public_polls', component: PublicPollsComponent},
  {path: 'success/:pollId', component: SuccessPollPageComponent},
  {path: 'terms_of_service', component:TermsOfServiceComponent},
  {path: 'poll/:pollId', component: TakeAPollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
