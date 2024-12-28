'use client'



import { ArcElement, Legend, Tooltip, Chart as ChartJS } from "chart.js";
import React from 'react'
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend)


const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    
    const data = {
        datasets: [
            {
            label: "Banks",
            data:[1250 ,2500 ,2700],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        }
        ],
        labels: ["HDFC", "ICICI", "SBI"],
    }
  return <Doughnut data={data} 
      options={{
          cutout: '60%',
          plugins: {
              legend: {
                display: false,
            }
          },
            
            }}
  />
};

export default DoughnutChart