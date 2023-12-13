import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChatMessage, User} from "../chat.models";
import {UserService} from "../user.service";

@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.scss']
})
export class ChatClientComponent {

  @Input()
  user: User = {id: -1, achternaam: 'anonymous'};
  @Input()
  message: string = '';
  @Output()
  sentMessage: EventEmitter<ChatMessage> = new EventEmitter<ChatMessage>()

  get formattedName(): string{
    return `${this.user.voornaam? this.user.voornaam+' ' : ''}${this.user.achternaam}`
  }

  constructor(private userService: UserService) {
  }

  sendMessage() {
    this.sentMessage.emit({
      client: this.user,
      message: this.message,
      timestamp: new Date()
    });
    this.message='';
  }

  leaveChat() {
    if(this.user.id){
      this.userService.removeUserFromChat(this.user.id);
    }
  }
}
