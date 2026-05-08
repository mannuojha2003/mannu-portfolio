from docx import Document
import sys

def read_docx(file_path):
    doc = Document(file_path)
    fullText = []
    for para in doc.paragraphs:
        fullText.append(para.text)
    return '\n'.join(fullText)

if __name__ == "__main__":
    content = read_docx('DeployOrCry_Portfolio_Implementation_Plan.docx')
    with open('implementation_plan.txt', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Content extracted successfully to implementation_plan.txt")
