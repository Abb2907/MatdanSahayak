import React from 'react';
import { AlertCircle, UserCheck } from 'lucide-react';

const StatusCheck = ({ setView }) => {
  return (
    <div className="animate-fade-in">
      <div className="section-header">
        <h2>Welcome to Bharat Matdan Sahayak</h2>
        <p className="subtitle">Your digital guide to the world's largest democratic exercise. Let's make sure you are ready to vote.</p>
      </div>

      <div className="hero-card glass-panel">
        <div className="status-check-box">
          <UserCheck className="status-icon" />
          <h3>Do you have an EPIC Number?</h3>
          <p>The Electors Photo Identification Card (Pehchan Patra) is your key to vote.</p>
          
          <div className="action-buttons">
            <button className="btn-primary" onClick={() => setView('forms')}>
              No, I need to Register
            </button>
            <button className="btn-secondary" onClick={() => setView('voting')}>
              Yes, I am Ready
            </button>
          </div>
        </div>
      </div>

      <div className="guardrail-alert">
        <AlertCircle className="guardrail-icon" />
        <div className="guardrail-content">
          <h4>Official Verification</h4>
          <p>
            Always verify your final voter status, download your e-EPIC, and find your polling booth on the official Election Commission of India portal: <br/>
            <a href="https://voters.eci.gov.in" target="_blank" rel="noopener noreferrer">voters.eci.gov.in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatusCheck;
