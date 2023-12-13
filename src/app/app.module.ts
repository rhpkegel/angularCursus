import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { ChatClientComponent } from './chat-client/chat-client.component';
import {FormsModule} from "@angular/forms";
import { UserBeheerComponent } from './user-beheer/user-beheer.component';
import { ChatAppComponent } from './chat-app/chat-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatScreenComponent,
    ChatClientComponent,
    UserBeheerComponent,
    ChatAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
