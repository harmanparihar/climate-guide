import React, {Component} from 'react';
import FusionCharts from 'fusioncharts';
import ReactFusioncharts from 'react-fusioncharts';
import Chart from 'fusioncharts/fusioncharts.widgets';
import chartConfig from './chartConfig.json';

Chart(FusionCharts);

const dataSource = {
  "chart": chartConfig,
  "dataset": [{
      "data": [
        {
          "value": "56.42",
          "tooltext": "2007: <b>$dataValue</b>"
        },
        {
          "value": "63.61",
          "tooltext": "2008: <b>$dataValue</b>"
        }
      ]
    }]
};


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paperCups: 1,
            officePaper: 1,
            newspaper: 1
        };
    }

    render() {
        return (
            <div>
                <h3>Paper Use Calculator</h3>
                <form>
                    <label>
                        <span>Frequency of using paper cups per week</span>
                        <input
                            type="number"
                            name="paper-cups"
                            value={this.state.paperCups}
                        />
                    </label>

                    <label>
                        <span>Frequency of using office paper per week</span>
                        <input
                            type="number"
                            name="office-paper"
                            value={this.state.officePaper}
                        />
                    </label>

                    <label>
                        <span>Frequency of using newspaper per week</span>
                        <input
                            type="number"
                            name="newspaper"
                            value={this.state.newspaper}
                        />
                    </label>
                    <button type="submit">Calculate</button>
                </form>

                <ReactFusioncharts
                    type = "sparkcolumn"
                    width = "1000"
                    height = "500"
                    dataFormat = "JSON"
                    dataSource = {dataSource} />

            </div>
        );
    }
}

export default Calculator;
