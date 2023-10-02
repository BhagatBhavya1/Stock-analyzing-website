from flask import Flask, jsonify
from flask_cors import CORS
from Fetch import Stock_Data
from update import Stock_Update

app = Flask(__name__)
CORS(app)

app.register_blueprint(Stock_Data)
app.register_blueprint(Stock_Update)

if __name__ == '__main__':
    app.run(debug=True)