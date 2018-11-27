import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import ReactFusioncharts from 'react-fusioncharts';
import Chart from 'fusioncharts/fusioncharts.zoomscatter';

// import dataCategories from './dataSource/categories.json';
import chartConfig from './dataSource/chartConfig.json';
import dataSet from './dataSource/dataset.json';

// this method shows errors when deploy (but not on other chart type???)
// ReactFusioncharts.fcRoot(FusionCharts, Chart, CandyTheme);

// this method deploys the chart but does not define theme with it (theme can be copied and pasted in json format)
Chart(FusionCharts);

const dataSource = {
    "chart": chartConfig,
    // "categories": dataCategories,
    "dataset": [
        {
            "seriesname": "CO2 Emissions",
            "drawLine": true,
            "color": "90f1f9",
            "anchorsides": "3",
            "anchorBorderThickness": "0.1",
            "anchorradius": "3",
            "hoverColor": "#999CA5",
            // "showRegressionLine": true,
            "data": dataSet
        }
    ]
}

class CO2Chart extends Component {
   render() {
      return (
      <ReactFusioncharts className="causes-chart"
          type = "zoomscatter"
          width = '100%'
          height = '22%'
          dataFormat = "json"
          dataSource = {dataSource} />
      );
   }
}

export default CO2Chart;
