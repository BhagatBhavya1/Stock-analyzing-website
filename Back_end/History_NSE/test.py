# import pandas as pd
from Stock import get_data


df = get_data(stock_symbol="RELIANCE", start_date='4-10-2023', end_date='5-10-2023')

print(df)
