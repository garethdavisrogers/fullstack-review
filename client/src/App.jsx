import React from 'react';
import SQLdiv from './components/mysqlList.jsx';
import MongoList from './components/mongodbList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mongoStuff: [],
      mysqlStuff: [],
    }
  }

  render() {
    return (
      <div>
        <header>A tale of two DBs</header>
        <div>Hello world!</div>
        <SQLdiv/>
        <MongoList/>
      </div>
    )
  }
}

export default App;