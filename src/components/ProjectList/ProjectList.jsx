import './ProjectList.css';
export default function ProjectList(props) {
  const { projects } = props;

  return (
    <div className='projects'>
      {projects.map((project, index) => (
        <div className='project' key={index}>
          <img src={project.img} alt="" />
        </div>
      ))}
    </div>
  )
}