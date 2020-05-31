var chart = c3.generate({
	size: {
		height: 700,
		width: 1000
	},
	data: {
		x: 'x',
		columns: [
			[
				'x',
				'2019-11-01',
				'2019-12-01',
				'2020-01-01',
				'2020-02-01',
				'2020-03-01',
				'2020-04-01',
				'2020-05-01'
			],
			[
				'VentageScore 4.0',
				680,
				679,
				687,
				697,
				702,
				700,
				633
			],
			[
				'FICO Score',
				null,
				null,
				null,
				null,
				null,
				null,
				696
			]
		],
		type: 'line',
		order: null
	},
	axis: {
		x: {
			type: 'timeseries',
			tick: {
				format: '%Y/%m'
			}
		},
		y: {
			min: 600
		}
	}
})
