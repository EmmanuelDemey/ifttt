import { Test, TestingModule } from '@nestjs/testing';
import { Airtable } from './airtable';

describe('Airtable', () => {
  let provider: Airtable;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Airtable],
    }).compile();

    provider = module.get<Airtable>(Airtable);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
