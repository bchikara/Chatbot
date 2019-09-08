import { Component, OnInit } from '@angular/core';
import {
  RxSpeechRecognitionService,
  resultList,
} from '../../../../../projects/ngx-speech-recognition/src/public_api';

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.css'],
  providers: [
    RxSpeechRecognitionService,
  ],
})
export class SpeechRecognitionComponent implements OnInit {
  message='';
  constructor( public service: RxSpeechRecognitionService) { }

  ngOnInit() {
  }

  listen() {
    this.service
      .listen()
      .pipe(resultList)
      .subscribe((list: SpeechRecognitionResultList) => {
        this.message = list.item(0).item(0).transcript;
        console.log('RxComponent:onresult', this.message, list);
      });
      console.log(this.message)
  }

}
