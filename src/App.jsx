import React, { useState } from 'react';

function App() {
  // Sample hardcoded asset data
  const [assets] = useState([
    { id: "AST-001", name: "MacBook Pro 16\"", category: "Laptop", assignee: "Sarah Jenkins", status: "Active", date: "2025-03-12" },
    { id: "AST-002", name: "Dell UltraSharp 27\"", category: "Monitor", assignee: "Michael Chang", status: "Active", date: "2025-05-19" },
    { id: "AST-003", name: "iPhone 15 Pro", category: "Mobile", assignee: "Unassigned", status: "In Storage", date: "—" },
    { id: "AST-004", name: "Lenovo ThinkPad X1", category: "Laptop", assignee: "David Ross", status: "Under Repair", date: "2024-11-02" },
  ]);

  return (
    <div style={styles.dashboard}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.logo}>AssetFlow</h2>
        <nav style={styles.nav}>
          <a href="#" style={{...styles.navItem, ...styles.activeNav}}>Dashboard</a>
          <a href="#" style={styles.navItem}>All Assets</a>
          <a href="#" style={styles.navItem}>Categories</a>
          <a href="#" style={styles.navItem}>Users</a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={styles.mainContent}>
        {/* Header */}
        <header style={styles.header}>
          <div>
            <h1 style={styles.title}>Asset Dashboard</h1>
            <p style={styles.subtitle}>Overview of company hardware and assignments</p>
          </div>
          <button style={styles.primaryButton}>+ Add New Asset</button>
        </header>

        {/* Stats Cards Row */}
        <section style={styles.statsGrid}>
          <div style={styles.card}>
            <span style={styles.cardLabel}>Total Assets</span>
            <div style={styles.cardValue}>142</div>
          </div>
          <div style={styles.card}>
            <span style={styles.cardLabel}>Deployed</span>
            <div style={styles.cardValue}>118</div>
          </div>
          <div style={styles.card}>
            <span style={styles.cardLabel}>In Storage</span>
            <div style={styles.cardValue}>18</div>
          </div>
          <div style={styles.card}>
            <span style={styles.cardLabel}>In Repair</span>
            <div style={styles.cardValue}>6</div>
          </div>
        </section>

        {/* Table Section */}
        <section style={styles.tableContainer}>
          <h3 style={styles.sectionHeading}>Recent Asset Deployments</h3>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeadRow}>
                <th style={styles.th}>Asset ID</th>
                <th style={styles.th}>Asset Name</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Assigned To</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Date Issued</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id} style={styles.tableRow}>
                  <td style={{...styles.td, fontWeight: 'bold'}}>{asset.id}</td>
                  <td style={styles.td}>{asset.name}</td>
                  <td style={styles.td}>{asset.category}</td>
                  <td style={styles.td}>{asset.assignee}</td>
                  <td style={styles.td}>
                    <span style={{
                      ...styles.badge, 
                      ...asset.status === 'Active' ? styles.badgeActive : 
                         asset.status === 'In Storage' ? styles.badgeStorage : styles.badgeRepair
                    }}>
                      {asset.status}
                    </span>
                  </td>
                  <td style={styles.td}>{asset.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

// Minimal, clean modern styling object using plain CSS-in-JS
const styles = {
  dashboard: { display: 'flex', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', backgroundColor: '#f8fafc', color: '#1e293b' },
  sidebar: { width: '240px', backgroundColor: '#0f172a', color: '#fff', padding: '24px' },
  logo: { fontSize: '20px', fontWeight: 'bold', marginBottom: '32px', color: '#38bdf8' },
  nav: { display: 'flex', flexDirection: 'column', gap: '8px' },
  navItem: { color: '#94a3b8', textDecoration: 'none', padding: '10px 12px', borderRadius: '6px', fontSize: '14px', transition: '0.2s' },
  activeNav: { backgroundColor: '#1e293b', color: '#fff', fontWeight: '500' },
  mainContent: { flex: 1, padding: '40px', maxWidth: '1200px', margin: '0 auto', width: '100%' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' },
  title: { fontSize: '28px', fontWeight: '700', margin: 0, letterSpacing: '-0.5px' },
  subtitle: { fontSize: '14px', color: '#64748b', marginTop: '4px', margin: 0 },
  primaryButton: { backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' },
  card: { backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' },
  cardLabel: { fontSize: '12px', textTransform: 'uppercase', color: '#64748b', fontWeight: '600', letterSpacing: '0.5px' },
  cardValue: { fontSize: '28px', fontWeight: '700', marginTop: '8px' },
  tableContainer: { backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' },
  sectionHeading: { margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' },
  table: { width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' },
  tableHeadRow: { borderBottom: '2px solid #edf2f7' },
  th: { padding: '12px', color: '#64748b', fontWeight: '600' },
  tableRow: { borderBottom: '1px solid #f1f5f9' },
  td: { padding: '16px 12px', color: '#334155' },
  badge: { padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' },
  badgeActive: { backgroundColor: '#dcfce7', color: '#15803d' },
  badgeStorage: { backgroundColor: '#f1f5f9', color: '#475569' },
  badgeRepair: { backgroundColor: '#fef3c7', color: '#d97706' },
};

export default App;