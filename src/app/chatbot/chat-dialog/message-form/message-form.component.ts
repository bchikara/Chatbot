import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../Models/message';
import { ChatbotService } from '../../Service/chatbot.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent implements OnInit {


  private message = { content: '', avatar: 'assets/images/user.png', sentby: 'user', timestamp: new Date() };

  @Input('messages') messages: Message[];

  constructor(private chatbotService: ChatbotService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    if (this.message.content !== '') {
      this.message.timestamp = new Date();
      // console.log(this.message)
      this.messages.push(this.message);
      console.log(this.messages)
      // this.chatbotService.getResponse(this.message.content).subscribe(res => {
      //   this.messages.push(
      //     new Message(res.result.fulfillment.speech, 'assets/images/bot.png', 'bot',res.timestamp)
      //   );
      // });
      this.message = new Message('', 'assets/images/user.png', 'user', new Date());
    }
  }

  listen() {
    // this.service
    //   .listen()
    //   .pipe(resultList)
    //   .subscribe((list: SpeechRecognitionResultList) => {
    //     this.message.content = list.item(0).item(0).transcript;
    //     console.log('RxComponent:onresult', this.message.content, list);
    //   });
  }
}