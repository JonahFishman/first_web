import React, { useState } from 'react';

const Node = ({ node, index, updateNode, deleteNode }) => {
  const [text, setText] = useState(node.text);

  const handleChange = (e) => {
    setText(e.target.value);
    updateNode(node.id, { ...node, text: e.target.value });
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={() => deleteNode(node.id)}>Delete</button>
      <div style={{ paddingLeft: '20px' }}>
        {node.children.map((child, childIndex) => (
          <Node key={child.id} node={child} index={childIndex} updateNode={updateNode} deleteNode={deleteNode} />
        ))}
      </div>
    </div>
  );
};

export default Node;
