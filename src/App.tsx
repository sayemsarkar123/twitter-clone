import React from 'react';
import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets.js';

function App() {
  return (
    <div className="App">
      <Sidebar />  
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
