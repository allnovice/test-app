import { useState, useEffect } from 'react'
// If your app still shows a white screen, leave this commented out. 
// If you have an App.css file, you can uncomment it later.
// import './App.css'

function App() {
  // 1. Keep track of which endpoint path we want to view (Pure JS, no TS types)
  const [currentTab, setCurrentTab] = useState('/api/profile');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. The Fetch Engine runs every time 'currentTab' changes
  useEffect(() => {
    setLoading(true);
    setError(null);

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
  }, [currentTab]); 

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', color: '#fff', backgroundColor: '#242424', minHeight: '100vh' }}>
      <h1>PHP Mini-Router Dashboard</h1>
      <p style={{ color: '#a78bfa' }}>Select an endpoint to query VM 201 live</p>

      {/* 3. Tab Buttons Navigation */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '20px 0' }}>
        <button 
          style={{ backgroundColor: currentTab === '/api/profile' ? '#646cff' : '#2f2f2f', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          onClick={() => setCurrentTab('/api/profile')}
        >
          User Profile
        </button>
        <button 
          style={{ backgroundColor: currentTab === '/api/status' ? '#646cff' : '#2f2f2f', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          onClick={() => setCurrentTab('/api/status')}
        >
          System Status
        </button>
        <button 
          style={{ backgroundColor: currentTab === '/api/project-info' ? '#646cff' : '#2f2f2f', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          onClick={() => setCurrentTab('/api/project-info')}
        >
          Project Info
        </button>
        <button 
          style={{ backgroundColor: currentTab === '/api/broken-test' ? '#646cff' : '#2f2f2f', color: '#fff', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          onClick={() => setCurrentTab('/api/broken-test')}
        >
          Trigger 404
        </button>
      </div>

      <hr style={{ borderColor: '#444' }} />

      {/* 4. Display Window */}
      <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '8px', textAlign: 'left', marginTop: '20px' }}>
        <h3 style={{ marginTop: 0, color: '#646cff' }}>
          Active Endpoint: <span style={{ color: '#fff', fontFamily: 'monospace' }}>{currentTab}</span>
        </h3>

        {loading && <p style={{ color: '#999' }}>Fetching data...</p>}
        
        {error && (
          <p style={{ color: '#ef4444', fontWeight: 'bold' }}>
            Backend Error: {error} (Check your Mixed Content block / CORS / IP accessibility)
          </p>
        )}

        {!loading && !error && data && (
          <pre style={{ color: '#4ade80', fontSize: '14px', overflowX: 'auto', backgroundColor: '#000', padding: '10px', borderRadius: '4px' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  )
}

export default App
