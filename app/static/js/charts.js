jQuery(document).ready( function(){

	function createChart(ds){
		console.log(ds);
		var trace1 = {
			x: ds.map( d => d.region),
			y: ds.map( d => d.Average),
			text: ds.map( d => d.region),
			type: 'bar',
			name: '2015',
			marker: {
			color: 'rgb(49,130,189)',
			opacity: 0.7,
			}
		};

		// var trace2 = {
		//   x: [1,2,3,4,5,6,7,8,9,10],
		//   y: ds[1].map( d => d.Happiness_score),
		// 	text: ds[0].map( d => d.Country),
		//   type: 'bar',
		//   name: '2016',
		//   marker: {
		//     color: 'rgb(204,204,204)',
		//     opacity: 0.5
		//   }
		// };

		// var trace3 = {
		//   x: [1,2,3,4,5,6,7,8,9,10],
		//   y: ds[2].map( d => d.Happiness_score),
		// 	text: ds[0].map( d => d.Country),
		//   type: 'bar',
		//   name: '2017',
		//   marker: {
		//     color: 'rgb(204,55,109)',
		//     opacity: 0.5
		//   }
		// };

		var data = [trace1];

		var layout = {
		  title: 'Happiness Scores VS ?',
		  xaxis: {
		    tickangle: -45
		  },
		  barmode: 'group'
		};

		Plotly.newPlot('plot', data, layout);
	}
	var url = "/api/charts";
	d3.json(url).then(function(data) {
		createChart(data);
	});
});