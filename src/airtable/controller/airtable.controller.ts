import { Controller, Delete, Param, Get } from '@nestjs/common';
import { Airtable } from '../provider/airtable';

@Controller('airtable')
export class ControllerController {
  constructor(private airtable: Airtable) {}

  @Delete('/:base/:tab/:query')
  public getDeleteEntries(
    @Param('base') baseName: string,
    @Param('tab') tabName: string,
    @Param('query') query: string,
  ) {
    this.airtable.deleteByQuery(baseName, tabName, query);
  }
}
