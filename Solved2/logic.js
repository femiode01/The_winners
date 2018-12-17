// An array of cities and their locations
countries  = [{
  location : [
    18.10, -77.29
    
  ]   , 
    Country: "Jamaica",
    Happiness_Rank: "76",
    Happiness_Year: "2017",
    img: "image.jpg",
      },
  {
    location: [
      60.47, 8.46
    ],
      Country: "Norway",
      Happiness_Rank: "1",
      Happiness_Year: "2017",
      
    },
  
    { location: [
            56.13,-106.34
    ],
        Country: "Canada",
        Happiness_Rank: "7",
        Happiness_Year: "2017",
        
        },
    { location: [
            -25.27,133.77
    ],
        Country: "Australia",
        Happiness_Rank: "10",
        Happiness_Year: "2017",
       
        },
    {location: [      
      -35.67,-71.54
    ],
        Country: "Chile",
        Happiness_Rank: "20",
        Happiness_Year: "2017",
        
        },
    {
      location: [
        
        1.35,103.81
      ],
        Country: "Singapore",
        Happiness_Rank: "26",
        Happiness_Year : "2017",
        
        },
  
    { location: [
      28.03, 1.65
      
    ],
        Country: "Algeria",
        Happiness_Rank: "53",     
        Happiness_Year: "2017",
       
  }
  ];

 
// An array which will be used to store created cityMarkers
var countryMarkers = [];

for (var i = 0; i < countries.length; i++) {
  // loop through the cities array, create a new marker, push it to the cityMarkers array
  
  countryMarkers.push(
    L.marker(countries[i].location).bindPopup("<h1>" + countries[i].Country + "</h1><strong>Happiest country to live in this region<hr><p><strong>Ranked : " + countries[i].Happiness_Rank + "</p>" + "</h1><strong> Year : " + countries[i].Happiness_Year + "</p>"));
  }


// Add all the cityMarkers to a new layer group.
// Now we can handle them as one group instead of referencing each individually


var cityLayer = L.layerGroup(countryMarkers);

// Define variables for our tile layers
var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.satellite",
  accessToken: API_KEY
});

var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Only one base layer can be shown at a time
var baseMaps = {
  Light: light,
  Dark: dark
};

// Overlays that may be toggled on or off
var overlayMaps = {
  countries: cityLayer
};


// Create map object and set default layers
var myMap = L.map("map", {
  center: [31.20, 21.92],
  zoom: 1.5,
  layers: [light, cityLayer]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, layout).addTo(myMap);
