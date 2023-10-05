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
    # return jsonify(results)