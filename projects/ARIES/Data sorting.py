import os
import pandas as pd

# Directory containing .out files
# Directories (Relative to script)
base_dir = os.path.dirname(os.path.abspath(__file__))
directory = os.path.join(base_dir, 'input')
excel_dir = os.path.join(base_dir, 'output')
excel_file = os.path.join(excel_dir, 'output.xlsx')

# Ensure output directory exists
if not os.path.exists(excel_dir):
    os.makedirs(excel_dir)

# List all .out files
out_files = sorted([f for f in os.listdir(directory) if f.endswith('.out')])

# Initialize lists to store data
radiation1_data = []
radiation2_data = []

# Function to extract day number from filename
def get_day_number(filename):
    return int(filename.split('_')[-1].split('.')[0])

# Read each .out file and extract data
for filename in out_files:
    filepath = os.path.join(directory, filename)
    day_number = get_day_number(filename)
    
    # Read .out file into a DataFrame (assuming columns are space-separated)
    df = pd.read_csv(filepath, sep='\s+', header=None, names=['Radiation1', 'Radiation2'])
    
    # Append columns to respective lists
    radiation1_data.append(df['Radiation1'])
    radiation2_data.append(df['Radiation2'])

# Create DataFrames for Radiation 1 and Radiation 2
df_rad1 = pd.DataFrame(radiation1_data).transpose()  # Each column is a day's Radiation 1
df_rad2 = pd.DataFrame(radiation2_data).transpose()  # Each column is a day's Radiation 2

# Write DataFrames to Excel

try:
    with pd.ExcelWriter(excel_file, engine='openpyxl') as writer:
        df_rad1.to_excel(writer, sheet_name='Radiation1', index=False)
        df_rad2.to_excel(writer, sheet_name='Radiation2', index=False)
    print(f"Output written to {excel_file}")
except PermissionError:
    print(f"PermissionError: Check if you have write access to '{excel_file}'.")
