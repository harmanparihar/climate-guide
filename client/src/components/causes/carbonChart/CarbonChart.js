import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import ReactFusioncharts from 'react-fusioncharts';
import Chart from 'fusioncharts/fusioncharts.zoomscatter';
// import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

import chartConfig from './dataSource/chartConfig.json';
import dataSet from './dataSource/dataset.json';

Chart(FusionCharts);

const dataSource = {
    "chart": chartConfig,
    // "categories": dataCategories,
    "dataset": [
        {
            "seriesname": "Fossil Fuel & Industry",
            "drawLine": true,
            "color": "91f1f9",
            "anchorsides": "3",
            "anchorBorderThickness": "0.1",
            "anchorradius": "3",
            "hoverColor": "#999CA5",
            // "showRegressionLine": true,
            "data": dataSet[0]["Global Carbon Budget"]
        },
        {
            "seriesname": "Atmospheric Growth",
            "drawLine": true,
            "color": "ff6759",
            "anchorsides": "3",
            "anchorBorderThickness": "0.1",
            "anchorradius": "3",
            "hoverColor": "#999CA5",
            // "showRegressionLine": true,
            "data": dataSet[1]["Global Carbon Budget"]
        },
        {
            "seriesname": "Land-use Change",
            "drawLine": true,
            "color": "8747d1",
            "anchorsides": "3",
            "anchorBorderThickness": "0.1",
            "anchorradius": "3",
            "hoverColor": "#999CA5",
            // "showRegressionLine": true,
            "data": dataSet[2]["Global Carbon Budget"]
        },
        {
            "seriesname": "Land Sink",
            "drawLine": true,
            "color": "670800",
            "anchorsides": "3",
            "anchorBorderThickness": "0.1",
            "anchorradius": "3",
            "hoverColor": "#999CA5",
            // "showRegressionLine": true,
            "data": dataSet[3]["Global Carbon Budget"]
        },
        {
            "seriesname": "Ocean Sink",
            "drawLine": true,
            "color": "182057",
            "anchorsides": "3",
            "anchorBorderThickness": "0.1",
            "anchorradius": "3",
            "hoverColor": "#999CA5",
            // "showRegressionLine": true,
            "data": dataSet[4]["Global Carbon Budget"]
        }
    ],
}

class CarbonChart extends Component {
   render() {
      return (
          <ReactFusioncharts
              className="causes-chart"
              type = "zoomscatter"
              width = '1000'
              height = '500'
              dataFormat = "json"
              dataSource = {dataSource}
          />
      );
   }
}

export default CarbonChart;
