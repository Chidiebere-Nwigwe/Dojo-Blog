import Navbar from './Navbar';
import Home from './Home';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Changed to HashRouter
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const title = 'Welcome to the new Blog';
  // const likes = 50;
  // const link = "http://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* The Navbar component */}
        {/* You can pass props to Navbar here if needed, e.g., <Navbar title={title} /> */}
        
        <div className="content">
          {/* 
            The following are just examples of unused code. You can delete them if no longer necessary:
            <h1>{ title }</h1>
            <p>Liked { likes } times</p>
            <p> { 10 }</p>
            <p>{ [1,2,3,4,5] }</p>
            <a href={link}>Google Site</a> 
          */}

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            {/* This last catch-all route should always be at the bottom */}
            <Route path="*">
              <NotFound /> 
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
