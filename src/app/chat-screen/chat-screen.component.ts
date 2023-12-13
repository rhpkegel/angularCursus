import {AfterViewChecked, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ChatMessage} from "../chat.models";

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss']
})
export class ChatScreenComponent implements AfterViewChecked{
  @Input()
  messages: ChatMessage[] = [];

  @ViewChild('content') content?: ElementRef;
  @ViewChildren('messageList') messageItems?: QueryList<never>;

  ngAfterViewChecked(): void {
    this.messageItems?.changes.subscribe({
      next: () => {
        (this.content?.nativeElement as HTMLElement).scrollTop = this.content?.nativeElement.scrollHeight;
      }
    })
  }
}
