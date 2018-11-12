import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import ReactFusioncharts from 'react-fusioncharts';
import Chart from 'fusioncharts/fusioncharts.zoomscatter';
// import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

// import dataCategories from './dataSource/categories.json';
import chartConfig from './dataSource/chartConfig.json';
import dataSet1 from './dataSource/dataset1.json';
import dataSet2 from './dataSource/dataset2.json';
import dataSet3 from './dataSource/dataset3.json';

Chart(FusionCharts);

const dataSource = {
    "chart": chartConfig,
    // "categories": dataCategories,
    "dataset": [
        {
            "seriesname": "Fossil Fuel & Industry",
            "drawLine": true,
            "color": "ff6600",
            "anchorsides": "3",
            "anchorBorderThickness": "0.1",
            "anchorradius": "3",
            "hoverColor": "#999CA5",
            // "showRegressionLine": true,
            "data": dataSet1["Global Carbon Budget"]
        },
        {
            "seriesname": "Atmospheric Growth",
            "drawLine": true,
            "color": "ff00ff",
            "anchorsides": "3",
            "anchorBorderThickness": "0.1",
            "anchorradius": "3",
            "hoverColor": "#999CA5",
            // "showRegressionLine": true,
            "data": dataSet2["Global Carbon Budget"]
        },
        {
            "seriesname": "Land-use Change Emissions",
            "drawLine": true,
            "color": "0000ff",
            "anchorsides": "3",
            "anchorBorderThickness": "0.1",
            "anchorradius": "3",
            "hoverColor": "#999CA5",
            // "showRegressionLine": true,
            "data": dataSet3["Global Carbon Budget"]
        }
    ],
}

class CarbonChart extends Component {
   render() {
      return (
      <ReactFusioncharts
         type = "zoomscatter"
         width = '1000'
         height = '500'
         dataFormat = "json"
         dataSource = {dataSource} />
      );
   }
}

export default CarbonChart;
