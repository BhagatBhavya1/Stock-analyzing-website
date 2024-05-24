from fyers_apiv3.FyersWebsocket import data_ws
from flask_socketio import emit,Namespace
# Import the required module from the fyers_apiv3 package
from fyers_apiv3 import fyersModel
from algo import get_analysis
import json
from Fetch import Watch_list
from flask import Flask, request
fyers = None  # Initialize fyers outside of the live function    @app.route('/live_data', methods=['GET'])
# Example of using the namespace with SocketIO
client_id = "BDO8O5UC0N-100"
stock_symbol=[]
live_data_namespace = '/live_data'
access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MTU2NjIxODYsImV4cCI6MTcxNTczMzA0NiwibmJmIjoxNzE1NjYyMTg2LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbVF1MXF4Q05NNzU5V0VJc2s3clJITzNwWV9kSnhCV3JON0oxWkZ5S2RyT1VPS29pNlVNQVNtdUNjdVk1R1VVcmJXb1p5UG9QN0J5SWtUMzVxX3paeXZ2YjdHLTVLZUxhbFE1QkhBSUxrNWlrMlJXcz0iLCJkaXNwbGF5X25hbWUiOiJCSEFWWUFLVU1BUiBQUkFLQVNIQkhBSSBCSEFHQVQiLCJvbXMiOiJLMSIsImhzbV9rZXkiOiIxNjc2ZjVkOTk3MjFlZWFhZmM1ZmYxOTQwYjVkNmIwZGFjZGQ2NmUyNDQ1OTQzYjVjOTMxNjExNiIsImZ5X2lkIjoiWUIwMDI2NCIsImFwcFR5cGUiOjEwMCwicG9hX2ZsYWciOiJOIn0.XaP48GY5S1Q4USzc3KvDhenSaG05Zo3yjLpP4aF74Qw"

live_data = []
class LiveDataNamespace(Namespace):
    def on_connect(self):
        print('Client Connected :')
        global fyers
        global stock_symbol
        x = request.args.get('status')
        symbol = request.args.get('symbol')
        # if(x == "All"):
        results = Watch_list()
        stock_symbol = [result['symbol']for result in results]
            # fyers.subscribe(symbols=stock_symbol, data_type="SymbolUpdate")
            # self.emit('stock_list', results)
        # else:
        #     fyers.unsubscribe(symbols=stock_symbol, data_type="SymbolUpdate")
        #     stock_symbol =[]
        #     stock_symbol.append(symbol)
        #     fyers.subscribe(symbols=stock_symbol, data_type="SymbolUpdate")
        print(stock_symbol)
        fyers = data_ws.FyersDataSocket(
            access_token=access_token,  # Replace with your actual access token
            log_path="",
            litemode=False,
            write_to_file=False,
            reconnect=True,
            on_connect=self.onopen,
            on_close=self.onclose,
            on_error=self.onerror,
            on_message=self.onmessage
        )
        # Establish a connection to the Fyers WebSocket
        fyers.connect()

    def on_disconnect(self):
        global fyers
        fyers.close_connection()
        print(f"Client  disconnected from chat namespace")

    def onmessage(self, message):
        # Emit the received message to connected clients
        self.emit('message', message)

    def onerror(self, message):
        # Handle WebSocket errors and emit them to connected clients
        self.emit('message', message)

    def onclose(self, message):
        # Handle WebSocket connection close events and emit them to connected clients
        self.emit('message', message)
        fyers.close_connection()

    def onopen(self):
        global fyers
        global stock_symbol
        # Callback function to subscribe to data type and symbols upon WebSocket connection.
        # Specify the data type and symbols you want to subscribe to
        data_type = "SymbolUpdate"
        # Subscribe to the specified symbols and data type
        symbols = stock_symbol
        fyers.subscribe(symbols=symbols, data_type=data_type)
        # fyers.holdings()
        fyers.keep_running()

    def on_message(self):
        global fyers
        fyers = fyersModel.FyersModel(client_id=client_id, is_async=False, token=access_token, log_path="")

        # Make a request to get the user profile information
        response = fyers.get_profile()
        print(response)
        self.emit('message', "hello bhavya", namespace=live_data_namespace)
