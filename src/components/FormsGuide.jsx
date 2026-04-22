import React from 'react';
import { ExternalLink } from 'lucide-react';

const FormsGuide = () => {
  const forms = [
    {
      id: 'Form 6',
      title: 'New Voter Registration',
      description: 'Use this form if you are a first-time voter or if you are shifting your constituency. Apply via NVSP, Voter Helpline App, or contacting your BLO.',
      linkTitle: 'Apply Online',
      linkUrl: 'https://voters.eci.gov.in/signup'
    },
    {
      id: 'Form 6A',
      title: 'NRI Voter Registration',
      description: 'Specifically designed for Non-Resident Indian (NRI) citizens who want to register themselves on the electoral roll.',
      linkTitle: 'Download Form',
      linkUrl: 'https://voters.eci.gov.in'
    },
    {
      id: 'Form 7',
      title: 'Deletion or Objection',
      description: 'Used for objecting to the inclusion of a name or requesting the deletion of a name from the electoral roll (Matdata Suchi).',
      linkTitle: 'File Objection',
      linkUrl: 'https://voters.eci.gov.in'
    },
    {
      id: 'Form 8',
      title: 'Correction & Updates',
      description: 'Essential for correcting entries in the roll, updating your address, replacing an EPIC card, or marking oneself as a Person with Disability (PwD).',
      linkTitle: 'Update Details',
      linkUrl: 'https://voters.eci.gov.in'
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="section-header">
        <h2>Electoral Forms Guide</h2>
        <p className="subtitle">Understand which ECI form you need for registration, updates, or corrections.</p>
      </div>

      <div className="forms-grid">
        {forms.map((form) => (
          <div key={form.id} className="form-card glass-panel">
            <div className="form-header">
              <span className="form-badge">{form.id}</span>
              <h3>{form.title}</h3>
            </div>
            <p>{form.description}</p>
            <a href={form.linkUrl} target="_blank" rel="noopener noreferrer" className="form-link">
              {form.linkTitle} <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormsGuide;
