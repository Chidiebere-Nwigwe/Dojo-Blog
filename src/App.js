

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
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
        <Navbar/> 
        {/* or
        <Navbar><Navbar/> */}
        <div className="content">
          {/* <h1>{ title }</h1>
          <p>Liked { likes } times</p>
          <p> { 10 } </p>
          <p>{ [1,2,3,4,5] }</p>
          <a href={link}>Google Site</a> */}
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
            {/* this last catch all route should always be at the bottom */}
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
