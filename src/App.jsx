import { useState, useEffect } from 'react'
import './App.css'


function App() {
  // 1. Keep track of which endpoint path we want to view
  const [currentTab, setCurrentTab] = useState<string>('/api/profile');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 2. The Fetch Engine now re-runs every time 'currentTab' changes!
  useEffect(() => {
    setLoading(true);
    setError(null);

    // CHANGE THIS TO YOUR VM 201 IP ADDRESS
    fetch(`http://100.68.135.118${currentTab}`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [currentTab]); // <-- This dependency array tells React: "Watch this variable"

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>PHP Mini-Router Dashboard</h1>
      <p style={{ color: '#a78bfa' }}>Select an endpoint to query VM 201 live</p>

      {/* 3. Tab Buttons Navigation */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '20px 0' }}>
        <button 
          style={{ backgroundColor: currentTab === '/api/profile' ? '#646cff' : '#2f2f2f' }}
          onClick={() => setCurrentTab('/api/profile')}
        >
          User Profile
        </button>
        <button 
          style={{ backgroundColor: currentTab === '/api/status' ? '#646cff' : '#2f2f2f' }}
          onClick={() => setCurrentTab('/api/status')}
        >
          System Status
        </button>
        <button 
          style={{ backgroundColor: currentTab === '/api/project-info' ? '#646cff' : '#2f2f2f' }}
          onClick={() => setCurrentTab('/api/project-info')}
        >
          Project Info
        </button>
        <button 
          style={{ backgroundColor: currentTab === '/api/broken-test' ? '#646cff' : '#2f2f2f' }}
          onClick={() => setCurrentTab('/api/broken-test')}
        >
          Trigger 404
        </button>
      </div>

      <hr />

      {/* 4. Display Window */}
      <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '8px', textAlign: 'left', marginTop: '20px' }}>
        <h3 style={{ marginTop: 0, color: '#646cff' }}>
          Active Endpoint: <span style={{ color: '#fff', fontFamily: 'monospace' }}>{currentTab}</span>
        </h3>

        {loading && <p style={{ color: '#999' }}>Fetching data...</p>}
        
        {error && (
          <p style={{ color: '#ef4444', fontWeight: 'bold' }}>
            Backend Error: {error} (Check your PHP switch statement!)
          </p>
        )}

        {!loading && !error && data && (
          <pre style={{ color: '#4ade80', fontSize: '14px', overflowX: 'auto' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  )
}

export default App
