from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
app.debug=True
CORS(app)

from server.routes import index
