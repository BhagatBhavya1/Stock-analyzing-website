from flask import Blueprint, request, jsonify
import pymongo
from Connection.db_login import dbConnectLogin
Login = Blueprint('login', __name__)

@Login.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']
    
    users_collection = dbConnectLogin()
    print(users_collection)
    user = users_collection.find_one({'email': email, 'pass': password})
    
    if user:
        # Return a success response
        return jsonify({'message': 'Login successful'})
        # return "yes"
    else:
        # Return an error response
        return jsonify({'message': 'Login failed'})
        # return "false"
