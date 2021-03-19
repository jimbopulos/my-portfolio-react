import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
// import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
// import Project from './components/Project';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={MyProjects} />
      </div>
    </Router>
  );
}

export default App;
