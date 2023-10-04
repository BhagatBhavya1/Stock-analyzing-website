import pandas as pd
import math
import yfinance as yf
import pandas as pd
from datetime import datetime, timedelta

def calculate_vf_table(df, test1=0):
    close = df['Close']
    df['log_ratio'] = df['Close'].rolling(2).apply(lambda x: math.log(x[-1] / x[0]), raw=True)
    df['squr'] = df['log_ratio'].rolling(1).apply(lambda x: x**2)
    df = df.fillna(0)

    log = df['log_ratio']
    sqr = df['squr']
    avg_log = sum(log[2:]) / len(sqr[2:])
    avg_sqr = sum(df['squr']) / len(df['squr'])
    variance = avg_sqr - (avg_log**2)
    volatility = math.sqrt(variance)
    range = round( close[-1]* volatility, 2)
    return df , range , close[-1]



# Define the stock symbol and date range
stock_symbol = "^NSEI"  # Replace with your desired stock symbol
end_date = datetime.now()
# print(end_date)
start_date = end_date - timedelta(days=17) 

# Fetch historical data for the specified date range
data = yf.download(stock_symbol, start=start_date, end=end_date)

df = pd.DataFrame(data)
print(df)

df1 , range , dokdc = calculate_vf_table(df, test1=0)
table = {
    'above':[round(dokdc + (range * 0.236),2) , round(dokdc - (range * 0.236), 2)],
    'conf':[round(dokdc + (range * 0.382),2) , round(dokdc - (range * 0.382), 2)],
    't1':[round(dokdc + (range * 0.5),2),round(dokdc - (range * 0.5), 2)],
    't2':[round(dokdc + (range * 0.618),2),round(dokdc - (range * 0.618), 2)],
    't3':[round(dokdc + (range * 0.786),2),round(dokdc - (range * 0.786), 2)],
    't4':[round(dokdc + (range * 0.888),2),round(dokdc - (range * 0.888), 2)],
    't5':[round(dokdc + (range * 1.236),2),round(dokdc - (range * 1.236), 2)],
    't6':[round(dokdc + (range * 1.618),2),round(dokdc - (range * 1.618), 2)],
}

ans = pd.DataFrame(table)
ans.index = ['Buy above' , 'Sell below']
print(ans)
