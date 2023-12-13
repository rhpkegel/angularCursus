import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Observable} from "rxjs";
import {ChatMessage} from "../chat.models";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.scss']
})
export class ChatAppComponent implements OnInit{

  activeUsers: Observable<string[]> = this.userService.listActiveUsers();
  messages: ChatMessage[] = []

  constructor(private userService: UserService) {
    this.userService.userLeaveNotifications().pipe(takeUntilDestroyed()).subscribe((leavingUser: string)=>{
      if(leavingUser !== ''){
        this.messages.push({message: `${leavingUser} ging even koffie halen`, clientName: 'SYSTEM', timestamp: new Date()});
      }
    })
  }
  ngOnInit(): void {
    this.messages.push({message: 'Welkom bij de test chat app!', clientName: 'SYSTEM', timestamp: new Date()});

  }
  handleMessage(message: ChatMessage) {
    this.messages.push(message);
  }

  addUser() {
    this.userService.addUserToChat();
  }
}
