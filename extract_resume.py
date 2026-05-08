import sys, subprocess, json, os

pdf_path = r"C:\Users\mannu\Desktop\Portfolio\mannu_resume (2) (1).pdf"

# Ensure PyPDF2 is installed
try:
    import PyPDF2
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "PyPDF2", "--quiet"])
    import PyPDF2

with open(pdf_path, "rb") as f:
    reader = PyPDF2.PdfReader(f)
    text = "\n".join(page.extract_text() or "" for page in reader.pages)

# Write extracted text to a UTF‑8 file (avoids console encoding issues)
output_path = r"C:\Users\mannu\Desktop\Portfolio\resume_text.txt"
with open(output_path, "w", encoding="utf-8") as out_f:
    out_f.write(text)
