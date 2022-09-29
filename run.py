from __future__ import print_function
from gevent.pywsgi import WSGIServer
from werkzeug.serving import run_with_reloader

from server import app

# app.config['STATIC_FOLDER'] = './client/assets'

def main():
    port = 5001
    http_server = WSGIServer(('0.0.0.0', port), app)
    print("start server, listening at port 5001...")
    http_server.serve_forever()

if __name__ == "__main__":
    run_with_reloader(main)
