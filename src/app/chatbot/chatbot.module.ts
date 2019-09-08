import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { MessageItemComponent } from './chat-dialog/message-item/message-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageListComponent } from './chat-dialog/message-list/message-list.component';
import { ChatbotService } from './Service/chatbot.service';
import { MessageFormComponent } from './chat-dialog/message-form/message-form.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SpeechRecognitionComponent } from './chat-dialog/speech-recognition/speech-recognition.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
  ],
  
  declarations: [ChatDialogComponent, MessageItemComponent, MessageListComponent,MessageFormComponent, SpeechRecognitionComponent],
  exports: [ChatDialogComponent],
  providers:[ChatbotService, ]
})
export class ChatbotModule { }
