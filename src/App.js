import React , {Component}from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import {Home}from './component/pages/Home';
import {About}from './component/pages/About';
import {Contact}from './component/pages/Contact';
import {NotFound}from './component/pages/NotFound';
import {Layout} from './component/Layouts/Layouts';
import {NavigationBar} from './component/Layouts/NavigationBar'
import {Jumbotron} from './component/Layouts/Jumbotron';

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <NavigationBar></NavigationBar>
        <Jumbotron></Jumbotron>
        <Layout>
          <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/about" component={About}/>
            <Route  path="/contact" component={Contact}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
        </Layout>
        
    </React.Fragment>
    );
  }
}

export default App;
