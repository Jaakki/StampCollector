import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {MainWindow} from './MainWindow';
import DataManager from './DataManager';
import AboutContainer from './AboutContainer';
import AddStampContainer from './AddStampContainer';
import StampListContainer from './StampListContainer';
import SummaryContainer from './SummaryContainer';
import './MainWindow.css';
import Header from './Header';

function App() {
  DataManager.InitDataManager()
  return (
    <Router>
      <div className="App">
        <div className="container ContainerStyling">
          <div className="Header">
            <Header/>
          </div>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <MainWindow stampCollection={DataManager.stampCollection}>
                </MainWindow>
              </React.Fragment>)}/>
              <Route path="/About" component={AboutContainer}/>
              <Route path="/AddStamp" component={AddStampContainer}/>
              <Route path="/List" component={StampListContainer}/>
              <Route path="/Summary" component={SummaryContainer}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
