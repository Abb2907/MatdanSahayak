import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import StatusCheck from './components/StatusCheck'
import FormsGuide from './components/FormsGuide'
import VotingWalkthrough from './components/VotingWalkthrough'
import IDChecklist from './components/IDChecklist'
import './components/components.css'

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <StatusCheck setView={setCurrentView} />;
      case 'forms':
        return <FormsGuide />;
      case 'voting':
        return <VotingWalkthrough />;
      case 'ids':
        return <IDChecklist />;
      default:
        return <StatusCheck setView={setCurrentView} />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
