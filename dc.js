const spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1Ksj2eiGlwKCZwdE7K8vks6t5_5fuQM53gqFy8VZIa6Q/edit#gid=297257767'

google.charts.load('current', {'packages':['corechart']})
google.charts.setOnLoadCallback(drawChart)

function drawChart() {

	const query = new google.visualization.Query(spreadsheet_url)
	query.setQuery('SELECT A,B,C,D,E,F,G,H,I ORDER BY A')
	query.send(handleQueryResponse)

	function handleQueryResponse(response) {
		if(response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage())
			return
		}
		
		const data = response.getDataTable()
		
        const options = {
			isStacked: true,
			legend: {position: 'bottom'},
			seriesType: 'bars',
			series: {7: {targetAxisIndex:1, type:'line'}},
			colors: ['#FFCCFF','#CCFFFF','#FFCCCC','#CCFFCC','#FFCC99','#CCFF99','#CCCCCC','#0000FF'],
			interpolateNulls: true
        }

        const chart = new google.visualization.ColumnChart(document.getElementById('myChart'))

        chart.draw(data, options)
	}
}
