import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChatMessage} from "../chat.models";
import {UserService} from "../user.service";

@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.scss']
})
export class ChatClientComponent {

  @Input()
  userName: string = 'test';
  @Input()
  message: string = '';
  @Output()
  sentMessage: EventEmitter<ChatMessage> = new EventEmitter<ChatMessage>()

  constructor(private userService: UserService) {
  }

  sendMessage() {
    this.sentMessage.emit({
      clientName: this.userName,
      message: this.message,
      timestamp: new Date()
    });
    this.message='';
  }

  leaveChat() {
    this.userService.removeUserFromChat(this.userName)
  }
}
