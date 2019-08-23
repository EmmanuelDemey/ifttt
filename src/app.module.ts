import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirtableModule } from './airtable/airtable.module';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [AirtableModule],
  controllers: [AppController],
  providers: [AppService, AuthGuard],
})
export class AppModule {}
