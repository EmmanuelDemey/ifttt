import { Test, TestingModule } from '@nestjs/testing';
import { ControllerController } from './airtable.controller';
import { Airtable } from '../provider/airtable';

describe('Controller Controller', () => {
  let controller: ControllerController;
  let airtable: Airtable;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerController],
      providers: [
        {
          provide: Airtable,
          useValue: {
            deleteByQuery: jest.fn(),
          },
        },
      ],
    }).compile();

    airtable = module.get<Airtable>(Airtable);
    controller = module.get<ControllerController>(ControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call the airtable provider', () => {
    controller.getDeleteEntries('base', 'tab', 'query');
    expect(airtable.deleteByQuery).toHaveBeenCalledWith('base', 'tab', 'query');
  });
});
