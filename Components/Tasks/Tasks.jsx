import React from 'react'

const Tasks = ({projectName  , description , history}) => {
    return (
    <>
    <div className="basis-3/4 h-screen p-5">
       <h1 className='text-4xl font-bold mt-8'>{projectName}</h1>
       <h5 className='my-5 text-xl text-neutral-400'>{history}</h5>
       <p className='text-2xl font-light'>{description}</p>

    </div>
    </>
  )
}

export default Tasks
