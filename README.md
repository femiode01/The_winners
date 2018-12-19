# Project-3|| The_winners
=========================
## World Happiness Report:

The World Happiness Report is a landmark survey of the state of global happiness. The first report was published in 2012, the second in 2013, the third in 2015, and the fourth in the 2016 Update. The World Happiness 2017, which ranks 155 countries by their happiness levels, was released at the United Nations at an event celebrating International Day of Happiness on March 20th. The report continues to gain global recognition as governments, organizations and civil society increasingly use happiness indicators to inform their policy-making decisions. Leading experts across fields – economics, psychology, survey analysis, national statistics, health, public policy and more – describe how measurements of well-being can be used effectively to assess the progress of nations. The reports review the state of happiness in the world today and show how the new science of happiness explains personal and national variations in happiness.

We are using three csv files that consisting of three years of data (2015,2016 & 2017)
The columns can be described as follows:
•	Country : Name of the country.
•	Region : Region the country belongs to.
•	Happiness : Rank of the country based on the Happiness Score.
•	Happiness Score : A metric measured in 2015 by asking the sampled people the question: "How would you rate your happiness on                     a scale of 0 to 10 where 10 is the happiest."
•	Standard Error : The standard error of the happiness score.
•	Economy(GDP per Capita) : The extent to which GDP contributes to the calculation of the Happiness Score.
•	Family, Health(Life Expectancy) : The extent to which Family contributes to the calculation of the Happiness Score
•	Freedom : The extent to which Freedom contributed to the calculation of the Happiness Score.
•	Trust(Government Corruption) : The extent to which Perception of Corruption contributes to Happiness Score.
•	Generosity : The extent to which Generosity contributed to the calculation of the Happiness Score.
•	Dystopia Residual : The extent to which Dystopia Residual contributed to the calculation of the Happiness Score.

Here I have tried to plot the three years of happiness rank for each of the country on World Choropleth Map.
First I converted the data into CSV to a JSON file and then put the data in a Plotly map using D3 to see in a World Map:
![image](https://user-images.githubusercontent.com/41707119/50077761-4cc0fa80-01b3-11e9-9e7a-18de7c6bc5a8.png)

Here is the link to my codepen information to see it in your browser:https://codepen.io/payedas7/pen/LMZpJg

The very first look of the Choropleth World map using Leaflet Js , D3 and topoJson was as shown below:
![image](https://user-images.githubusercontent.com/41707119/50077868-93165980-01b3-11e9-801a-b9fea161417e.png)

I have worked on the above code and tried to put the filter for each of the year data as well as legends, pop up information for each country and different colour code for different year.

Worked with the leaflet provided control option to get the three diffrent legends for the three consicutive year data for more than 150 countries. It would look like something as shown below:

![image](https://user-images.githubusercontent.com/41707119/50202125-ee1e8c80-032a-11e9-93da-b40e98c0047f.png)
