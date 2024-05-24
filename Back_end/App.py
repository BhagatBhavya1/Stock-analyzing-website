from flask import Flask, jsonify
from flask_cors import CORS
from Fetch import Stock_Data
from update import Stock_Update
from History_NSE.Stock import Stock_get
from FNO import Fnoget
from Login import Login
from algo import Analysis
from flask_socketio import SocketIO
from live_stock import LiveDataNamespace
app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="http://localhost:3000")
CORS(app)


app.register_blueprint(Stock_Data)
app.register_blueprint(Stock_Update)
app.register_blueprint(Stock_get)
app.register_blueprint(Fnoget)
app.register_blueprint(Analysis)
app.register_blueprint(Login)

socketio.on_namespace(LiveDataNamespace('/chat'))
socketio.on_namespace(LiveDataNamespace('/all_watch'))

if __name__ == '__main__':
    socketio.run(app,debug=True)