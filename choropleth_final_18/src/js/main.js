var map = L.map('map', {
    minZoom: 2,
    maxZoom: 10,
    zoomControl: true
}).setView([0, 0], 3);

// var map = L.map('map').setView([37.8, -96], 4);

var happinessById = {};

/**
 * Returns color based on population.
 * @param d
 * @returns {string}
 */
 
 function getColor(d) {
    return d > 150 ? '#800026' :
           d > 130  ? '#BD0026' :
           d > 110  ? '#E31A1C' :
           d > 90  ? '#FC4E2A' :
           d > 70   ? '#FD8D3C' :
           d > 50   ? '#FEB24C' :
           d > 30   ? '#FED976' :
                      '#FFEDA0';
}

function getColor1(d) {
	//if (year === "2015"){ a = '#4d004b'; b= '#8c6bb1';c ='#8c96c6'; d='#9ebcda';e='#bfd3e6'; f='#bfd3e6'; g='#F7FCFD'};
	//if (year === "2016"){ a = '#edf8b1'; b= '#7fcdbb';c ='#e5f5e0'; d='#a1d99b';e='#f7fcb9'; f='#addd8e' ; g='#31a354'};
	//if (year === "2017"){ a = '#f03b20'; b= '#fff7bc';c ='#fec44f'; d='#d95f0e';e='#ffeda0'; f='#feb24c'; g='#31a354'};
    return d > 150 ? '#4d004b':
        d > 130 ? '#8c6bb1' :
            d > 110 ? '#8c96c6' :
                d > 90 ? '#9ebcda' :
                    d > 70 ? '#bfd3e6' :
                        d > 50 ? '#bfd3e6' :
                            d > 30 ? '#F7FCFD':
                                'grey';
}

function getColor2(d, year) {
    if (year === "2016"){    return d > 150 ? '#0b5345' :
        d > 130 ? '#196f3d' :
            d > 120 ? '#239b56' :
                d > 100 ? '#138d75' :
                    d > 80 ? '#27ae60' :
                        d > 40 ? '#58868d' :
                            d > 20 ? '#73c6b6' :
							 d > 0 ? '#ABEBC6' :
                                '#F5EEF8';};
	if (year === "2017"){ return d > 150 ? '#800026' :
        d > 130 ? '#BD0026' :
            d > 120 ? '#E31A1C' :
                d > 100 ? '#FC4E2A' :
                    d > 80 ? '#FD8D3C' :
                        d > 40 ? '#FEB24C' :
                            d > 20 ? '#FED976' :
							d > 0 ? '#FFEDA0' :
                                '#F5EEF8';};
	if (year === "2015"){  return d > 150 ? '#4d004b':
        d > 130 ? '#8c6bb1' :
            d > 120 ? '#162e45' :
                d > 100 ? '#2c4e6f' :
                    d > 80 ? '#49739a' :
                        d > 40 ? '#7399bd' :
                            d > 20 ? '#a0b9d2':
							d > 0 ? '#d3e0ec' :
                                '#F5EEF8';};

    
}


function getColor3(d) {
    return d > 150 ? '#f03b20' :
        d > 130 ? '#fff7bc' :
            d > 120 ? '#fec44f' :
                d > 100 ? '#d95f0e' :
                    d > 80 ? '#ffeda0' :
                        d > 40 ? '#feb24c' :
                            d > 20 ? '#31a354' :
                                'grey';
}


var tileLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    noWrap: true,
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(map);

var _r = "2015";
var filval = "src/data/happy.json";


function sndForm()
{

row = document.getElementById("selector");
_r = row.options[row.selectedIndex].value;

if (_r === "2015") { filval = "src/data/happy.json"};
if (_r === "2016") { filval = "src/data/happy2.json"};
if (_r === "2017") { filval = "src/data/happy3.json"};


var xhr = new XMLHttpRequest();				

xhr.open('GET', filval);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function () {
    if (xhr.status === 200) {
        var population = JSON.parse(xhr.responseText);
        population.forEach(function (d) {
            happinessById[d.Country] = {
                total: +d.total,
                Happiness_Rank: +d.Happiness_Rank,
                Happiness_Score: +d.Happiness_Score
            }
        });

    }
};
xhr.send();

var xhr1 = new XMLHttpRequest();

xhr1.open('GET', "src/data/world.geo.json");
xhr1.setRequestHeader('Content-Type', 'application/json');
xhr1.onload = function () {
    if (xhr1.status === 200) {
        var world = JSON.parse(xhr1.responseText);

        var geoJsonLayer = L.geoJson(world, {
            style: function (feature) {
                var country = feature.properties.name;
                total = happinessById[country] && happinessById[country]["Happiness_Rank"];


                return {
					
                    fillColor: (total ? getColor2(total,_r) : getColor2(0, _r)),
                    fillOpacity: 0.8,
                    weight: 1,
                    color: 'grey'
                };
            },
            onEachFeature: function (feature, layer) {
                layer.on({
                    'mousemove': function (e) {
                        //Handle mousemove event
                        e.target.setStyle({
                            weight: 2
                        });

                        details = feature.properties;
                        country = details.name;
                        document.getElementsByClassName("country")[0].innerHTML = country;
                        document.getElementsByClassName("Score")[0].innerHTML = "Happiness_Score " + (happinessById[country] ? happinessById[country].Happiness_Score : "¯\\_(ツ)_/¯");
                        document.getElementsByClassName("Rank")[0].innerHTML = "Happiness_Rank " + (happinessById[country] ? happinessById[country].Happiness_Rank : "¯\\_(ツ)_/¯");
                        document.getElementsByClassName("details")[0].style.visibility = 'visible';
                    },
                    'mouseout': function (e) {
                        //Handle mouseout event
                        e.target.setStyle({
                            weight: 1
                        });
                    },
                    'click': function (e) {
                        //Handle click event
                    }
                });
            }
        }).addTo(map);
	    
	
		 
		 
    };
};
xhr1.send();

};


