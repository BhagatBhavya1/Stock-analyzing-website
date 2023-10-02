from flask import Flask, jsonify
from flask_cors import CORS
from Fetch import Stock_Data


app = Flask(__name__)
CORS(app)

app.register_blueprint(Stock_Data)


if __name__ == '__main__':
    app.run(debug=True)