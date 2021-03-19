import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/aboutme' component={AboutMe} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/projects' component={MyProjects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
