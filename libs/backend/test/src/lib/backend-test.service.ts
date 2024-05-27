import { Injectable } from '@nestjs/common';

@Injectable()
export class BackendTestService {
  getHello(): string {
    return 'Hello you!';
  }
}
