import React from 'react'
import TitleBar from '../components/titlebar'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import Editor from '../components/editor'

export default function HomePage() {
  return (
    <div className='flex w-full h-screen flex-col'>
      <TitleBar className="h-[5%] w-full"/>
      <div className='flex w-full h-[91%]'>
        <Sidebar className="h-full w-[20%]"/>
        <Editor className="h-full w-[80%]"/>
      </div>
      <Footer className="h-[4%] w-full"/>
    </div>
  )
}
