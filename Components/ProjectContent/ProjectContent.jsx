import { React , useState }from 'react';
import YourProduct from '../YourProduct/YourProduct';
import NoProjectSelected from '../NoProjectSelected/NoProjectSelected';
import Tasks from '../Tasks/Tasks';
import ProjectData from '../ProjectData/ProjectData';

const ProjectContent = () => {
  const [project , getProject]= useState(false);
  const [tasks , getTasks]= useState(false);
  const [projectName , getProjectName] = useState([]);
  const [description , getDescription] = useState();
  const [history , getHistory] = useState();

  
  return (
    <div className='flex'>
       <YourProduct getProject={getProject} projectName={projectName} getTasks={getTasks}/>
       { project ? <ProjectData getProject={getProject} projectNames={projectName} getProjectName={getProjectName}
        getDescription={getDescription} getHistory={getHistory} getTasks={getTasks}/> : tasks ? <Tasks projectName={projectName} description={description} history={history}/> : <NoProjectSelected/>}
    </div>
  )
}

export default ProjectContent
