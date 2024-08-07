import React from 'react';

const PotentialSteps = ({ potentialSteps = [] }) => {
  return (
    <div style={{ margin: '20px', width: '200px', border: '1px solid #ccc', padding: '10px' }}>
      <h3>Potential Steps</h3>
      {potentialSteps.map((step, index) => (
        <div key={step.id} style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px' }}>
          {step.text}
        </div>
      ))}
    </div>
  );
};

export default PotentialSteps;
