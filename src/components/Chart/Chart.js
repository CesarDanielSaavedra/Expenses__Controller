import React from "react";
import "./Chart.css"
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPoints = props.dataPoints;
    return(
        <div className="chart">
            {dataPoints.map(data => 
                <ChartBar
                    key={data.label}
                    value={data.value}
                    maxValue={props.maxValue}
                    label={data.label}
                />
            )}
        </div>
    );
}

export default Chart;