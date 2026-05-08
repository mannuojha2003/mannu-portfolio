import os
import pandas as pd
import numpy as np

# Function to integrate over the specified wavelength range using the trapezoidal rule
def integrate_wavelength_range(wavelengths, intensities, start, end):
    mask = (wavelengths >= start) & (wavelengths <= end)
    if not np.any(mask):
        return 0
    wavelengths_filtered = wavelengths[mask]
    intensities_filtered = intensities[mask]
    return np.trapz(intensities_filtered, wavelengths_filtered)

# Directories
# Directories (Relative to script)
base_dir = os.path.dirname(os.path.abspath(__file__))
input_dir = os.path.join(base_dir, 'input')
output_dir = os.path.join(base_dir, 'output')
output_file = os.path.join(output_dir, 'integrated_radiation.xlsx')

# Ensure output directory exists
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Initialize data storage
radiation_1_data = []
radiation_2_data = []

# Check if the input directory exists
if not os.path.exists(input_dir):
    print(f"The directory {input_dir} does not exist. Please check the path and try again.")
else:
    # Iterate through each .out file
    for file_name in os.listdir(input_dir):
        if file_name.endswith('.out'):
            file_path = os.path.join(input_dir, file_name)
            day = int(file_name.split('_')[1].split('.')[0])

            # Read the file with the appropriate separator and check the number of columns
            try:
                data = pd.read_csv(file_path, sep='\s+', header=None)
                if data.shape[1] != 2:
                    print(f"The file {file_name} does not have the expected number of columns. It has {data.shape[1]} columns.")
                    continue
            except Exception as e:
                print(f"Failed to read the file {file_name}: {e}")
                continue

            try:
                wavelengths = data.index
                radiation_1 = data[0]
                radiation_2 = data[1]

                # Integrate for Radiation 1
                I1_1 = integrate_wavelength_range(wavelengths, radiation_1.values, 260, 380)
                I2_1 = integrate_wavelength_range(wavelengths, radiation_1.values, 381, 700)
                I3_1 = integrate_wavelength_range(wavelengths, radiation_1.values, 701, 2600)
                I4_1 = integrate_wavelength_range(wavelengths, radiation_1.values, 260, 2600)

                # Integrate for Radiation 2
                I1_2 = integrate_wavelength_range(wavelengths, radiation_2.values, 260, 380)
                I2_2 = integrate_wavelength_range(wavelengths, radiation_2.values, 381, 700)
                I3_2 = integrate_wavelength_range(wavelengths, radiation_2.values, 701, 2600)
                I4_2 = integrate_wavelength_range(wavelengths, radiation_2.values, 260, 2600)

                # Append data for Radiation 1 and Radiation 2
                radiation_1_data.append([day, I1_1, I2_1, I3_1, I4_1])
                radiation_2_data.append([day, I1_2, I2_2, I3_2, I4_2])

            except Exception as e:
                print(f"Error processing the file {file_name}: {e}")
                continue

    # Create DataFrame for Radiation 1 and Radiation 2
    columns = ['Day', 'I1 (UV)', 'I2 (Visible)', 'I3 (IR)', 'I4 (All)']
    radiation_1_df = pd.DataFrame(radiation_1_data, columns=columns)
    radiation_2_df = pd.DataFrame(radiation_2_data, columns=columns)

    # Write to Excel
    with pd.ExcelWriter(output_file) as writer:
        radiation_1_df.to_excel(writer, sheet_name='Radiation 1', index=False)
        radiation_2_df.to_excel(writer, sheet_name='Radiation 2', index=False)

    print(f'Data has been successfully written to {output_file}')
