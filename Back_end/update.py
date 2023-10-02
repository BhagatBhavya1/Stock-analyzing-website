from flask import Blueprint, request, jsonify
from Connection.db_connect import dbConnect
from bson import ObjectId
Stock_Update = Blueprint('Stock_Update', __name__)

@Stock_Update.route('/update_stock_state/<string:id>', methods=['PUT'])
def update_stock_state(id):
    try:
        # Get the new state from the request JSON data
        data = request.get_json()
        new_state = data.get('newState')

        # Update the stock state in MongoDB
        collection = dbConnect()
        collection.update_one({'_id': ObjectId(id)}, {'$set': {'status': new_state}})

        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
