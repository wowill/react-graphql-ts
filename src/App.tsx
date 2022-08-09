import React, {useState} from 'react';
import './App.css';
import LanuchNav from './components/LanuchNav'
import PastLaunches from './components/PastLaunches'
import NextLaunches from './components/NextLaunches'

function App() {

  const [type, setType] = useState('past')
  return (
    <div className="App">
      <LanuchNav onChange={(data: string) => setType(data)} />
      {type === 'past' ? <PastLaunches /> : <NextLaunches />}
    </div>
  );
}

export default App;
