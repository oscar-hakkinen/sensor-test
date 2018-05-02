var chart;
var starttime = Date.now();
var dps = []; 

$(document).on("pagecreate", "#page1", function () {

 
	chart = new CanvasJS.Chart("chartContainer",{
		title :{
			text: "Live Data"
		},
		axisX: {						
			title: "Axis X Title"
		},
		axisY: {						
			title: "Units"
		},
		data: [{
      		type: "line",
      		dataPoints : dps
      	}]
	});
	 
	chart.render();
	
	
});

function updateChart(acceleration) {

	yVal = acceleration.x;
	xVal = acceleration.timestamp - starttime;
	dps.push({x: xVal,y: yVal,});
	
	if (dps.length >  100 )
      	{
      		dps.shift();				
      	}
		
	chart.render();		
	
	// update chart after specified time. 	
}