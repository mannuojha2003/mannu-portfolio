import pandas as pd
from datetime import datetime
import os

excel_path = "parsed_data.xlsx"
if not os.path.exists(excel_path):
    print("No records found.")
    exit()

df = pd.read_excel(excel_path)
today = datetime.now().strftime("%d/%m/%Y")
df_today = df[df["DATE"] == today]

if df_today.empty:
    print("No data submitted today.")
else:
    summary = f"📋 *Daily Summary for {today}*\n\n"
    for i, row in df_today.iterrows():
        summary += (
            f"🛻 *{row['VEHICLE NO']}* | 👨‍✈️ *{row['DRIVER NAME']}*\n"
            f"   ⛽ Diesel: {row['DISEL']} | 💵 Total: {row['TOTAL']}\n\n"
        )
    print(summary)
