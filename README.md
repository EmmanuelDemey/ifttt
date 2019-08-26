# My Ifttt

This project will add HTTP endpoint you'll be able to use in tools like IFTTT or Zapier in order to automate everything.

## Airtable Integration

In order to use the Airtable integration, you should set the `Airtable` environment variable before.

### delete records by query

```
curl -XDELETE https://webhooks-7b6tltcvla-uc.a.run.app/airtable/{baseId}/{tabId}/{query}
```

Here is a simple query you can use if you want to delete all records with Done field (a checkbox) equal to 1 (checked)

```curl
curl -XDELETE https://webhooks-7b6tltcvla-uc.a.run.app/airtable/{baseId}/{tabId}/Done=1
```
