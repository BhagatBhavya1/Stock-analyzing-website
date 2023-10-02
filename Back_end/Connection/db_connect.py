import pymongo

def dbConnect():
    # Replace these values with your MongoDB connection details
    mongo_client = pymongo.MongoClient("mongodb+srv://Kaizen:Kaizen990@cluster0.23ih314.mongodb.net/?retryWrites=true&w=majority")

    # print(mongo_client)
    db = mongo_client["Stock_Analysys"]
    # Replace 'your_collection_name' with the actual name of your collection
    collection = db["stocks"]
    # results = collection.find()
    return collection
