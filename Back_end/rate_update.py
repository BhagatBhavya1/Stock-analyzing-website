import yfinance as yf
import pandas as pd
from pymongo import MongoClient
from datetime import datetime, timedelta

symbol = "RIGD.L"  # Change this to the desired symbol

# Calculate the date for the previous trading day
today = datetime.today()
yesterday = today - timedelta(days=1)

# Fetch daily stock data from Yahoo Finance
data = yf.download(symbol, start=yesterday, end=today)
print(data)
# Calculate the daily percentage change
d = ((data["Adj Close"] - data["Open"]) / data["Open"]) * 100
print("bhavya",d)
