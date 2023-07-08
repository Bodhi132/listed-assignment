import React from 'react'
import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';
// import '../components/pie.css'
import { useState } from 'react';
import axios from 'axios';

const PieChartCard = () => {

  const canvas = useRef();

  const [name, setName] = useState(null)
  const [data, setData] = useState(null)

  const [clr, setclr] = useState(["#9BDD7C","#cc782e","#F6DC7D"])

  var i = 0;
  useEffect(() => {
    const ctx = canvas.current;

    let chartStatus = Chart.getChart('myChart');
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: name,
        datasets: [
          {
            label: 'Dataset 1',
            data: [25, 32, 16],
            backgroundColor: [
              '#98D89E',
              '#F6DC7D',
              '#FFEA88;',
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false
        }
      },
    });
  }, []);

  useEffect(() => {

    axios.get('https://api.openbrewerydb.org/v1/breweries?by_type=micro').then((res) => {
      setData(res.data)
    })

  }, [])

  useEffect(() => {
    setName(data?.filter((item, idx) => idx < 3).map(item => item.name))
  }, [data])


  return (
    <div className='w-[40%] h-[15rem] mt-10 mb-10 bg-white rounded-xl flex-col'>
      <div className='flex justify-around mt-3'>
        <h2 className='font-bold text-lg'>Breweries</h2>
        <select name="" id="" className=' font-extralight text-xs text-slate-600'>
          <option value="" >May - June 2021</option>
        </select>
      </div>
      <div className='w-full h-full flex justify-between'>
        <div className='w-[40%] h-[70%] ps-6 pt-4 mt-2 ms-1'>
          <canvas ref={canvas}></canvas>
        </div>
        <div className='w-auto'>
          <div className='flex flex-col items-center mt-9 align-middle justify-center px-9'>
            {
              name?.map(
                (item,ind) => {
                  return (
                    <div className='w-[10rem] text-xs mb-3'>
                      <div className='flex mb-1 items-center'>
                        <div className={`bg-[${clr[i++]}] h-2 w-2 rounded-full me-4 `}></div>
                        <h1 className='font-bold'>{item}</h1>
                      </div>
                      <h3 className='ms-6 text-gray-400'>{21 + Math.floor(Math.random() * 10)}%</h3>
                    </div>
                  )
                }
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PieChartCard