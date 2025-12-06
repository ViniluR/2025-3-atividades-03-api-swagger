import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getInfo() {
    return { 
      status: 'online', 
      version: '1.0.0', 
      description: 'ta show papai'
    };
  }
}
