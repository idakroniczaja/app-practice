
import {Switch, Route, Link} from 'react-router-dom'
import Projects from './components/Projects'
import CreateProject from './components/CreateProject'

function App() {
  return (
    <div>
   <nav>
     <Link to='/all-projects'>All Projects</Link>
     <Link to='/add-project'>Add Project</Link>
   </nav>
    

    <Switch>
      <Route exact path='/all-projects' render={(props)=> <Projects {...props}/>}/>
      <Route exact path='/add-project' render={(props) => <CreateProject {...props} />} />
    </Switch>


    </div>
  );
}

export default App;
