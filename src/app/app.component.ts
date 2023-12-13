import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  users: string[] = ['testUser', 'testUser2', 'testUser3']
  messages: string[] = ['Welkom bij de test chat app!']

  handleMessage(message: string) {
    this.messages.push(message)
  }
}
