import { Component, OnInit } from '@angular/core';
import { Message } from '../Models/message';
import * as $ from 'jquery';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent {


  public message: Message;
  public messages: Message[];

  constructor() {
    this.message = new Message('', 'assets/images/user.png', 'user', new Date());
    this.messages = [
      new Message('Welcome to SMART JOULES', 'assets/images/bot.png', 'bot', new Date())
    ];
  }
}
