import pandas as pd
from datetime import datetime
import os
import sys

excel_path = "parsed_data.xlsx"
fields = [
    "DATE", "VEHICLE NO", "DISEL", "RTD", "other cash exp", "cash exp REMARK",
    "toll", "border", "HAMMBALI", "BHATTA", "BHATTA DATE",
    "AGENCY", "DRIVER NAME", "TOTAL", "PUMP NAME"
]

if os.path.exists(excel_path):
    try:
        df = pd.read_excel(excel_path)
    except:
        df = pd.DataFrame(columns=fields)
else:
    df = pd.DataFrame(columns=fields)

def parse_and_save(message):
    entries = message.split("\n\n")
    for block in entries:
        row = {field: "" for field in fields}
        for line in block.strip().splitlines():
            if ":" in line:
                key, value = line.split(":", 1)
                key = key.strip()
                value = value.strip()
                if key in fields:
                    row[key] = value
        if not row["DATE"]:
            row["DATE"] = datetime.now().strftime("%d/%m/%Y")
        df.loc[len(df)] = row

    with pd.ExcelWriter(excel_path, engine="openpyxl", mode="w") as writer:
        df.to_excel(writer, index=False)
    print("Success")

if __name__ == "__main__":
    msg = sys.argv[1]
    parse_and_save(msg)
