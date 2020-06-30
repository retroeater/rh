var spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1Dw6yfRR_S35frCjiQ0o2jqVCn32a1eovHVZQLIEHVqA/edit#gid=0'

google.charts.load('current', {'packages':['corechart']})
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
	var query = new google.visualization.Query(spreadsheet_url)
	query.setQuery('SELECT A,B,C ORDER BY A')
	query.send(handleQueryResponse)

	function handleQueryResponse(response) {
		if(response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage())
			return
		}
		
		var data = response.getDataTable()
		
        var options = {
			legend: {position: 'bottom'},
        }

        var chart = new google.visualization.LineChart(document.getElementById('myChart'))

        chart.draw(data, options)
	}
}
