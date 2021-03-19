import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Router exact path='/' component={Home} />
        <h1>Here's my Portfolio</h1>
      </div>
    </Router>
  );
}

export default App;
