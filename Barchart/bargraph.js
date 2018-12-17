// Traces
console.log(ds);

var trace1 = {
    x : ds.map( x => x.Happiness_Score),
    y : ds.map( x => x.Region),
    mode: "markers",
    orientation: 'h',
    type: "bar",
    name : "GDP",
    marker: {
        color: "orange",
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
  xaxis: { title: "Happiness Score"},    
  yaxis: { title: "World Region",tickangle: -45 }
};

// Plot - div tag with id "plot"
Plotly.newPlot("plot", data, layout);
