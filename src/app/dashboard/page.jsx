"use client"
import React from 'react'
import SideBar from '../../../components/SideBar.jsx'
import TopNav from '../../../components/TopNav.jsx'
import ActivityCards from '../../../components/ActivityCards.jsx'
import LineChartCard from '../../../components/LineChartCard.jsx'
import PieChartCard from '../../../components/PieChartCard.jsx'
import ScheduleCard from '../../../components/ScheduleCard.jsx'

const Dashboardpage = () => {
  return (
    <div className='bg-[#F5F5F5] w-screen h-auto flex'>
      <div className=' w-[23%] h-auto p-8 px-12'>
        <SideBar />
      </div>
      <div className='flex flex-col w-full h-full ps-4 pe-10'>
        <TopNav />
        <ActivityCards/>
        <LineChartCard/>
        <div className='flex'>
          <PieChartCard/>
          <ScheduleCard/>
        </div>
      </div>
    </div>
  )
}

export default Dashboardpage