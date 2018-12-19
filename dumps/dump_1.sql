-- Drops the Schools_db if it exists currently --
DROP DATABASE IF EXISTS Happiness;
CREATE DATABASE Happiness;
-- Makes it available for use
USE Happiness;
CREATE TABLE Country_lon_lng (
Country  		Varchar(25) Primary key , 
Lat				double,
Lng				double
) ;
-- select * from Country_lon_lng;
CREATE TABLE Country_Region  
(
 Country      Varchar(25) , 
 Region       Varchar(50) 
);
-- select * from Country_Region;
CREATE TABLE Happiness_Master 
(
Country				Varchar(25), 
Happiness_year		Integer,
Happiness_rank		Integer,
Happiness_score		double,
std_error			double,
Economy				double,
Family				double,
Health				double,
Freedom				double,
Corruption			double,
Generosity			double,
Dystopia			double
);


-- Update Happiness_Master set Happiness_year = '2015' where Happiness_year = Null;
