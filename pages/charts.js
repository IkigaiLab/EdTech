import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  Box,
  Button,
  CardMedia,
} from '@mui/material';

const charts = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const data1 = {
    labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        // labels: {
        //     color: 'rgb(255, 99, 132)'
        // }
      },
      datalabels: {
        formatter: function (value, context) {
          const datapoints = context.chart.data.datasets[0].data;
          function totalSum(total, datapoints) {
            return total + datapoints;
          }
          const totalValue = datapoints.reduce(totalSum, 0);
          const percentageValue = ((value / totalValue) * 100).toFixed(1);

          return [
            context.chart.data.labels[context.dataIndex],
            `${percentageValue}%`,
          ];
          // return context.chart.data.labels[context.dataIndex] + ' : ' + value;
        },
        backgroundColor: function (context) {
          return context.dataset.backgroundColor;
        },
        // borderColor: 'white',
        // borderRadius: 25,
        // borderWidth: 3,
        color: 'white',
        font: {
          weight: 'bold',
        },
        padding: 6,
      },
    },
  };

  return (
    <div>
      <h1>Charts</h1>
      <Grid container>
        <Grid item lg={6}>
          <Box sx={{ height: '60vh', width: '60vh' }}>
            <Chart
              type="pie"
              data={data}
              plugins={[ChartDataLabels]}
              options={options}
            />
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Chart type="line" data={data1} />
        </Grid>
      </Grid>
    </div>
  );
};

export default charts;
