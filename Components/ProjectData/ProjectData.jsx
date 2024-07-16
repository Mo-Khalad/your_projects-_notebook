import React, { useRef, useState } from 'react'

const ProjectData = ({getProject , getTasks , getProjectName ,getDescription ,getHistory ,projectNames}) =>{
    let [project , setProject] = useState([]);

    const cancelProject =()=>
        {
            getProject(false);
            getTasks(false);
        }

    const projectName = useRef();
    const description = useRef();
    const history = useRef();
    const saveProject =()=>{
        cancelProject();
        setProject([...project , projectName?.current.value]);
        getProjectName([...projectNames , projectName?.current.value]);
        getDescription(description.current.value);
        getHistory(history.current.value);
        setProject([...project , projectName.current.value]);
    }
    console.log(project);

 return (
    <div className=' basis-3/4 p-24 '>
        <button onClick={cancelProject} className="m-7 font-semibold text-lg">cancel</button>
        <button onClick={saveProject} className="m-7 font-medium bg-zinc-900 px-8 text-slate-100 py-2 rounded-md hover:bg-zinc-800">Save</button>

        <form>
            <label htmlFor='tittle' className='mr-10 text-1xl font-medium'>Tittle</label>
            <input
            id='tittle' 
            ref={projectName}
            type='text'
            className='w-11/12 mt-2 mb-7 bg-stone-200 py-2 rounded-md'
            />

            <label htmlFor='Description' className='mr-10 text-1xl font-medium'>Description</label>
            <textarea  className='w-11/12 mt-2 mb-7 bg-stone-200 py-4 rounded-md'
                id='Description' 
                type="Description"
                ref={description}
            >
            </textarea>
         
           
            <label htmlFor='DueData' className='mr-10 text-1xl font-medium'>DueData</label>
            <input
            id='DueData' 
            type="date"
            ref={history}
            className='w-11/12 mt-2 bg-stone-200 py-2 rounded-md'
            />
        </form>
    </div>
  )
}


/*
<form>
            <label>Tittle</label>
            <input></input>

            <label>Tittle</label>
            <inpu></inpu        t>

            <label>Due Data</label>
            <input></input>
        </form>

*/


export default ProjectData
