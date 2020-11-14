import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { MoreComponent } from './more/more.component';
import { PublicPollsComponent } from './public-polls/public-polls.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePollComponent,
    HelpComponent,
    AboutComponent,
    MoreComponent,
    PublicPollsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
