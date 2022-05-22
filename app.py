from flask import Flask, render_template
# from data import data
import data
app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index(chartID = 'chart_ID', chart_type = 'bar', chart_height = 350):
	chart = {"renderTo": chartID, "type": chart_type, "height": chart_height,}
	series = [{"name": 'Label1', "data": [1,2,3]}, {"name": 'Label2', "data": [4, 5, 6]}]
	pie_series = [{"name": 'Label1', "data": [1,2,3]}, {"name": 'Label2', "data": [4, 5, 6]}]
	title = {"text": 'My Title'}
	xAxis = {"categories": ['xAxis Data1', 'xAxis Data2', 'xAxis Data3']}
	yAxis = {"title": {"text": 'yAxis Label'}}
	return render_template(
		'index.html',
		chartID=chartID,
		chart=chart,
		series=series,
		title=title,
		xAxis=xAxis,
		yAxis=yAxis,
		data_browser=data.data_browser,
		data_chrome=data.data_chrome,
		data_firefox=data.data_firefox,
		data_ie=data.data_ie,
		data_safari=data.data_safari,
		data_edge=data.data_edge,
		data_opera=data.data_opera
	)

if __name__ == "__main__":
	app.run(debug = True, host='0.0.0.0', port=8080, passthrough_errors=True)