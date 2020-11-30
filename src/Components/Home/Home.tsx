import React from 'react';
import Feed from '../../Feed/Feed';
import Widgets from '../../Widgets/Widgets';
import Sidebar from '../Sidebar/Sidebar';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Home;