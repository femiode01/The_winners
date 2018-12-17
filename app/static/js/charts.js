jQuery(document).ready( function(){

	function createChart(ds){
		
		var trace1 = {
    	x : ds.map( x => x.Happiness_score),
	    y : ds.map( x => x.Economy),
	    mode: "markers",
	    type: "scatter",
	    marker: {
		        color: "#2077b4",
		        symbol: "hexagram",
		        size : 12,
		        name : "GDP"
		      }
		};
		console.log(ds);
		var trace2 = {
		    x : ds.map( x => x.Happiness_score),
		    y : ds.map(x => x.Health),
		    mode: "markers",
		    type: "scatter",
		    marker: {
		        color: "orange",
		        symbol: "diamond-x",
		        size : 11,
		        name: "Health"
		      }

		};
		console.log(trace2);
		var data = [trace1,trace2];
		// Define the plot layout
		var layout = {
		  title: "Happiness Score vs GDP and Health",
		  xaxis: { title: "GDP and Health" },
		  yaxis: { title: "Happiness Score" }
		};

		// Plot - div tag with id "plot"
		Plotly.newPlot("plot", data, layout);
	}
	var url = "/api/charts";
	d3.json(url).then(function(data) {
		createChart(data);
	});
});