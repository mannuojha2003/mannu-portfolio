# PTA WhatsApp Bot (Final Version)

## Features
- Receives driver messages on WhatsApp
- Extracts structured data and appends to Excel
- Sends daily summaries to 2 WhatsApp groups at 9PM
- Auto-creates and updates `parsed_data.xlsx`

## Setup
1. Run `npm install`
2. Install Python packages:
   pip install pandas openpyxl
3. Start bot:
   npm run dev

## Group IDs
- 120363196294448521@g.us
- 120991198821244321@g.us

## Format Example
Each message must follow this format:

```
DATE: 26/06/2025
VEHICLE NO: MP04GB5123
DISEL: 60Ltr
RTD: 252Km
other cash exp: 200
...
```

Multiple entries can be sent in one message, separated by a blank line.
