export class Message {
    content: string;
    timestamp: Date;
    avatar: string;
    sentby: string;
    constructor(content: string, avatar: string,sentby: string, timestamp?: Date){
      this.content = content;
      this.timestamp = timestamp;
      this.avatar = avatar;
      this.sentby=sentby;
    }
  }