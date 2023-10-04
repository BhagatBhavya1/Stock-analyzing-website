# import pandas as pd
from Stock import get_data


df = get_data(stock_symbol="RELIANCE", start_date='15-9-2020', end_date='1-10-2021')

print(df)
