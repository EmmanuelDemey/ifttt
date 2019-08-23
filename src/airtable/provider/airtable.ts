import { Injectable } from '@nestjs/common';
import * as AirtableSdk from 'airtable';

@Injectable()
export class Airtable {
  deleteByQuery(baseName: string, tabName: string, query: string) {
    const base = new AirtableSdk({ apiKey: process.env.Airtable }).base(
      baseName,
    );
    base(tabName)
      .select({
        filterByFormula: query,
        fields: [],
      })
      .eachPage((records, fetchNextPage) => {
        records.forEach(({ id }) => base(tabName).destroy(id));
        fetchNextPage();
      });
  }
}
