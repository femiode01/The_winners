from app import db

def getChartData():
	cursor = db.cursor()
	sql = "SELECT * FROM country_region"
	cursor.execute(sql)
	results = cursor.fetchall()

	return results
