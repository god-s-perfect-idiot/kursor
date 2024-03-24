import React from 'react'
import TitleBar from '../components/titlebar'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import Editer from '../components/editer'

export default function HomePage() {
  return (
    <div className='flex w-full h-screen bg-[#f3f3b2] flex-col'>
      <TitleBar className="h-[4%] w-full"/>
      <div className='flex w-full h-[92%]'>
        <Sidebar className="h-full w-[20%]"/>
        <Editer className="h-full w-[80%]"/>
      </div>
      <Footer className="h-[4%] w-full"/>
    </div>
  )
}
