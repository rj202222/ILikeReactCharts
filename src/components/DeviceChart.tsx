import * as React from "react";
import ReactApexcharts from "react-apexcharts";
import { num } from "../utils/generators";

const data = new Array(3).fill(0).map((_el) => num());

export default function DeviceChart() {
  const options: ApexCharts.ApexOptions = {
    legend: {
      show: true,
      position: "bottom",
    },
    stroke: { width: 0 },
    labels: ["Mobile", "Tablet", "Desktop"],
    dataLabels: {
      enabled: true,
      formatter(val: string) {
        return `${parseInt(val, 10)}%`;
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            value: {
              formatter(val: string) {
                return val;
              },
            },
            total: {
              show: true,
              fontSize: "1.5rem",
              label: "Total Visits",
              formatter() {
                return `${data.reduce((acc, curr) => acc + curr, 0)}`;
              },
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: "1.5rem",
                  },
                  value: {
                    fontSize: "1rem",
                  },
                  total: {
                    fontSize: "1.5rem",
                  },
                },
              },
            },
          },
        },
      },
    ],
  };

  return (
    <ReactApexcharts
      options={options}
      series={data}
      type="donut"
      height={500}
    />
  );
}
