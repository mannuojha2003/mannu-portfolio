# 🤖 pta-bot: WhatsApp Data Automation

A professional automation tool designed to bridge the gap between WhatsApp communication and structured data management. This bot captures messages from specific WhatsApp groups, parses them using a custom Python backend, and maintains a structured Excel database for business tracking.

## 🚀 Core Features

- **Automated Data Extraction**: Captures driver messages, fuel records, and expense reports directly from WhatsApp.
- **Smart Parsing**: Python-based parser handles structured text formats and converts them into tabular data.
- **Excel Synchronization**: Automatically appends new records to `parsed_data.xlsx` while preventing data loss.
- **Daily Summaries**: Scheduled cron jobs generate and send business summaries back to specified WhatsApp groups at 9:00 PM every day.
- **Session Persistence**: Maintains WhatsApp Web sessions to avoid repeated QR code scanning.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **WhatsApp API**: `@open-wa/wa-automate`
- **Data Processing**: Python 3.12 + Pandas + Openpyxl
- **Scheduling**: `node-cron`

## 📋 Message Format
The bot expects messages in the following structured format for optimal parsing:

```text
DATE: 26/06/2025
VEHICLE NO: MP04GB5123
DISEL: 60Ltr
RTD: 252Km
other cash exp: 200
cash exp REMARK: Toll Tax
```

## ⚙️ Setup & Installation

### 1. Prerequisites
- Node.js installed
- Python 3.12+ installed
- `pandas` and `openpyxl` installed (`pip install pandas openpyxl`)

### 2. Installation
```bash
npm install
```

### 3. Start the Bot
```bash
npm run dev
```

## 🔧 Troubleshooting (Windows Fix)
This version has been optimized for Windows environments, specifically fixing the `python3` command execution bug by using the standard `python` alias.

---

**Developed to streamline logistics and communication workflows.**
