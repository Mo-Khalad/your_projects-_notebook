import React  from 'react'

const YourProduct = ({getProject , projectName , getTasks}) => {

const addProject =()=> getProject(true);

const click=()=> 
{
   getTasks(true);
   getProject(false);
}

return (
   <>
        <div className='basis-1/4 bg-neutral-900 rounded-tr-xl rounded-br-xl  text-center h-screen justify-center'>
           <h3 className='text-3xl my-14 font-semibold text-gray-100'>YOUR PROJECTS</h3>
           <button onClick={addProject} className='bg-stone-700 text-stone-400 py-2 rounded-lg px-7 hover:bg-stone-800 hover:text-slate-50'>+ Add Project</button>
           <h2 className='text-slate-100 mt-5' onClick={click}>{projectName}</h2>
        </div>
   </>
  )
}

export default YourProduct
