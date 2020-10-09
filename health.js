const spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1w0JPr5zm3n0GtCbYjc_uAiT22cO_mqAh-_wwdyV9MIE/edit?sheet=health'

google.charts.load('current', {'packages':['corechart']})
google.charts.setOnLoadCallback(drawChart)

function drawChart() {

	const query = new google.visualization.Query(spreadsheet_url)
	query.setQuery('SELECT A,B,C,D ORDER BY A')
	query.send(handleQueryResponse)

	function handleQueryResponse(response) {
		if(response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage())
			return
		}
		
		const data = response.getDataTable()
		
        const options = {
			legend: {position: 'bottom'},
			series: {
				0:{targetAxisIndex:0},
				1:{targetAxisIndex:1},
				2:{targetAxisIndex:1},
			}
        }		

        const chart = new google.visualization.LineChart(document.getElementById('myChart'))

        chart.draw(data, options)
	}
}
