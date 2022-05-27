import React, { useLayoutEffect } from 'react';
import {
  Box,
} from '../../../styled';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';
import { HomeProps } from '../../../models/app.model';
import moment from 'moment';

interface ApexState {
  options?: ApexOptions,
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
}

const OverviewChart: React.FC<Pick<HomeProps, 'weekDays'>> = ({ weekDays }) => {
  const [ApexConfig, setApexConfig] = React.useState<ApexState>();

  useLayoutEffect(() => {
    let data = getData();
    if(data){
      const config = getApexChartConfig(data.datetime, data.temp)
      if(!config) return;
      setApexConfig(config);
    }
  }, [weekDays]);

  function getData() {
    if (!weekDays?.[0]) return;

    let data: { datetime: string[], temp: number[] } = {
      datetime: [],
      temp: []
    };

    for (let day of weekDays) {
      const time = moment(day?.dt_txt).format("dddd")
      const temp = day?.main.temp;
      data.datetime.push(time);
      data.temp.push(temp)
    }

    return data;
  }

  return (
    <>
      {ApexConfig ? <Box px={2} overflow="hidden">
        <ReactApexChart options={ApexConfig.options} series={ApexConfig.series} type="bar" height={350} />
      </Box> : null}
    </>
  )
}

export default OverviewChart;


function getApexChartConfig(times: string[], data: number[]): ApexState {
  let state: ApexState = {

    series: [{
      name: 'Tempture',
      data: [...data]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + "°";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [...times],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
    },

  };

  return state;
}