# Demo of a Flask app displaying a Highcharts's Drilldown pie chart

The interesting part in this small example is simply to see how Flask fetch data provided by a Python backend (here hardcoded in another module: `data.py`), and how it uses it with Jinja2 and the HTML templates

## Installation with Poetry

```shell
poetry install
```

## Run the app

```shell
poetry shell
python -m app
```
   
Open http://localhost:8080/ in your favorite browser!


## How it works?

This demo is a [Flask app](https://flask.palletsprojects.com/).

It generates HTML code based on a template.
