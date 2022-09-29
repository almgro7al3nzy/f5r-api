from flask import render_template, jsonify, request
from pymongo import MongoClient
import json

from server import app

GET_REQUEST = "GET"
POST_REQUEST = "POST"

client = MongoClient("localhost", 27017)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/login', methods=[GET_REQUEST, POST_REQUEST])
def login():
    users = client.nuscc.user
    print(request.json)
    user_email = request.json.get("email")
    user_password = request.json.get("password")

    user_exist = users.count_documents({"email": user_email})
    if user_exist:
        user_info = users.find_one({"email": user_email})
        if user_info["password"] == user_password:
            return jsonify({"response": "Login Succeed"})
        else:
            return jsonify({"response": "Incorrect Password"})
    else:
        return jsonify({"response": "User Not Found"})

@app.route('/api/register', methods=[GET_REQUEST, POST_REQUEST])
def register():
    users = client.nuscc.user
    user_name = request.json.get("user_name")
    user_email = request.json.get("email")
    user_password = request.json.get("password")

    user_exist = users.count_documents({"email": user_email})
    if user_exist:
        return jsonify({"response": "Email Already Registered"})
    else:
        user_info = {"user_name": user_name, "email": user_email, "password": user_password}
        users.insert(user_info)
        return jsonify({"response": "Register Succeed"})

@app.route('/api/update_info', methods=[GET_REQUEST, POST_REQUEST])
def update_info():
    users = client.nuscc.user
    user_name = request.json.get("user_name")
    user_email = request.json.get("email")
    user_phone = request.json.get("phone")
    user_city = request.json.get("city")
    user_country = request.json.get("country")
    user_password = request.json.get("password")

    user_exist = users.count_documents({"email": user_email})
    if user_exist:
        query = {"email": user_email}
        new_info = {"$set":{
            "user_name": user_name,
            "phone": user_phone,
            "city": user_city,
            "country": user_country,
            "password": user_password
            }}
        users.update_one(query, new_info)
        return jsonify({"response": "Update Succeed"})
    else:
        return jsonify({"response": "Email Not Exist"})

@app.route('/api/search_rooms')
def all_rooms():
    rooms = client.nuscc.rooms

    rooms_db = rooms.find()
    rooms_list = []
    for room in rooms_db:
        rooms_list.append({"room_name": room["room_name"], "description": room["description"]})

    print(rooms_list)
    return jsonify({"rooms": rooms_list})


@app.route('/api/search_users')
def all_users():
    users = client.nuscc.user

    users_db = users.find()
    users_list = []
    for user in users_db:
        user_info = {
                "avatarUrl": "",
                "name": user.get("user_name") or "",
                "email": user.get("email") or "",
                "phone": user.get("phone") or "",
                "created_date": user.get("created_date") or "",
                "country": user.get("country") or "",
                "city": user.get("city") or ""
                }
        # users_list.append({"room_name": room["room_name"], "description": room["description"]})
        users_list.append(user_info)

    print(users_list)
    return jsonify({"users": users_list})

@app.route('/api/create_room', methods=[GET_REQUEST, POST_REQUEST])
def create_room():
    rooms = client.nuscc.rooms
    room_name = request.json.get("room_name")
    description = request.json.get("description")

    room_exist = rooms.count_documents({"room_name": room_name})
    if room_exist:
        return jsonify({"response": "Room Already Created"})
    else:
        room_info = {"room_name": room_name, "description": description}
        rooms.insert(room_info)
        return jsonify({"response": "Create Succeed"})

@app.route('/api/industry/<industry>')
def stocks_info(industry):
    res_dict = get_stocks_info(industry)
    return jsonify(res_dict)
