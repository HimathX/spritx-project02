from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import SignupRequest, LoginRequest, Player
from config import player_collection, user_collection
from passlib.context import CryptContext
from fastapi.responses import JSONResponse
from datetime import datetime, timedelta
import uuid

app = FastAPI()

# CORS Configuration
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@app.post("/signup")
def signup(data: SignupRequest):
    doc = dict(data)
    
    # Check if username already exists in MongoDB
    if user_collection.find_one({"username": doc["username"]}):
        raise HTTPException(status_code=400, detail="Username already taken")

    # Hash the password before storing
    doc["password"] = str(pwd_context.hash(doc["password"]))
    
    # Insert data into MongoDB
    user_collection.insert_one(doc)
    
    return {"message": "Signup successful! Redirecting to login..."}


@app.post("/login")
def login(data: LoginRequest):
    user = user_collection.find_one({"username": data.username})

    if not user or not pwd_context.verify(data.password, user["password"]):
        raise HTTPException(status_code=400, detail="Invalid username or password")
    
    return {"message": "Login successful", "username": user["username"]}

@app.get("/players")
def get_all_players():
    players = list(player_collection.find({}, {"_id": 0}))  # Exclude MongoDB _id from results
    return {"players": players}

@app.get("/profile")
def profile(username: str):
    user = user_collection.find_one({"username": username})

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return {"message": f"Hello, {user['username']}!"}

@app.post("/logout")
def logout():
    return {"message": "Logged out successfully"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8093)