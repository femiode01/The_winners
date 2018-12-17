import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template

app = Flask(__name__)

#################################################
# Database Setup
#################################################

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:passowrd@server/happiness'
# db = SQLAlchemy(app)

import pymysql

db = pymysql.connect(host='localhost',
        user='root',
        password='password',
        db='happiness',
        cursorclass=pymysql.cursors.DictCursor)
cursor = db.cursor()

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


@app.route("/map")
def heat():

    return render_template("index.html")


@app.route("/scatter")
def scatter():
    
    return render_template("scatter.html")


@app.route("/charts")
def charts():

    return render_template("charts.html")

@app.route("/api/charts")
def apiCharts():
	sql = "SELECT * FROM happiness_master"
	cursor.execute(sql)
	results = cursor.fetchall()
	print(results)
	return jsonify(results)

if __name__ == "__main__":
    app.run()
