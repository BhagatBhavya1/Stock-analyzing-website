# all required libraries

import pandas as pd
import datetime
import logging
from History_NSE.Scrapee import scrape_data
# import Scrapee  as s
from flask import Blueprint,jsonify
logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s:%(message)s')
pd.options.mode.chained_assignment = None


def parse_date(text):
    """
    Parses date in either YYYY-MM-DD or DD-MM-YYYY format
    """

    for fmt in ('%Y-%m-%d', '%d-%m-%Y'):
        try:
            return datetime.datetime.strptime(text, fmt)
        except ValueError:
            pass

    raise ValueError('Dates should be in YYYY-MM-DD or DD-MM-YYYY format')

Stock_get = Blueprint('get_data', __name__)
@Stock_get.route('/get_data', methods=['GET'])
def get_data(stock_symbol="RELIANCE", full_data=False, start_date='15-9-2020', end_date='1-10-2020v'):
    stock_symbol = stock_symbol.replace('&', '%26')

    if full_data is True:
        parsed_start_date = datetime.datetime.strptime('1-1-1992', "%d-%m-%Y")
        parsed_end_date = datetime.datetime.today()

    else:

        if start_date is None or end_date is None:
            raise ValueError("Provide start and end date.")

        parsed_start_date = parse_date(start_date)
        parsed_end_date = parse_date(end_date)

        if parsed_start_date > parsed_end_date:
            raise ValueError("Starting date is greater than end date.")

    result = scrape_data(start_date=parsed_start_date, end_date=parsed_end_date, input_type='stock', name=stock_symbol)
    print(result)
    return result.to_json(orient='records', date_format='iso')
