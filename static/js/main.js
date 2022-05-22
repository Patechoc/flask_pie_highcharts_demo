$(document).ready(function() {
	// $(chart_id).highcharts({
	// 	chart: chart,
	// 	title: title,
	// 	xAxis: xAxis,
	// 	yAxis: yAxis,
	// 	series: series
	// });

	// Create the chart
	Highcharts.chart('container', {
		chart: {
			type: 'pie'
		},
		title: {
			text: 'Browser market shares. January, 2018'
		},
		subtitle: {
			text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
		},

		accessibility: {
			announceNewData: {
				enabled: true
			},
			point: {
				valueSuffix: '%'
			}
		},

		plotOptions: {
			series: {
				dataLabels: {
					enabled: true,
					format: '{point.name}: {point.y:.1f}%'
				}
			}
		},

		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
		},

		series: [
			{
				name: "Browsers",
				colorByPoint: true,
				data: data_browser
			}
		],
		drilldown: {
			series: [
				{
					name: "Chrome",
					id: "Chrome",
					data: data_chrome
				},
				{
					name: "Firefox",
					id: "Firefox",
					data: data_firefox
				},
				{
					name: "Internet Explorer",
					id: "Internet Explorer",
					data: data_ie
				},
				{
					name: "Safari",
					id: "Safari",
					data: data_safari
				},
				{
					name: "Edge",
					id: "Edge",
					data: data_edge
				},
				{
					name: "Opera",
					id: "Opera",
					data: data_opera
				}
			]
		}
	});

});