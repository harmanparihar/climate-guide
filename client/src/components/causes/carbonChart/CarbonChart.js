import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import ReactFusioncharts from 'react-fusioncharts';
import Chart from 'fusioncharts/fusioncharts.zoomscatter';

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
            "color": "#90f1f9",
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
            // "color": "ff6759",
            "color": "#ff7c70",
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
            "color": "#07ad5d",
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
            "color": "#ff0000",
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
            "color": "#0D3AFF",
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
              width = '100%'
              height = '37%'
              dataFormat = "json"
              dataSource = {dataSource}
          />
      );
   }
}

export default CarbonChart;
