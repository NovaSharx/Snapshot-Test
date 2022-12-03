import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

import GitHubCard from './GitHubCard';

function App() {
  const [gitHubData, setGitHubData] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/NovaSharx')
      .then(res => res.json())
      .then(data => {
        setGitHubData(data)
      })
  }, [])

  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <GitHubCard gitHubData={gitHubData} />
      </div>
    </div>
  );
}

export default App;
