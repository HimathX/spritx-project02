import pandas as pd
from pymongo import MongoClient
from pymongo.server_api import ServerApi

# MongoDB connection
uri = "mongodb+srv://himathnimpura:himathavenge@cluster0.bjaku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(uri, server_api=ServerApi('1'))

# Select the database and collection
db = client["Squad"]
user_collection = db["player"]

# Load CSV data
df = pd.read_csv("sample_data.csv")
# Convert DataFrame to dictionary format
data = df.to_dict(orient="records")

# Insert data into MongoDB
if data:
    user_collection.insert_many(data)
    print("CSV data successfully added to MongoDB User_Details database!")
else:
    print("CSV file is empty. No data inserted.")
