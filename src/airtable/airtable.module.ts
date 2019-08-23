import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { Airtable } from './provider/airtable';

@Module({
  controllers: [ControllerController],
  providers: [Airtable]
})
export class AirtableModule {}
