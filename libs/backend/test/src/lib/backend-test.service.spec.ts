import { Test } from '@nestjs/testing';
import { BackendTestService } from './backend-test.service';

describe('BackendTestService', () => {
  let service: BackendTestService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendTestService],
    }).compile();

    service = module.get(BackendTestService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
