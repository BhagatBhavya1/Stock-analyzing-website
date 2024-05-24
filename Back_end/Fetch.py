from flask import Blueprint,jsonify
from Connection.db_connect import dbConnect
import json
from bson import ObjectId
def json_serial(obj):
    if isinstance(obj, ObjectId):
        return str(obj)  # Convert ObjectId to a string
    raise TypeError("Type not serializable")


Stock_Data = Blueprint('Stock_status_data', __name__)
@Stock_Data.route('/Stock_status_data', methods=['GET'])
def Stock_status_data():
    collection = dbConnect()
    results = collection.find()
    # 
    results = list(results)
    json_data = json.dumps(results, default=json_serial)

    # print(json_data)
    return json_data

def Watch_list():
    collection = dbConnect()
    results = collection.find({'status': 'Active'})
    # Extract stock symbols and names from the results and create a list of dictionaries
    stock_data = [{'name': result['stock_name'], 'symbol': result['symbol']} for result in results]
    print(stock_data)
    # Return the list of stock data
    return stock_data

@Stock_Data.route('/Watch_list', methods=['GET'])
def send_watch_list():
    stock_data = Watch_list()
    json_data = json.dumps(stock_data, default=json_serial)

    return json_data

# Watch_list()