var xhr = new XMLHttpRequest();				

xhr.open('GET', filval);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function () {
    if (xhr.status === 200) {
        var population = JSON.parse(xhr.responseText);
        population.forEach(function (d) {
            happinessById[d.Country] = {
                total: +d.total,
                Happiness_Rank: +d.Happiness_Rank,
                Happiness_Score: +d.Happiness_Score
            }
        });

    }
};
xhr.send();


var xhr1 = new XMLHttpRequest();

xhr1.open('GET', "src/data/world.geo.json");
xhr1.setRequestHeader('Content-Type', 'application/json');
xhr1.onload = function () {
    if (xhr1.status === 200) {
        var world = JSON.parse(xhr1.responseText);

        var geoJsonLayer = L.geoJson(world, {
            style: function (feature) {
                var country = feature.properties.name;
                total = happinessById[country] && happinessById[country]["Happiness_Rank"];

                return {
                    fillColor: (total ? getColor1(total) : getColor1(0)),
                    fillOpacity: 0.8,
                    weight: 1,
                    color: 'grey'
                };
            },
            onEachFeature: function (feature, layer) {
                layer.on({
                    'mousemove': function (e) {
                        //Handle mousemove event
                        e.target.setStyle({
                            weight: 2
                        });

                        details = feature.properties;
                        country = details.name;
                        document.getElementsByClassName("country")[0].innerHTML = country;
                        document.getElementsByClassName("Score")[0].innerHTML = "Happiness_Score " + (happinessById[country] ? happinessById[country].Happiness_Score : "¯\\_(ツ)_/¯");
                        document.getElementsByClassName("Rank")[0].innerHTML = "Happiness_Rank " + (happinessById[country] ? happinessById[country].Happiness_Rank : "¯\\_(ツ)_/¯");
                        document.getElementsByClassName("details")[0].style.visibility = 'visible';
                    },
                    'mouseout': function (e) {
                        //Handle mouseout event
                        e.target.setStyle({
                            weight: 1
                        });
                    },
                    'click': function (e) {
                        //Handle click event
                    }
                });
            }
        }).addTo(map);
	 
			function style(feature) {
				return {
				weight: 2,
				opacity: 1,
				color: 'white',
				dashArray: '3',
				fillOpacity: 0.7,
				fillColor: getColor(feature.properties.Happiness_Rank)
				};
			};

		var legend1 = L.control({position: 'bottomright'});
		var legend2 = L.control({position: 'bottomright'});
		var legend3 = L.control({position: 'bottomright'});
		var div1 = L.DomUtil.create('div', 'info legend');
		var div2 = L.DomUtil.create('div', 'info legend');
		var div3 = L.DomUtil.create('div', 'info legend');
					
		legend1.onAdd = function (map) {


	     //var div = L.DomUtil.create('div', 'info legend'),
		 var 
		 grades = [0, 20, 40, 80, 100, 120, 130, 150],
		 labels = ['<strong> YEAR 2015 </strong>'],
		 from, to;
		 for (var i = 0; i < grades.length; i++) {
		 from = grades[i];
		 to = grades[i + 1];

		 labels.push(
		     '<i style="background:' + getColor2(from + 1,'2015') + '"></i> ' +
		     from + (to ? '&ndash;' + to : '+'));
	     }

	   
		 div1.innerHTML = labels.join('<br>');
		
	     return div1;
	    };
		
		 legend1.addTo(map);
		 
		 legend2.onAdd = function (map) {


	     //var div = L.DomUtil.create('div', 'info legend'),
		 var 
		 grades = [0, 20, 40, 80, 100, 120, 130, 150],
		 labels = ['<strong> YEAR 2016 </strong>'],
		 from, to;
		 for (var i = 0; i < grades.length; i++) {
		 from = grades[i];
		 to = grades[i + 1];

		 labels.push(
		     '<i style="background:' + getColor2(from + 1,'2016') + '"></i> ' +
		     from + (to ? '&ndash;' + to : '+'));
	     }

	   
		 div2.innerHTML = labels.join('<br>');
		
	     return div2;
	    };
		
		 legend2.addTo(map);
		 legend3.onAdd = function (map) {


	     //var div = L.DomUtil.create('div', 'info legend'),
		 var 
		 grades = [0, 20, 40, 80, 100, 120, 130, 150],
		 labels = ['<strong> YEAR 2017 </strong>'],
		 from, to;
		 for (var i = 0; i < grades.length; i++) {
		 from = grades[i];
		 to = grades[i + 1];

		 labels.push(
		     '<i style="background:' + getColor2(from + 1,'2017') + '"></i> ' +
		     from + (to ? '&ndash;' + to : '+'));
	     }

	   
		 div3.innerHTML = labels.join('<br>');
		
	     return div3;
	    };
		
		 legend3.addTo(map);
				
		
		
		};
		

    
};
xhr1.send();
