import React from 'react';
import Node from './Node';

const NodeList = ({ data = { steps: [] }, updateData }) => {
  const updateNode = (id, newNode) => {
    const update = (nodes) => nodes.map((node) =>
      node.id === id ? newNode : { ...node, children: update(node.children) }
    );
    updateData({ ...data, steps: update(data.steps) });
  };

  const addNode = () => {
    const newNode = { id: Date.now().toString(), text: 'New Node', children: [] };
    updateData({ ...data, steps: [...data.steps, newNode] });
  };

  const deleteNode = (id) => {
    const removeNode = (nodes) => nodes.filter(node => node.id !== id).map(node => ({
      ...node, children: removeNode(node.children)
    }));
    updateData({ ...data, steps: removeNode(data.steps) });
  };

  return (
    <div style={{ margin: '20px', width: '200px', border: '1px solid #ccc', padding: '10px' }}>
      <h3>Steps</h3>
      {data.steps.map((node, index) => (
        <div key={node.id} style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px' }}>
          <Node node={node} index={index} updateNode={updateNode} deleteNode={deleteNode} />
        </div>
      ))}
      <button onClick={addNode}>Add Node</button>
    </div>
  );
};

export default NodeList;
