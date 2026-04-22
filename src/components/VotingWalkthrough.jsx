import React from 'react';

const VotingWalkthrough = () => {
  return (
    <div className="animate-fade-in">
      <div className="section-header">
        <h2>The Polling Station Walkthrough</h2>
        <p className="subtitle">Know exactly what to expect when you arrive to cast your vote.</p>
        <div className="hindi-text" style={{fontSize: '1rem', marginTop: '8px'}}>Phased Voting: Remember to check which Phase your constituency votes in!</div>
      </div>

      <div className="timeline">
        <div className="timeline-item glass-panel">
          <div className="timeline-marker">1</div>
          <h3>ID Verification</h3>
          <p>The First Polling Officer will check your name on the voter list (Matdata Suchi) and verify your ID (EPIC / Pehchan Patra or alternative valid ID).</p>
        </div>

        <div className="timeline-item glass-panel">
          <div className="timeline-marker">2</div>
          <h3>Inking & Registration</h3>
          <p>The Second Polling Officer will mark your left index finger with indelible ink, give you a slip, and ask you to sign (or put a thumb impression on) the Form 17A register.</p>
        </div>

        <div className="timeline-item glass-panel">
          <div className="timeline-marker">3</div>
          <h3>Slip Deposit</h3>
          <p>You will hand the provided slip to the Third Polling Officer and then proceed to the voting compartment.</p>
        </div>

        <div className="timeline-item glass-panel" style={{borderColor: 'rgba(255, 153, 51, 0.3)'}}>
          <div className="timeline-marker" style={{background: 'var(--saffron)', color: 'black'}}>4</div>
          <h3>Cast Your Vote (EVM & VVPAT)</h3>
          <p>Press the blue button on the <strong>EVM (Electronic Voting Machine)</strong> next to the symbol of your chosen candidate. You will hear a beep sound.</p>
          <p style={{marginTop: '0.5rem', color: 'var(--white)'}}>Look at the <strong>VVPAT (Voter Verifiable Paper Audit Trail)</strong> screen through the glass window to verify the slip printed with your candidate's serial number, name, and symbol. It remains visible for 7 seconds.</p>
        </div>
      </div>
    </div>
  );
};

export default VotingWalkthrough;
