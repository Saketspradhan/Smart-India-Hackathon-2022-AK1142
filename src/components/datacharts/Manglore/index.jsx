import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { Bar } from 'react-chartjs-2';
import {
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { RadialLinearScale } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';

ChartJS.register(
  ArcElement,
  Tooltip,
  PointElement,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  RadialLinearScale
);

export const cargotype = {
  labels: [
    'POL and Crude Product',
    'Iron Ore',
    'Fertiliser',
    'FRM (Dry',
    'Food- grains',
    'Coal',
    'Container Cargo (TEUs)',
    'Others',
  ],
  datasets: [
    {
      label: 'Cargo Shipped in 2020-21 (in Million Tonnes)',
      data: [19109, 4729, 779, 73, 0, 94, 150, 9425],
      backgroundColor: [
        '#6050DC',
        '#D52DB7',
        '#FF2E7E',
        '#FF6B45',
        '#FFAB05',
        '#F54F52',
        '#93F03B',
        '#FFEC21',
      ],
    },
  ],
};

export const baroptions = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};
export const lineoptions = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

export const linedata = {
  labels: ['2018-19', '2019-20', '2020-21'],
  datasets: [
    {
      label: 'Container Cargo',
      data: [1640, 1952, 1972],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Tare Weight',
      data: [280, 326, 319],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
    {
      label: 'Container Traffic',
      data: [1920, 2277, 2291],
      borderColor: 'rgb(255, 159, 64)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

export const bardata = {
  labels: ['Overseas', 'Coastal'],
  datasets: [
    {
      label: 'Un-Loaded',
      data: [20383, 7507],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Loaded',
      data: [5448, 3163],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(5+3, 162, 235, 0.5)',
    },
    {
      label: 'Transhipment',
      data: [0, 0],
      borderColor: 'rgb(255, 205, 86)',
      backgroundColor: 'rgba(255, 205, 86, 0.5)',
    },
  ],
};

export const polardata = {
  labels: [
    'Cargo Input Rails',
    'Cargo Input by Road',
    'Cargo Output by Rails',
    'Cargo Output by Road',
  ],
  datasets: [
    {
      data: [0, 75304, 0, 77957],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

const DataCharts = () => {
  return (
    <div style={{ backgroundColor: '#f1f4f9' }} className="charts">
      <Container
        style={{
          backgroundColor: '#f1f4f9',
          textAlign: 'center',
          paddingTop: '15vh',
        }}
      >
        <h1>Data Visualization of Port Data</h1>
        <Row style={{ marginTop: '5vh' }}>
          <Col md={4} sm={12}>
            <Doughnut data={cargotype} />
          </Col>
          <Col md={1}></Col>
          <Col md={7} sm={12}>
            <Bar data={bardata} options={baroptions} />
          </Col>
        </Row>
        <Row style={{ marginTop: '17vh' }}>
          <Col md={7} sm={12}>
            <Line options={lineoptions} data={linedata} />
          </Col>
          <Col md={1}></Col>
          <Col md={4} sm={12}>
            <PolarArea data={polardata} />
          </Col>
        </Row>
      </Container>
      <Button
        variant="info"
        href="https://github.com/anujgoenka9/Port-Data/blob/main/Data%20Analytics.rar"
      >
        Download All
      </Button>
    </div>
  );
};

export default DataCharts;
