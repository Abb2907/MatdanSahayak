import React from 'react';
import { Home, FileText, CheckSquare, Layers } from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView }) => {
  const menuItems = [
    { id: 'home', label: 'Status Check', icon: Home },
    { id: 'forms', label: 'Forms Guide', icon: FileText },
    { id: 'voting', label: 'Voting Day Process', icon: Layers },
    { id: 'ids', label: 'Alternative IDs', icon: CheckSquare },
  ];

  return (
    <aside className="sidebar glass-panel">
      <div className="sidebar-brand">
        <div className="brand-icon">🇮🇳</div>
        <div className="brand-text">
          <h1>Bharat Matdan</h1>
          <p>Sahayak</p>
        </div>
      </div>
      
      <nav className="nav-links">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${currentView === item.id ? 'active' : ''}`}
              onClick={() => setCurrentView(item.id)}
            >
              <Icon className="nav-icon" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
