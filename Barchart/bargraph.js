// Traces
console.log(regiondata);

var trace1 = {
    // x : ds.map( x => x.Happiness_Score),
    // y : ds.map( x => x.Region),
    x : regiondata.map( x => x.Region),
    y : regiondata.map( x => x.Happiness_meanscore),
    mode: "markers",
    // orientation: 'h',
    type: "bar",
    name : "GDP",
    marker: {
        color: "red",
        width: 1
        // size : 9,
        // opacity: 0.4        
      }

};

// var trace2 = {
//     x : ds.map( x => x.Happiness_Score),
//     y : ds.map(x => x.Health_Life_Expectancy),
//     mode: "markers",
//     type: "scatter",
//     name: "Health",
//     marker: {
//         color: "rainbow",
//         // symbol: "diamond-x",
//         size : 9
        
//       }

// };

var data = [trace1];
console.log(data);
// Define the plot layout
var layout = {
  title: "Happiness Score vs Region",
  xaxis: { title: "World Region"},    
  yaxis: { title: "Happiness_Score",tickangle: -45,
  }
};

// Plot - div tag with id "plot"
Plotly.newPlot("plot", data, layout);

// d3.csv("source-data.csv", function(error, csv_data) {
//   var data = d3.nest()
//    .key(function(d) { return d.date;})
//    .rollup(function(d) { 
//     return d3.sum(d, function(g) {return g.value; });
//    }).entries(csv_data);
//  ...
//  });
// var nest = d3.nest()
//   .key(function(d) { return d.region; })
//   .sortKeys(d3.ascending)
//   .rollup(function(d) {
//     return {
//       meanVakValue: d3.mean(d, function(g) { return g[value]; })
//     };
//   })