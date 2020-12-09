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
