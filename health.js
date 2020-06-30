var spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1ohkWYClvrWqRd9TyiD5zWhh90Z_Vj-M32PgpUv40v58/edit#gid=0'

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
				0:{targetAxisIndex:0},
				1:{targetAxisIndex:1},
				2:{targetAxisIndex:1},
			}
        }		

        var chart = new google.visualization.LineChart(document.getElementById('myChart'))

        chart.draw(data, options)
	}
}
