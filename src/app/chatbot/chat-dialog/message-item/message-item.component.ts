import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../Models/message';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {
  @Input('messages') private messages: Message[];
  @Input('message') message: Message={ content: '', avatar: 'assets/images/user.png', sentby: 'user', timestamp: new Date() };;
  @Input('index') index;

  constructor() { }

  ngOnInit() {
   console.log()
    if(this.index-1>=0){
      console.log(this.index-1)
      console.log(this.messages[this.index-1].sentby)
      console.log(this.message.sentby)
    }

  }

}