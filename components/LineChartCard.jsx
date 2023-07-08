"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
// import { Chart } from 'react-chartjs-2'
import { Line } from 'react-chartjs-2';
import '../components/LineStyles.css'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

// const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//         {
//             label: 'My First dataset',
//             fill: false,
//             lineTension: 0.1,
//             backgroundColor: 'rgba(75,192,192,0.4)',
//             borderColor: 'rgba(75,192,192,1)',
//             borderCapStyle: 'butt',
//             borderDash: [],
//             borderDashOffset: 0.0,
//             borderJoinStyle: 'miter',
//             pointBorderColor: 'rgba(75,192,192,1)',
//             pointBackgroundColor: '#fff',
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//             pointHoverBorderColor: 'rgba(220,220,220,1)',
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//             label: 'My First dataset',
//             fill: false,
//             lineTension: 0.1,
//             backgroundColor: 'rgba(75,192,192,0.4)',
//             borderColor: 'rgba(75,192,192,1)',
//             borderCapStyle: 'butt',
//             borderDash: [],
//             borderDashOffset: 0.0,
//             borderJoinStyle: 'miter',
//             pointBorderColor: 'rgba(75,192,192,1)',
//             pointBackgroundColor: '#fff',
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//             pointHoverBorderColor: 'rgba(220,220,220,1)',
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: [40, 34, 45, 34, 23, 21, 67]
//         }
//     ]
// };



const LineChartCard = () => {

    const [chartData, setChartData] = useState({ datasets: [] });

    const [chartOptions, setChartOptions] = useState({});

    const [data, setData] = useState(null)
    const [data2, setData2] = useState(null)

    const [city, setCity] = useState(null)
    const [name, setName] = useState(null)

    const [city1, setCity2] = useState(null)
    const [name1, setName2] = useState(null)

    function apiSet(data) {
        setCity(data?.filter((item, idx) => idx < 4).map(item => item.city))
        setName(data?.filter((item, idx) => idx < 5).map(item => item.phone))
        setCity(city => [" ", ...city])
        setCity(city => [...city, " "])
    }
    function apiSet2(data) {
        setCity2(data?.filter((item, idx) => idx < 4).map(item => item.city))
        setName2(data?.filter((item, idx) => idx < 5).map(item => item.phone))
    }

    useEffect(() => {
        setChartData({
            labels: city,
            datasets: [
                {
                    label: 'Sales $',
                    data: name,
                    borderColor: '#9BDD7C',
                    backgroundColor: 'transparent',
                    pointBorderColor: 'transparent',
                    tension: 0.5
                },
                {
                    data: name1,
                    borderColor: '#E9A0A0',
                    backgroundColor: 'transparent',
                    pointBorderColor: 'transparent',
                    tension: 0.5
                },

            ],
        })
        setChartOptions({
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                        drawingBorder:false
                    },
                },
            },
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false
            },
            options: {
                elements: {
                    point: {
                        borderWidth: 0,
                        radius: 10,
                        backgroundColor: 'rgba(0,0,0,0)',
                        radius: 0
                    }
                },
                scales: {
                    y: {
                      grid: {
                        drawBorder: false,
                      }
                    }
                  }
            }
        })
    }, [data, data2,city,name,name1])

    useEffect(() => {
        axios.get('https://api.openbrewerydb.org/v1/breweries?by_state=new_york').then((res) => {
            setData(res.data)
            apiSet(res.data)
        })
        axios.get('https://api.openbrewerydb.org/v1/breweries?by_state=California').then((res) => {
            setData2(res.data)
            apiSet2(res.data)
        })

    }, [])



    return (
        <div className=' w-[87%] border-none md:col-span-2 relative md:h-[60vh] h-[30vh] py-9 px-6 mt-[2rem] border rounded-2xl bg-white'>
            <div className='flex justify-between px-7 mb-5 pe-14'>
                <div className=''>
                    <p className='ms-1 font-bold text-xl'>Activities</p>
                    <select name="" id="" className=' font-light text-gray-400 '>
                        <option value="">May - June 2021</option>
                    </select>
                </div>
                <div className='w-[15%] me-14'>
                    <ul className=' flex justify-between items-center text-sm me-20 pe-[5rem]'>
                        <li className='guest'>NewYork</li>
                        <li className='User'>California</li>
                    </ul>
                </div>
            </div>
            <div className='w-full h-[20rem] px-[2rem] py-[2rem]'>
                <Line data={chartData} options={chartOptions} />
            </div>

        </div>

    )
}

export default LineChartCard