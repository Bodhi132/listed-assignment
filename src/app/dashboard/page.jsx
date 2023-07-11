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
    <div className='bg-[#F5F5F5] w-screen md:h-auto max-sm:h-full flex '>
      <div className=' md:w-[23%] max-sm:w-[20%] max-sm:pt-[1.5rem] md:h-auto md:p-8 md:px-12 max-sm:h-full'>
        <SideBar />
      </div>
      <div className='flex flex-col w-full h-full ps-4 pe-10'>
        <TopNav />
        <ActivityCards/>
        <LineChartCard/>
        <div className='flex max-sm:flex-col'>
          <PieChartCard/>
          <ScheduleCard/>
        </div>
      </div>
    </div>
  )
}

export default Dashboardpage