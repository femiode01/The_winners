// Traces
console.log(ds);

var trace1 = {
  y : ds.map( x => x.Country),
  x : ds.map( x => x.Dystopia_Residual),
  mode: "markers",
  orientation: 'h',
  type: "bar",
  name: "Dystopia Residual",
  marker: {
      color: "pink",
      width: 4     
    }
};
var trace2 = {
    y : ds.map( x => x.Country),
    x : ds.map( x => x.Family),
    mode: "markers",
    orientation: 'h',
    type: "bar",
    name: "Family",
    marker: {
        color: "red",
        width: 4     
      }
  };
  var trace3 = {
    y : ds.map( x => x.Country),
    x : ds.map( x => x.Health_Life_Expectancy),
    mode: "markers",
    orientation: 'h',
    type: "bar",
    name: "Life Expectancy",
    marker: {
        color: "orange",
        width: 4     
      }
  };  
  var trace4 = {
    y : ds.map( x => x.Country),
    x : ds.map( x => x.Freedom),
    mode: "markers",
    orientation: 'h',
    type: "bar",
    name: "Freedom",
    marker: {
        color: "blue",
        width: 4     
      }
  };  

  var trace5 = {
    y : ds.map( x => x.Country),
    x : ds.map( x => x.Trust_Government_Corruption),
    mode: "markers",
    orientation: 'h',
    type: "bar",
    name: "Corruption",
    marker: {
        color: "purple",
        width: 4     
      }
  };  
 
  var trace6 = {
    y : ds.map( x => x.Country),
    x : ds.map( x => x.Generosity),
    mode: "markers",
    orientation: 'h',
    type: "bar",
    name: "Generosity",
    marker: {
        color: "yellow",
        width: 4     
      }
  };  
  var trace7 = {
    y : ds.map( x => x.Country),
    x : ds.map( x => x.Economy_GDP_per_Capita),
    mode: "markers",
    orientation: 'h',
    type: "bar",
    name: "GDP",
    marker: {
        color: "green",
        width: 4    
      }
  };      

var data = [trace1,trace2,trace3,trace4,trace5,trace6,trace7];
console.log(data);
// Define the plot layout
var layout = {barmode: 'stack',
  autosize: false,
  width: 900,
  height: 700,
  title: "Happiness Ranking for Top 20 Countries - 2017",
  xaxis: { autorange: true,
    type: "linear"
    // title: "Country"
},    
//   yaxis: { title: "Happiness_Score",tickangle: -45,
  automargin: true,
  paper_bgcolor: '#17becf',
  plot_bgcolor: '#c7c7c7'  
}
// Plot - div tag with id "plot"
Plotly.newPlot("plot", data, layout);
