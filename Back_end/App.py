from flask import Flask, jsonify
from flask_cors import CORS
from Fetch import Stock_Data
from update import Stock_Update
from History_NSE.Stock import Stock_get

app = Flask(__name__)
CORS(app)

app.register_blueprint(Stock_Data)
app.register_blueprint(Stock_Update)
app.register_blueprint(Stock_get)

if __name__ == '__main__':
    app.run(debug=True)