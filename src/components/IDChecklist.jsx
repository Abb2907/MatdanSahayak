import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const IDChecklist = () => {
  const ids = [
    "Aadhaar Card",
    "PAN Card",
    "Passport",
    "Driving License",
    "Service Identity Cards with photograph (issued to employees by Central/State Govt./PSUs/Public Limited Companies)",
    "Passbooks with photograph (issued by Bank/Post Office)",
    "Smart Card issued by RGI under NPR",
    "MNREGA Job Card",
    "Health Insurance Smart Card issued under the scheme of Ministry of Labour",
    "Pension document with a photograph",
    "Official identity cards issued to MPs/MLAs/MLCs",
    "Unique Disability ID (UDID) Card, M/o Social Justice & Empowerment, Government of India"
  ];

  return (
    <div className="animate-fade-in">
      <div className="section-header">
        <h2>Alternative Valid IDs</h2>
        <p className="subtitle">Forgot or haven't received your physical Voter ID card? If your name is on the Electoral Roll (Matdata Suchi), you can still vote using any one of these 12 alternatives.</p>
      </div>

      <div className="id-grid">
        {ids.map((idText, index) => (
          <div key={index} className="id-item glass-panel">
            <CheckCircle2 className="check-icon" size={24} />
            <span>{idText}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IDChecklist;
