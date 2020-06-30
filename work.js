var spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1j_wbN73wC0KzVyGWCathxu34hj0SRxWxsejhNeOp-1Q/edit?usp=sharing'

google.charts.load('current', {'packages':['corechart']})
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
	var query = new google.visualization.Query(spreadsheet_url)
	query.setQuery('SELECT A,B,C,D ORDER BY A')
	query.send(handleQueryResponse)

	function handleQueryResponse(response) {
		if(response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage())
			return
		}
		
		var data = response.getDataTable()
		
        var options = {
			legend: {position: 'bottom'},
			series: {
				0:{targetAxisIndex:0,type:'line'},
				1:{targetAxisIndex:0,type:'bar'},
				2:{targetAxisIndex:1,type:'line'},
			},
			vAxes: {
				0:{},
				1:{}
			}
        }

        var chart = new google.visualization.ColumnChart(document.getElementById('myChart'))

        chart.draw(data, options)
	}
}
