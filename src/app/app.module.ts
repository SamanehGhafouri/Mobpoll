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
import {ReactiveFormsModule} from "@angular/forms";
import { CreatePollSubmitWarningComponent } from './create-poll-submit-warning/create-poll-submit-warning.component';
import { SuccessPollPageComponent } from './success-poll-page/success-poll-page.component';
import { CreatePollHelpComponent } from './create-poll-help/create-poll-help.component';
import { AboutHelpComponent } from './about-help/about-help.component';
import { LearnMoreHelpComponent } from './learn-more-help/learn-more-help.component';
import { PublicPollsHelpComponent } from './public-polls-help/public-polls-help.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HelpButtonComponent } from './help-button/help-button.component';

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



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
