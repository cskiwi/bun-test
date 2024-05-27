import { Test } from '@nestjs/testing';
import { BackendTestController } from './backend-test.controller';
import { BackendTestService } from './backend-test.service';

describe('BackendTestController', () => {
  let controller: BackendTestController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendTestService],
      controllers: [BackendTestController],
    }).compile();

    controller = module.get(BackendTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
