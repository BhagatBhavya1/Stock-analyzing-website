import pandas as pd
from datetime import datetime
from flask import Blueprint, request, jsonify
from Connection.db_connect import dbConnect
from bson import ObjectId

Fnoget = Blueprint('fnofetch', __name__)

def formate(date_str):
    
    # Sample date in the format "27-Jul-23"
    # date_str = "31-Aug-23"

    # Convert the date string to a datetime object
    date_obj = datetime.strptime(date_str, "%d-%b-%y")

    # Define the Excel base date for the 1900 date system
    excel_base_date = datetime(1900, 1, 1)

    # Calculate the number of days between the date_obj and Excel's base date
    days_difference = (date_obj - excel_base_date).days

    # Add 2 to account for Excel's date system starting from January 1, 1900, and Excel erroneously considering 1900 as a leap year
    excel_serial_number = days_difference + 2

    # print(excel_serial_number)
    return str(excel_serial_number)

def f_o(symbol , exp_date , ent_date):

    print(f"STOCk Name = {symbol}")

    # generate unique id for fetchnig data
    id1 = symbol + formate(ent_date) + formate(exp_date)
    # print(id1)
    print(id1)
    # read csv
    df = pd.read_excel('Back_end/Copy.xlsx',sheet_name='Data')
    p =df['TIMESTAMP'].max()
    # print(p.strftime('%d-%b-%y'))

    #generate id 2
    id2 = symbol + formate(p.strftime('%d-%b-%y')) + formate(exp_date)
    print(id2)

    # for getting last closing price 
    index = df[df['Unique'] == id2].index[0]
    print(index)
    result = df.at[index, 'CLOSE']
    print(f"Latest closing price = {result}")

    # for price change 
    # Find the values in columns K and B based on the matches
    value_k1 = df[df['Unique'] == id1].index[0]
    print(value_k1)
    value_k2 = df[df['Unique'] == id2].index[0]

    price_change = (((df.at[value_k2,'CLOSE'])/(df.at[value_k1,'CLOSE']))-1)*100
    print(f"PRICE change = {price_change}")

    # for coi change
    value_c1 = df[df['Unique'] == id1].index[0]
    value_c2 = df[df['Unique'] == id2].index[0]

    coi_change = (((df.at[value_c2,'COI'])/(df.at[value_c1,'COI']))-1)*100
    print(f"COI change = {coi_change}")
    analysis =""
    # final analysis
    if price_change > 0 and coi_change > 0:
        analysis = "Long Builtup"
    elif price_change < 0 and coi_change > 0:
        analysis = "Short Builtup"
    elif price_change > 0 and coi_change < 0:
        analysis = "Short Covering"
    elif price_change < 0 and coi_change < 0:
        analysis = "Long Unwinding"
    else:
        result = ""

    print(f"Analysis = {analysis}")


@Fnoget.route('/fnofetch', methods=['GET'])
def F_O():
    enter_date = request.args.get('enterDate')
    expiry_date = request.args.get('expiryDate')
    # print(enter_date)
    exp_date = datetime.strptime(expiry_date,'%Y-%m-%d')
    symbol = 'BANKNIFTY'
    ent_date = datetime.strptime(enter_date,'%Y-%m-%d')
    # f_o(symbol,exp_date,ent_date)
    data = {
        "message": "Data retrieved successfully"
    }
    
    return jsonify(data)

# exp_date = '30-NOV-23'
# symbol = 'BANKNIFTY'
# # ent_date = datetime.now()
# ent_date = '5-OCT-23'
# print(ent_date)
# f_o(symbol,exp_date,ent_date)
#  mask = df['Unique'] == id
