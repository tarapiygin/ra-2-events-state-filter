import Portfolio from './components/Portfolio/Portfolio';
import projects from './data.json';
import './App.css';


function App() {
  return (
    <>
      <div className="container">
        <Portfolio projects={projects} />
      </div>
    </>
  );
}

export default App;
