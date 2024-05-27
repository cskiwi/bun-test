import { Controller, Get, Res } from '@nestjs/common';
import { BackendTestService } from './backend-test.service';
import { Response } from 'express';

@Controller('backend-test')
export class BackendTestController {
  constructor(private backendTestService: BackendTestService) {}

  @Get()
  getHello(@Res() res: Response) {
    res.status(200).send({
      message: this.backendTestService.getHello(),
    });
  }
}
