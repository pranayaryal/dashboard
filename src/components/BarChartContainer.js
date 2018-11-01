import React from 'react';
import 'hammerjs'

import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem
} from '@progress/kendo-react-charts'

import { barChartQ4Months, barChartMonthlyPercentages } from '../data/appData';

export const BarChartContainer = () => (
    <Chart style={{ height: 288 }}>
        <ChartLegend visible={false} />
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={barChartQ4Months} startAngle={45} />
        </ChartCategoryAxis>
        <ChartSeries>
            {
              barChartMonthlyPercentages.map((item, idx) => (
                <ChartSeriesItem key={idx} type="column" data={item.data} gap={2} />
              ))
            }
        </ChartSeries>
        <ChartValueAxis skip={4}>
            <ChartCategoryAxisItem color='#888' skip={2}/>
        </ChartValueAxis>

    </Chart>
);