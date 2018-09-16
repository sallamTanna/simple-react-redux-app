import React  from 'react';
import Stories from './Stories'
import './App.css'
import ConnectedStories from './Stories'
import ConnectedSearchStories from './searchStories';

const App = ({stories, onArchive})=> <div className='app'>
  <div className='interactions'>
   <ConnectedSearchStories />
  </div>
  <ConnectedStories/>
</div>

export default App;
