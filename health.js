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
				'2006-11-13',
				'2007-10-16',
				'2008-12-02',
				'2009-09-02',
				'2010-04-26',
				'2010-11-02',
				'2011-11-21',
				'2012-12-27',
				'2013-11-12',
				'2014-12-26',
				'2016-01-08',
				'2017-01-24',
				'2017-06-23',
				'2018-05-28',
				'2019-04-12'
			],
			[
				'総合判定',
				null,
				null,
				null,
				null,
				5,
				2,
				4,
				2,
				3,
				2,
				3,
				1,
				1,
				1,
				1
			],
			[
				'視力(右)',
				1.5,
				1.5,
				1.5,
				1.2,
				0.9,
				0.4,
				0.3,
				0.4,
				0.3,
				0.2,
				0.3,
				0.1,
				0.3,
				0.1,
				0.1
			],
			[
				'視力(左)',
				1.5,
				1.5,
				1.2,
				1.5,
				1.2,
				1.5,
				1.0,
				1.2,
				1.0,
				0.4,
				0.2,
				0.6,
				0.3,
				0.4,
				0.4
			]
		],
		axes: {
			'総合判定': 'y',
			'視力(右)': 'y2',
			'視力(左)': 'y2'
		},
		type: 'line',
		order: null
	},
	axis: {
		x: {
			type: 'timeseries',
			tick: {
				format: '%Y-%m-%d'
			}
		},
		y: {
			tick: {
				format: function(d) {
					switch(d) {
						case 1: return "E"; break;
						case 2: return "D"; break;
						case 3: return "C"; break;
						case 4: return "B"; break;
						case 5: return "A"; break;
						default: return d;
					}
				},
				values: [1,2,3,4,5]
			}
		},
		y2: {
			min: 0,
			show: true,
			tick: {
				values: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0,1.2,1.5]
			}
		}
	}
})
