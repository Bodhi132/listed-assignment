import React from 'react'

const ScheduleCard = () => {
  return (
    <div className='w-[43%] h-[15rem] mt-10 mb-10 rounded-xl ms-12 bg-white'>
      <div className='flex justify-between px-9 mt-4'>
        <h2 className=' text-[1.125rem] font-bold '>Today's schedule</h2>
        <button className=' text-xs font-light font-[#858585] '>{`See all >`}</button>
      </div>
      <div className='flex ms-10 mt-3'>
        <div className='h-[5rem] w-2 bg-[#9BDD7C]'></div>
        <div className='ms-5'>
          <h2 className='font-semibold text-[#666]'>Meeting with suppliers from Kuta Bali</h2>
          <p className='text-[#999] text-sm py-1'>14.00-15.00</p>
          <p className='text-[#999]'>at Sunset Road, Kuta, Bali</p>
        </div>
      </div>
      <div className='flex ms-10 mt-3'>
        <div className='h-[5rem] w-2 bg-[#6972C3]'></div>
        <div className='ms-5'>
          <h2 className='font-semibold text-[#666]'>Check operation at Giga Factory 1</h2>
          <p className='text-[#999] text-sm py-1'>18.00-20.00</p>
          <p className='text-[#999]'>at Central Jakarta</p>
        </div>
      </div>
    </div>
  )
}

export default ScheduleCard