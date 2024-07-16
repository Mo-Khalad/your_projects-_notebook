import React from 'react'

const NoProjectSelected = () => {
  return (
<>
    <div className='basis-3/4 text-center content-center justify-center h-screen'>
        <h2 className="font-bold text-2xl"> No Project Selected</h2>
        <p className='m-8 text-xl text-gray-400'>select a project or get started with a new one</p>
        <button className='bg-stone-700 text-stone-400 py-3 rounded-md px-14 hover:bg-stone-800 hover:text-slate-50'>create new project</button>
    </div>
</>
  )
}

export default NoProjectSelected
