import React, { useState } from 'react';
import NodeList from './NodeList';
import PotentialSteps from './PotentialSteps';

const initialData = {
  id: '1',
  text: 'Root Node',
  steps: [
    { id: '1', text: 'Step 1', children: [] },
    { id: '2', text: 'Step 2', children: [] }
  ]
};

const initialPotentialSteps = [
  { id: '3', text: 'Potential Step 1' },
  { id: '4', text: 'Potential Step 2' }
];

const App = () => {
  const [data, setData] = useState(initialData);
  const [potentialSteps] = useState(initialPotentialSteps);
  const [history, setHistory] = useState([initialData]);

  const handleSave = () => {
    const json = JSON.stringify(data, null, 2);
    console.log('Saved JSON:', json);
  };

  const updateData = (newData) => {
    setHistory((prevHistory) => [...prevHistory, newData]);
    setData(newData);
  };

  const undo = () => {
    setHistory((prevHistory) => {
      const newHistory = [...prevHistory];
      newHistory.pop();
      setData(newHistory[newHistory.length - 1] || initialData);
      return newHistory;
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <PotentialSteps potentialSteps={potentialSteps} />
        <NodeList data={data} updateData={updateData} />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={undo} disabled={history.length <= 1}>Undo</button>
    </div>
  );
};

export default App;
