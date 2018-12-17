//var url = `http://localhost:78/Desktop/Project%202%20-%20Data%20Visualization/happiness_data.json`;
function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input value from the form
  var year = d3.select("#yearInput").node().value;
  console.log(year);

  // clear the input value
  d3.select("#yearInput").node().value = "";

  // Build the plot with the new stock
  buildPlot(year);
}

function buildPlot(year) {
  console.log(year);
  d3.json(url).then(function(value) {

    // Grab values from the data json object to build the plots
    var Score = value.Happiness_Score;
    var GDP = value.Economy_GDP_per_capita;
    var health = value.Health_Life_Expectancy;
  
    var trace1 = {
      type:"scatter",
      mode:"markers",
      name:"GDP",
      x: GDP,
      y: Score,
      marker: {
        color: "#2077b4",
        size : 12        
      }
    };

    var trace2 = {
      type:"scatter",
      mode:"markers",
      name:"Health",
      x: health,
      y: Score,
      marker: {
        color: "rainbow",
        // symbol: "diamond-x",
        size : 9
        
      }
    };
    var data = [trace1,trace2];
    var layout = {
    title: "Happiness Score vs GDP and Health",
    xaxis: { title: "GDP and Health" },
    yaxis: { title: "Happiness Score" }
    };

  Plotly.newPlot("plot", data, layout);   
  });       
 
}

d3.select("#submit").on("click", handleSubmit);

