from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import json

# Use a properly formatted connection string
uri = "mongodb+srv://himathnimpura:himathavenge@cluster0.bjaku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db1 = client["Squad"]  # Ensure database name is correct
player_collection = db1["player"]  # Ensure collection name is correct

db2 = client["User_Details"]  # Ensure database name is correct
user_collection = db2["user"]  # Ensure collection name is correct

# Check if connection is successfu
try:
    client.admin.command('ping')
    print("Successfully connected to MongoDB!")
except Exception as e:
    print(f"ongoDB Connection Error: {e}")
