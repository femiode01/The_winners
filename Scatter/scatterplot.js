// Traces
console.log(ds);

var trace1 = {
    x : ds.map( x => x.Happiness_Score),
    y : ds.map( x => x.Economy_GDP_per_capita),
    mode: "markers",
    type: "scatter",
    marker: {
        color: "#2077b4",
        symbol: "hexagram",
        size : 12,
        name : "GDP"
      }

};

var trace2 = {
    x : ds.map( x => x.Happiness_Score),
    y : ds.map(x => x.Health_Life_Expectancy),
    mode: "markers",
    type: "scatter",
    marker: {
        color: "orange",
        symbol: "diamond-x",
        size : 11,
        name: "Health"
      }

};

var data = [trace1,trace2];
console.log(data);
// Define the plot layout
var layout = {
  title: "Happiness Score vs GDP and Health",
  xaxis: { title: "GDP and Health" },
  yaxis: { title: "Happiness Score" }
};

// Plot - div tag with id "plot"
Plotly.newPlot("plot", data, layout);
