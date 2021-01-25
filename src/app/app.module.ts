import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { MoreComponent } from './more/more.component';
import { PublicPollsComponent } from './public-polls/public-polls.component';
import { ContatinerComponent } from './contatiner/contatiner.component';
import { CreatePollFormComponent } from './create-poll-form/create-poll-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreatePollSubmitWarningComponent } from './create-poll-submit-warning/create-poll-submit-warning.component';
import { SuccessPollPageComponent } from './success-poll-page/success-poll-page.component';
import { CreatePollHelpComponent } from './create-poll-help/create-poll-help.component';
import { AboutHelpComponent } from './about-help/about-help.component';
import { LearnMoreHelpComponent } from './learn-more-help/learn-more-help.component';
import { PublicPollsHelpComponent } from './public-polls-help/public-polls-help.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HelpButtonComponent } from './help-button/help-button.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {ClipboardModule} from "@angular/cdk/clipboard";
import { TakeAPollComponent } from './take-a-poll/take-a-poll.component';
import { TakeAPollFormComponent } from './take-a-poll-form/take-a-poll-form.component';
import { PollResultsComponent } from './poll-results/poll-results.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatePollComponent,
    HelpComponent,
    AboutComponent,
    MoreComponent,
    PublicPollsComponent,
    ContatinerComponent,
    CreatePollFormComponent,
    CreatePollSubmitWarningComponent,
    SuccessPollPageComponent,
    CreatePollHelpComponent,
    AboutHelpComponent,
    LearnMoreHelpComponent,
    PublicPollsHelpComponent,
    NavBarComponent,
    HelpButtonComponent,
    TermsOfServiceComponent,
    TakeAPollComponent,
    TakeAPollFormComponent,
    PollResultsComponent,



  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        ClipboardModule,
        FormsModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
