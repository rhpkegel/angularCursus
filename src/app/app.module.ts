import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { ChatClientComponent } from './chat-client/chat-client.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserBeheerComponent } from './user-beheer/user-beheer.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { FormatUsernamePipe } from './chat-client/format-username.pipe';
import {MatInputModule} from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    ChatScreenComponent,
    ChatClientComponent,
    UserBeheerComponent,
    ChatAppComponent,
    FormatUsernamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
