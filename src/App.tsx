import React from 'react';
import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';

function App() {
  return (
    <div className="App">
        <Sidebar />
      {/* Feed */}
        <Feed />
      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;
