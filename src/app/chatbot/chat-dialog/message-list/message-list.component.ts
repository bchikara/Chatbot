import { Component, OnInit, Input, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Message } from '../../Models/message';
import { MessageItemComponent } from '../message-item/message-item.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent {

  @Input('messages') private messages: Message[];
  private message = { content: '', avatar: '', sentby: 'user', timestamp: new Date() };
  @ViewChild('chatlist', { read: ElementRef }) chatList: ElementRef;
  @ViewChildren(MessageItemComponent, { read: ElementRef }) chatItems: QueryList<MessageItemComponent>;

  constructor() { }

  ngAfterViewInit() {
    this.chatItems.changes.subscribe(elements => {
      console.log('messsage list changed: ' + this.messages.length);
      this.scrollToBottom();
    });
    this.scrollToBottom();
  }

  ngOnInit() {
    console.log(this.messages)
    var element = $('.floating-chat');

    setTimeout(function () {
      element.addClass('enter');
      element.addClass('button');
    }, 1000);

    element.click(openElement);

    function openElement() {
      var messages = element.find('.messges');
      element.removeClass('button');
      element.find('>i').hide();
      element.addClass('expand');
      element.find('.chat').addClass('enter');
      element.off('click', openElement);
      element.find('.header button').click(closeElement);
      messages.scrollTop(messages.prop("scrollHeight"));
    }

    function closeElement() {
      element.find('.chat').removeClass('enter').hide();
      element.find('>i').show();
      element.addClass('button');
      element.removeClass('expand');
      element.find('.header button').off('click', closeElement);
      setTimeout(function () {
        element.find('.chat').removeClass('enter').show()
        element.click(openElement);
      }, 500);
    }
  }

  private scrollToBottom(): void {
    try {
      this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
      console.log('Hello 823456yuhjggfdcsxzcv')
    }
    catch (err) {
      console.log('Could not find the "chatList" element.');
    }
  }


}
