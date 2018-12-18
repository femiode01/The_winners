jQuery(document).ready( function(){

	function createChart(ds){		
		var trace1 = {
    	x : ds.map( x => x.Happiness_score),
	    y : ds.map( x => x.Economy),
	    mode: "markers",
	    type: "scatter",
	    name: "GDP",
	    marker: {
		        color: "#2077b4",
		        size : 12,
		        name : "GDP"
		      }
		};
		var trace2 = {
		    x : ds.map( x => x.Happiness_score),
		    y : ds.map(x => x.Health),
		    mode: "markers",
		    type: "scatter",
		    name: "Health",
		    marker: {
		        color: "orange",
		        symbol: "diamond-x",
		        size : 11,
		        name: "Health"
		      }

		};

		var data = [trace1,trace2];
		// Define the plot layout
		var layout = {
		  title: "Happiness Score vs GDP and Health",
		  xaxis: { title: "GDP and Health" },
		  yaxis: { title: "Happiness Score" }
		};

		// Plot - div tag with id "plot"
		
		setTimeout(function(){
			$("#plot").removeClass('hide');
			Plotly.newPlot("plot", data, layout, {responsive: true});
		}, 600);
	}
	var url = "/api/scatter";
	$("#plot").addClass('hide animated fadeInDown');
	d3.json(url).then(function(data) {
		createChart(data);
	});
});